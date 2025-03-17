'use client';

import { useCallback, useEffect } from 'react';
import * as styles from './style.css';

export const Giscus = () => {
  const setGiscus = useCallback(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'eastdraconis/blog');
    script.setAttribute('data-repo-id', 'R_kgDOLoxk5A');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOLoxk5M4Ce-7Q');
    script.setAttribute('data-mapping', 'title');
    script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'noborder_light');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;

    const commentContainer = document.getElementById('comment-container');
    if (commentContainer) commentContainer.appendChild(script);

    return () => {
      const commentContainer = document.getElementById('comment-container');
      if (commentContainer) commentContainer.innerHTML = '';
    };
  }, []);

  useEffect(() => {
    setGiscus();
  }, [setGiscus]);

  return <div className={styles.giscus} id='comment-container'></div>;
};
