import React from 'react';
import Link from 'next/link';
import { css } from '../../../../styled-system/css';

interface NotFoundProps {
  title?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
}

export const NotFound = ({
  title = '페이지를 찾을 수 없습니다',
  description = '요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.',
  linkText = '홈으로 돌아가기',
  linkHref = '/',
}: NotFoundProps) => {
  return (
    <div className={css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '2rem',
  textAlign: 'center',
})}>
      <div className={css({
  maxWidth: '600px',
  width: '100%',
})}>
        <h1 className={css({
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: '1rem',
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  },
})}>{title}</h1>
        <p className={css({
  fontSize: '1.25rem',
  marginBottom: '2rem',
  color: '#6a6c6e',
  lineHeight: '1.6',
  '@media (max-width: 768px)': {
    fontSize: '1rem',
  },
})}>{description}</p>
        <Link href={linkHref} className={css({
  display: 'inline-block',
  padding: '0.75rem 1.5rem',
  backgroundColor: '#b6d0eb',
  color: 'white',
  borderRadius: '0.375rem',
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'background-color 0.2s ease',
  _hover: {
    opacity: 0.8,
  },
})}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};
