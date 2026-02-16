import { css } from '../../../../../../styled-system/css';
import { FilterTag } from './filter-tag';

interface FilterTagGroupProps {
  tags: string[];
}

export const FilterTagGroup = ({ tags }: FilterTagGroupProps) => {
  return (
    <div className={css({
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
})}>
      {tags.map((tag) => (
        <FilterTag key={tag} tag={tag} />
      ))}
    </div>
  );
};
