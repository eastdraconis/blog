'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as styles from './style.css';
import { Post } from '../../types/post';
import { useRef } from 'react';
import { useResizeObserver } from '@/app/_hooks/use-resize-observer';
import { formatDateToKorean } from '../../utils/format-date-to-korean';

export const PostCard = ({ slug, tags, title, image, date }: Post) => {
  const targetRef = useRef<HTMLAnchorElement | null>(null);

  const calcGridRowEnd = () => {
    if (!targetRef.current || !window.visualViewport) return;

    if (window.visualViewport.width < 700) {
      targetRef.current.style.gridRow = 'auto';
      return;
    }

    const child = targetRef.current.children[0];
    if (!child) return;

    const rect = child.getBoundingClientRect();

    const cal = Math.ceil((rect.height + 24) / 34);
    targetRef.current.style.gridRow = `auto / span ${cal}`;
  };

  useResizeObserver(calcGridRowEnd, targetRef);

  return (
    <Link className={styles.container} href={`/posts/${slug}`} ref={targetRef}>
      <div>
        {image && (
          <div className={styles.postCardImage}>
            <div className={styles.imageWrapper}>
              <Image
                src={image}
                alt={title}
                className={styles.image}
                fill
                quality={100}
                sizes='300px'
                loading='lazy'
              />
            </div>
          </div>
        )}
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.infoContainer}>
            <div className={styles.tagContainer}>
              {tags.map((tag) => (
                <span className={styles.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={styles.date}>{formatDateToKorean(date)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
