'use client';

import { ButtonHTMLAttributes } from 'react';
import { SearchIcon } from '../search-icon';
import * as styles from './style.css';

export function SearchButton({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.container} {...props}>
      <SearchIcon />
      <span className={styles.text}>검색</span>
    </button>
  );
}
