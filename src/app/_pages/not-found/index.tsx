import React from 'react';
import Link from 'next/link';
import * as styles from './style.css';

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
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <Link href={linkHref} className={styles.link}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};
