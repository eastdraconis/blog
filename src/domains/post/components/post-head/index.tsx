import { Post } from '../../types/post';
import { formatDateToKorean } from '../../libs/format-date-to-korean';
import * as styles from './style.css';

export const PostHead = ({ title, tags, date, readingTime }: Post) => {
  return (
    <div className={styles.container}>
      <div className={styles.tagContainer}>
        {tags.map((tag) => (
          <div key={tag} className={styles.tag}>
            {tag}
          </div>
        ))}
      </div>

      <div>
        <h1 className={styles.title}>{title}</h1>
      </div>

      <div className={styles.additionalInfo}>
        <span className={styles.date}>{formatDateToKorean(date)}</span>
        <span className={styles.readingTime}>{readingTime}</span>
      </div>
    </div>
  );
};
