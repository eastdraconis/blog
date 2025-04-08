import { FilterTag } from './filter-tag';
import * as styles from './style.css';

interface FilterTagGroupProps {
  tags: string[];
}

export const FilterTagGroup = ({ tags }: FilterTagGroupProps) => {
  return (
    <div className={styles.tagContainer}>
      {tags.map((tag) => (
        <FilterTag key={tag} tag={tag} />
      ))}
    </div>
  );
};
