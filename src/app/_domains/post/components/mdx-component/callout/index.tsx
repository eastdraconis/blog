import { cloneElement, isValidElement, PropsWithChildren, Children, ReactNode } from 'react';
import * as styles from './style.css';

interface CalloutProps extends PropsWithChildren {
  variant?: 'warn' | 'primary' | 'caution';
  title?: string;
}

const renderChildren = (children: ReactNode) => {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }

    if (isValidElement(child)) {
      return cloneElement(child, {
        style: { marginBottom: 0 },
      } as { className: string; style: React.CSSProperties });
    }

    return child;
  });
};

const Callout = (props: CalloutProps) => {
  switch (props.variant) {
    case 'primary': {
      return (
        <blockquote {...props} className={styles.primary}>
          <div className={styles.iconWrapper}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='#000000'
              viewBox='0 0 256 256'
            >
              <path d='M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z'></path>
            </svg>
          </div>
          <div className={styles.contentContainer}>
            <span>
              {props.title && <span className={styles.title}>{props.title}</span>}
              {renderChildren(props.children)}
            </span>
          </div>
        </blockquote>
      );
    }
    case 'warn': {
      return (
        <blockquote {...props} className={styles.warn}>
          <div className={styles.iconWrapper}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='#000000'
              viewBox='0 0 256 256'
            >
              <path d='M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.08,64a8,8,0,1,1-13.84,8c-7.47-12.91-19.21-20-33.08-20s-25.61,7.1-33.08,20a8,8,0,1,1-13.84-8c10.29-17.79,27.39-28,46.92-28S164.63,154.2,174.92,172Z'></path>
            </svg>
          </div>
          <div className={styles.contentContainer}>
            <span>
              {props.title && <span className={styles.title}>{props.title}</span>}
              {renderChildren(props.children)}
            </span>
          </div>
        </blockquote>
      );
    }
    case 'caution': {
      return (
        <blockquote {...props} className={styles.caution}>
          <div className={styles.iconWrapper}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='#000000'
              viewBox='0 0 256 256'
            >
              <path d='M92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm68,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM171.56,81.34,128,110.39l-43.56-29a8,8,0,1,0-8.88,13.32l48,32a8,8,0,0,0,8.88,0l48-32a8,8,0,0,0-8.88-13.32Zm-15.13,96C148,171.73,139.94,168,128,168s-20,3.73-28.43,9.34a8,8,0,0,0,8.86,13.32C114.93,186.34,120,184,128,184s13.07,2.34,19.57,6.66a8,8,0,1,0,8.86-13.32Z'></path>
            </svg>
          </div>
          <div className={styles.contentContainer}>
            <span>
              {props.title && <span className={styles.title}>{props.title}</span>}
              {renderChildren(props.children)}
            </span>
          </div>
        </blockquote>
      );
    }
    default: {
      return (
        <blockquote {...props} className={styles.note}>
          <div className={styles.iconWrapper}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='#000000'
              viewBox='0 0 256 256'
            >
              <path d='M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-56a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,160ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Z'></path>
            </svg>
          </div>
          <div className={styles.contentContainer}>
            <span>
              {props.title && <span className={styles.title}>{props.title}</span>}
              {renderChildren(props.children)}
            </span>
          </div>
        </blockquote>
      );
    }
  }
};

export default Callout;
