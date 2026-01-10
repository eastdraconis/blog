import FlexSearch, { Charset, Encoder } from 'flexsearch';
import { getAllMdx } from '../api';

export interface SearchResultItem {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags: string[];
  image?: string;
  score?: number;
}

interface FlexSearchResult {
  field: string;
  result: Array<{
    doc: SearchResultItem;
    score?: number;
  }>;
}

interface FlexSearchDocument {
  add: (doc: any) => void;
  search: (query: string, options: any) => FlexSearchResult[];
}

class SearchIndexManager {
  private static instance: SearchIndexManager;
  private searchIndex: FlexSearchDocument | null = null;
  private exactSearchIndex: FlexSearchDocument | null = null;
  private indexingPromise: Promise<{
    standard: FlexSearchDocument;
    exact: FlexSearchDocument;
  }> | null = null;
  private isIndexing: boolean = false;
  private indexedPostCount: number = 0;

  private constructor() {
    this.getIndexes();
  }

  // 싱글톤 인스턴스 가져오기
  public static getInstance(): SearchIndexManager {
    if (!SearchIndexManager.instance) {
      SearchIndexManager.instance = new SearchIndexManager();
    }
    return SearchIndexManager.instance;
  }

  // 인덱스 초기화 또는 가져오기
  public async getIndexes(): Promise<{ standard: FlexSearchDocument; exact: FlexSearchDocument }> {
    // 이미 인덱스가 생성되어 있으면 바로 반환
    if (this.searchIndex && this.exactSearchIndex) {
      return {
        standard: this.searchIndex,
        exact: this.exactSearchIndex,
      };
    }

    // 인덱싱 작업이 이미 진행 중이면 그 프로미스를 반환
    if (this.isIndexing && this.indexingPromise) {
      return this.indexingPromise;
    }

    // 인덱싱 시작
    this.isIndexing = true;
    this.indexingPromise = this.initializeIndexes();

    try {
      const indexes = await this.indexingPromise;
      this.searchIndex = indexes.standard;
      this.exactSearchIndex = indexes.exact;
      return indexes;
    } finally {
      this.isIndexing = false;
      this.indexingPromise = null;
    }
  }

  // 인덱스 초기화
  private async initializeIndexes(): Promise<{
    standard: FlexSearchDocument;
    exact: FlexSearchDocument;
  }> {
    console.log('🔍 Initializing search indexes...');
    const startTime = Date.now();

    const posts = await getAllMdx();
    this.indexedPostCount = posts.length;

    // 표준 검색 인덱스 (단어 단위 검색)
    const standardIndex = new FlexSearch.Document({
      tokenize: 'forward',
      cache: 100,
      document: {
        id: 'slug',
        index: [
          { field: 'title', tokenize: 'forward', resolution: 9 },
          { field: 'description', tokenize: 'forward', resolution: 9 },
          { field: 'content', tokenize: 'forward', resolution: 9 },
          { field: 'tags', tokenize: 'forward', resolution: 9 },
        ],
        store: ['title', 'description', 'slug', 'tags', 'image', 'date'],
      },
    }) as unknown as FlexSearchDocument;

    // 정확한 문구 검색 인덱스
    const exactIndex = new FlexSearch.Document({
      tokenize: 'strict',
      cache: 100,
      document: {
        id: 'slug',
        index: [
          { field: 'title', tokenize: 'strict', resolution: 9 },
          { field: 'description', tokenize: 'strict', resolution: 9 },
          { field: 'content', tokenize: 'strict', resolution: 9, encoder: Charset.Exact },
          { field: 'tags', tokenize: 'strict', resolution: 9 },
        ],
        store: ['title', 'description', 'slug', 'tags', 'image', 'date'],
      },
    }) as unknown as FlexSearchDocument;

    // 모든 포스트를 인덱스에 추가
    posts.forEach((post) => {
      const doc = {
        slug: post.slug,
        title: post.title,
        description: post.description || '',
        content: post.content,
        tags: post.tags ?? [],
        date: post.date,
        image: post.image || '',
      };

      standardIndex.add(doc);
      exactIndex.add(doc);
    });

    const endTime = Date.now();

    return { standard: standardIndex, exact: exactIndex };
  }

  // 인덱스 상태 정보 가져오기
  public getIndexStats() {
    return {
      isIndexed: !!this.searchIndex && !!this.exactSearchIndex,
      postCount: this.indexedPostCount,
    };
  }

  // 명시적으로 인덱스 재구축
  public async rebuildIndexes(): Promise<{
    standard: FlexSearchDocument;
    exact: FlexSearchDocument;
  }> {
    this.searchIndex = null;
    this.exactSearchIndex = null;
    return this.getIndexes();
  }
}

/**
 * 검색 결과 가져오기
 *
 * @param indexes 표준 및 정확한 검색을 위한 인덱스
 * @param query 검색어
 * @param limit 결과 수 제한 (기본값 10)
 * @returns 처리된 검색 결과
 */
export function getSearchResults(
  indexes: { standard: FlexSearchDocument; exact: FlexSearchDocument },
  query: string,
  limit: number = 10,
): SearchResultItem[] {
  if (!query.trim()) return [];

  // 1. 먼저 정확한 문구 검색 시도
  const exactResults = indexes.exact.search(query, {
    limit,
    enrich: true,
  }) as FlexSearchResult[];
  // 정확한 문구 검색으로 결과가 충분하면 바로 반환
  const hasExactResults =
    exactResults.length > 0 && exactResults.some((result) => result.result.length > 0);

  if (hasExactResults) {
    // 정확한 검색 결과에 높은 점수 부여
    exactResults.forEach((result) => {
      result.result.forEach((item) => {
        // 정확한 검색 결과에 매우 높은 점수를 부여하여 항상 상위에 오도록 함
        item.score = +1000;
      });
    });
  }

  // 2. 정확한 검색 결과가 없으면 표준 검색 수행
  const standardResults = indexes.standard.search(query, {
    limit,
    enrich: true,
    // suggest: true, // 오타 교정 활성화
  }) as FlexSearchResult[];
  return processSearchResults(standardResults.concat(exactResults), limit);
}

function processSearchResults(results: FlexSearchResult[], limit: number): SearchResultItem[] {
  // 결과가 비었을 경우
  if (!results.length || !results.some((result) => result.result.length > 0)) {
    return [];
  }

  // 중복을 제거하고 점수에 따라 통합된 결과 생성
  const uniqueResults = new Map<string, SearchResultItem>();

  // 각 필드의 검색 결과를 순회
  results.forEach((result) => {
    result.result.forEach((item) => {
      const existingItem = uniqueResults.get(item.doc.slug);

      // 문자열로 저장된 tags를 배열로 변환
      const processedItem = {
        ...item.doc,
        // tags가 문자열인 경우 배열로 변환 (빈 문자열 제거)
        tags: item.doc.tags,
        score: item.score,
      };

      // 기존 항목이 없거나, 현재 항목의 점수가 더 높으면 맵 업데이트
      if (!existingItem || (item.score && existingItem.score && item.score > existingItem.score)) {
        uniqueResults.set(item.doc.slug, processedItem);
      }
    });
  });

  // 점수에 따라 정렬하여 반환
  return Array.from(uniqueResults.values())
    .sort((a, b) => {
      // 점수가 같으면 최신 글이 우선
      if (a.score === b.score) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return (b.score || 0) - (a.score || 0);
    })
    .slice(0, limit);
}

export const searchIndexManager = SearchIndexManager.getInstance();
