import { Post } from '../../types/post';
import { formatDateToKorean } from '../../utils/format-date-to-korean';
import { css } from '../../../../../../styled-system/css';

export const PostHead = ({ title: postTitle, tags, date, readingTime }: Post) => {
  return (
    <div className={css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '42px',
})}>
      <div className={css({
  display: 'flex',
  gap: '8px',
})}>
        {tags.map((tag) => (
          <div key={tag} className={css({
  fontSize: '0.75rem',
  padding: '2px 8px',
  border: '1px solid',
  borderColor: 'var(--colors-text)',
  borderRadius: '8px',
})}>
            {tag}
          </div>
        ))}
      </div>

      <div>
        <h1 className={css({
  textAlign: 'center',
  textWrap: 'pretty',
  fontWeight: 'bold',
  lineHeight: 1.55,
  fontSize: '2rem',
  color: 'var(--colors-text)',
  '@media (max-width: 768px)': {
    fontSize: '1.75rem',
  },
})}>{postTitle}</h1>
      </div>

      <div className={css({
  display: 'flex',
  gap: '8px',
})}>
        <span className={css({
  fontSize: '1rem',
  color: 'var(--colors-gray)',
})}>{formatDateToKorean(date)}</span>
        <span className={css({
  color: 'var(--colors-gray)',
  borderRadius: '50%',
  backgroundColor: 'var(--colors-gray)',
  width: '4px',
  height: '4px',
  margin: 'auto 0',
})} />
        <span className={css({
  fontSize: '1rem',
  color: 'var(--colors-gray)',
})}>{readingTime}</span>
      </div>
    </div>
  );
};
