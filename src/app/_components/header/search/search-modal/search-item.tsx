import * as styles from './search-item.css';
import { format } from 'date-fns';
import { SearchResultItem } from '@/app/_domains/post/utils/search';

export function SearchItem({ post, selected }: { post: SearchResultItem; selected: boolean }) {
  return (
    <div
      key={post.slug}
      className={`${styles.searchResultItem} ${selected ? styles.selectedItem : ''}`}
    >
      <div className={styles.resultTitle}>{post.title}</div>
      {post.description && <div className={styles.resultDescription}>{post.description}</div>}
      <div className={styles.resultMeta}>
        <span>{format(new Date(post.date), 'yyyy.MM.dd')}</span>
        {post.tags && post.tags.length > 0 && (
          <div className={styles.resultTags}>
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className={styles.resultTag}>
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className={styles.resultTag}>+{post.tags.length - 3}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
