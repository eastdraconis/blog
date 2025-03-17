import { Tag } from './tag';
import * as styles from './style.css';

interface FilterTagProps {
  tags: string[];
}

export const FilterTag = ({ tags }: FilterTagProps) => {
  return (
    <div className={styles.tagContainer}>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
};
