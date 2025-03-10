'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as styles from './style.css';
import { Post } from '../../types/post';
import { useRef } from 'react';
import { useResizeObserver } from '@/hooks/use-resize-observer';

export const PostCard = ({ slug, tags, title, date, image }: Post) => {
  const targetRef = useRef<HTMLAnchorElement | null>(null);

  const calcGridRowEnd = () => {
    if (window.visualViewport?.width && window.visualViewport.width < 700) return;
    if (!targetRef.current) return;
    console.log('calc');
    const child = targetRef.current.children[0];
    if (!child) return;

    const rect = child.getBoundingClientRect();

    const cal = Math.ceil((rect.height + 10) / 30);
    targetRef.current.style.gridRowEnd = `span ${cal}`;
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
                sizes='(max-width: 700px) 100vw, 33vw'
              />
            </div>
          </div>
        )}
        <div className={styles.contentContainer}>
          <div className={styles.tagContainer}>
            {tags.map((tag) => (
              <span className={styles.tag} key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.date}>{date}</span>
        </div>
        {/* <div className={styles.dateWrapper}></div> */}
      </div>
    </Link>
  );
};
