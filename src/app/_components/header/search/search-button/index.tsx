'use client';

import { ButtonHTMLAttributes } from 'react';
import { SearchIcon } from '../search-icon';
import * as styles from './style.css';

export function SearchButton({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.container} {...props}>
      <div className={styles.iconWrapper}>
        <SearchIcon />
        <span className={styles.text}>검색</span>
      </div>
      <kbd className={styles.shortcut}>
        <span className={styles.shortcutKey}>⌘</span>
        <span className={styles.shortcutKey}>K</span>
      </kbd>
    </button>
  );
}
