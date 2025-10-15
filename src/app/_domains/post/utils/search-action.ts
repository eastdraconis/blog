'use server';

import { searchIndexManager, getSearchResults, SearchResultItem } from './search';

/**
 * 검색 서버 액션 함수
 *
 * 클라이언트에서 호출할 수 있는 서버 액션으로,
 * 검색 인덱스를 통해 포스트를 검색하고 결과를 반환합니다.
 *
 * @param query 검색어
 * @param limit 최대 결과 수 (기본값 10)
 * @returns 검색 결과 배열
 */
export async function searchAction(query: string, limit: number = 10): Promise<SearchResultItem[]> {
  if (!query.trim()) {
    return [];
  }

  try {
    // 싱글톤 인스턴스에서 인덱스 가져오기
    const indexes = await searchIndexManager.getIndexes();

    // 검색 실행 및 결과 반환 (정확한 검색 및 표준 검색 모두 시도)
    return getSearchResults(indexes, query, limit);
  } catch (error) {
    console.error('검색 중 오류 발생:', error);
    return [];
  }
}
