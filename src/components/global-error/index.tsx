import React from 'react';
import Link from 'next/link';
import * as styles from './style.css';

interface ErrorProps {
  error?: Error;
  reset?: () => void;
  title?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
}

export default function GlboalError({
  error,
  reset,
  title = '오류가 발생했습니다',
  description = '페이지를 로드하는 중 문제가 발생했습니다. 다시 시도하거나 홈으로 돌아가세요.',
  linkText = '홈으로 돌아가기',
  linkHref = '/',
}: ErrorProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>

        {error && process.env.NODE_ENV === 'development' && (
          <div className={styles.errorDetails}>
            <p className={styles.errorName}>{error.name}</p>
            <p className={styles.errorMessage}>{error.message}</p>
            {error.stack && (
              <pre className={styles.errorStack}>
                <code>{error.stack}</code>
              </pre>
            )}
          </div>
        )}

        <div className={styles.actions}>
          {reset && (
            <button onClick={reset} className={styles.resetButton}>
              다시 시도하기
            </button>
          )}
          <Link href={linkHref} className={styles.link}>
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}
