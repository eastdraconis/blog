import React from 'react';
import Link from 'next/link';
import { css } from '../../../../styled-system/css';

interface ErrorProps {
  error?: Error;
  reset?: () => void;
  title?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
}

export const GlobalError = ({
  error,
  reset,
  title = '오류가 발생했습니다',
  description = '페이지를 로드하는 중 문제가 발생했습니다. 다시 시도하거나 홈으로 돌아가세요.',
  linkText = '홈으로 돌아가기',
  linkHref = '/',
}: ErrorProps) => {
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
  maxWidth: '700px',
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
  color: 'var(--colors-gray)',
  lineHeight: '1.6',
  '@media (max-width: 768px)': {
    fontSize: '1rem',
  },
})}>{description}</p>

        {error && process.env.NODE_ENV === 'development' && (
          <div className={css({
  marginBottom: '2rem',
  padding: '1.5rem',
  backgroundColor: '#f7fafc',
  borderRadius: '0.5rem',
  border: '1px solid #e2e8f0',
  textAlign: 'left',
  overflow: 'auto',
  maxWidth: '100%',
})}>
            <p className={css({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: 'var(--colors-caution)',
  marginBottom: '0.5rem',
})}>{error.name}</p>
            <p className={css({
  fontSize: '1rem',
  color: 'var(--colors-gray)',
  marginBottom: '1rem',
})}>{error.message}</p>
            {error.stack && (
              <pre className={css({
  fontSize: '0.875rem',
  backgroundColor: '#2d3748',
  color: '#e2e8f0',
  padding: '1rem',
  borderRadius: '0.375rem',
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
})}>
                <code>{error.stack}</code>
              </pre>
            )}
          </div>
        )}

        <div className={css({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  justifyContent: 'center',
  flexWrap: 'wrap',
})}>
          {reset && (
            <button onClick={reset} className={css({
  padding: '0.75rem 1.5rem',
  backgroundColor: 'var(--colors-warn)',
  color: 'white',
  border: 'none',
  borderRadius: '0.375rem',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  _hover: {
    opacity: 0.8,
  },
})}>
              다시 시도하기
            </button>
          )}
          <Link href={linkHref} className={css({
  display: 'inline-block',
  padding: '0.75rem 1.5rem',
  backgroundColor: 'var(--colors-success)',
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
    </div>
  );
};
