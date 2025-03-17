'use client';

import { useTagToggle } from '@/domains/post/hooks/useTagToggle';
import * as styles from './style.css';
import { CloseIcon } from './close-icon';

interface TagProps {
  tag: string;
}
export const Tag = ({ tag }: TagProps) => {
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
