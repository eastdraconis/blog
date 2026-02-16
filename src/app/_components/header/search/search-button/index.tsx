'use client';

import { ButtonHTMLAttributes } from 'react';
import { SearchIcon } from '../search-icon';
import { css } from '../../../../../../styled-system/css';

export function SearchButton({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={css({
  width: '180px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '4px 8px',
  borderRadius: '12px',
  border: '2px solid transparent',
  backgroundColor: 'white',
  transition: 'all 0.2s ease',
  _hover: {
    borderColor: '#b6d0eb',
  },
})} {...props}>
      <div className={css({
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
})}>
        <SearchIcon />
        <span className={css({
  fontSize: '14px',
  fontWeight: 500,
})}>검색</span>
      </div>
      <kbd className={css({
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  marginLeft: '4px',
})}>
        <span className={css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '18px',
  height: '18px',
  padding: '0 4px',
  fontSize: '11px',
  fontWeight: 500,
  lineHeight: 1,
  color: '#6a6c6e',
  backgroundColor: '#f5f5f5',
  border: '1px solid #d1d1d1',
  borderRadius: '4px',
  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
})}>⌘</span>
        <span className={css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '18px',
  height: '18px',
  padding: '0 4px',
  fontSize: '11px',
  fontWeight: 500,
  lineHeight: 1,
  color: '#6a6c6e',
  backgroundColor: '#f5f5f5',
  border: '1px solid #d1d1d1',
  borderRadius: '4px',
  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
})}>K</span>
      </kbd>
    </button>
  );
}
