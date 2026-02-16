'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../../types/post';
import { useRef, useState } from 'react';
import { useResizeObserver } from '@/app/_hooks/use-resize-observer';
import { formatDateToKorean } from '../../utils/format-date-to-korean';
import { css } from '../../../../../../styled-system/css';

export const PostCard = ({ slug, tags, title, image, date: createdDate }: Post) => {
  const targetRef = useRef<HTMLAnchorElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

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
    <Link
      className={`${css({
  position: 'relative',
  backgroundColor: '#ffffff',
  borderRadius: '24px',
  display: 'block',
  overflow: 'hidden',
  gridColumnEnd: 'span 4',
  '@media (max-width: 1024px)': {
    gridColumnEnd: 'span 6',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    '@supports (animation-timeline: view())': {
      animation: 'postCardSlideFadeIn both',
      animationTimeline: 'view()',
      animationRange: 'contain -60% contain 50%',
    },
  },
})} ${isHovered ? css({ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12)' }) : ''}`}
      href={`/posts/${slug}`}
      ref={targetRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div>
        {image && (
          <div
            className={`${css({
              aspectRatio: '4/3',
              position: 'relative',
              '@media (max-width: 700px)': {
                aspectRatio: '16/9',
              },
            })}`}
          >
            <div className={css({
              height: '100%',
              position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  paddingBottom: 0,
  display: 'inline-block',
  overflow: 'hidden',
})}>
              <Image
                src={image}
                alt={title}
                className={css({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
  transition: 'all 0.3s ease-in-out',
  ...(isHovered ? { transform: 'translateY(-2px)' } : {}),
})}
                fill
                quality={100}
                sizes='300px'
                loading='lazy'
              />
            </div>
          </div>
        )}
        <div className={css({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '32px',
})}>
          <h2 className={css({
  fontWeight: 700,
  fontSize: '20px',
})}>{title}</h2>
          <div className={css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})}>
            <div className={css({
  display: 'flex',
  flex: 1,
  gap: '8px',
})}>
              {tags.map((tag) => (
                <span className={css({
  padding: '4px 8px',
  fontSize: '12px',
  borderRadius: '8px',
  background: '#f2f3f6',
})} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={css({
  fontSize: '12px',
  color: 'var(--colors-gray)',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
})}>{formatDateToKorean(createdDate)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
