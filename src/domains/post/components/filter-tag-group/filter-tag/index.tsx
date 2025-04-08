'use client';

import * as styles from './style.css';
import { CloseIcon } from './close-icon';
import { useTagToggle } from '@/domains/post/hooks/useTagToggle';

interface FilterTagProps {
  tag: string;
}
export const FilterTag = ({ tag }: FilterTagProps) => {
  const { toggleTag, isTagSelected } = useTagToggle();

  return (
    <div
      className={styles.container({ selected: isTagSelected(tag) })}
      onClick={() => toggleTag(tag)}
    >
      <span className={styles.tag}>{tag}</span>
      {isTagSelected(tag) && <CloseIcon />}
    </div>
  );
};
