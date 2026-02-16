'use client';

import { CloseIcon } from './close-icon';
import { useTagToggle } from '@/app/_domains/post/hooks/useTagToggle';
import { css } from '../../../../../../../styled-system/css';

const getFilterTagClass = (isSelected: boolean) => {
  if (isSelected) {
    return css({
      cursor: 'pointer',
      borderRadius: '8px',
      padding: '4px 8px',
      width: 'fit-content',
      display: 'flex',
      gap: '4px',
      backgroundColor: '#b6d0eb',
      color: 'white',
    });
  }

  return css({
    cursor: 'pointer',
    borderRadius: '8px',
    padding: '4px 8px',
    width: 'fit-content',
    display: 'flex',
    gap: '4px',
    backgroundColor: '#e5e4df',
    '&:hover': {
      backgroundColor: '#d7d6d2',
    },
  });
};

interface FilterTagProps {
  tag: string;
}
export const FilterTag = ({ tag }: FilterTagProps) => {
  const { toggleTag, isTagSelected } = useTagToggle();
  const isSelected = isTagSelected(tag);

  return (
    <div className={getFilterTagClass(isSelected)} onClick={() => toggleTag(tag)}>
      <span className={css({
  fontSize: '12px',
  fontWeight: 500,
})}>{tag}</span>
      {isSelected && <CloseIcon />}
    </div>
  );
};
