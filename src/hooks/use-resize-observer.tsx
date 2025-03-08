'use client';

import { RefObject, useEffect, useRef } from 'react';

export const useResizeObserver = (
  callback: ResizeObserverCallback,
  element: RefObject<HTMLElement | null>,
) => {
  const observer = useRef<ResizeObserver>(null);

  useEffect(() => {
    if (!observer.current) {
      observer.current = new ResizeObserver(callback);
    }

    const currentElement = element.current;
    if (observer.current && currentElement) {
      observer.current.unobserve(currentElement);
    }
    const observe = () => {
      if (currentElement && observer.current) {
        observer.current.observe(currentElement);
      }
    };
    observe();

    return () => {
      if (observer.current && currentElement) {
        observer.current.unobserve(currentElement);
      }
    };
  }, [element, callback]);
};
