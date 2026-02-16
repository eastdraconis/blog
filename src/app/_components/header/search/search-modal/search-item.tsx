import { format } from 'date-fns';
import { SearchResultItem } from '@/app/_domains/post/utils/search';
import { css } from '../../../../../../styled-system/css';

export function SearchItem({ post, selected }: { post: SearchResultItem; selected: boolean }) {
  return (
    <div
      key={post.slug}
      className={`${css({
        marginBottom: '12px',
        padding: '12px 16px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        backgroundColor: 'white',
        borderRadius: '8px',
        zIndex: 1000,
        '&[aria-focused="true"]': {
          backgroundColor: 'var(--colors-success)',
        },
      })} ${selected ? css({ backgroundColor: 'var(--colors-success) !important' }) : ''}`}
    >
      <div className={css({
        fontSize: '16px',
  fontWeight: 600,
})}>{post.title}</div>
      {post.description && <div className={css({
  fontSize: '14px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})}>{post.description}</div>}
      <div className={css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '12px',
})}>
        <span>{format(new Date(post.date), 'yyyy.MM.dd')}</span>
        {post.tags && post.tags.length > 0 && (
          <div className={css({
  display: 'flex',
  gap: '4px',
})}>
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className={css({
  padding: '2px 6px',
  borderRadius: '4px',
  backgroundColor: '#f2f4f8',
  fontSize: '12px',
})}>
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className={css({
  padding: '2px 6px',
  borderRadius: '4px',
  backgroundColor: '#f2f4f8',
  fontSize: '12px',
})}>+{post.tags.length - 3}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
