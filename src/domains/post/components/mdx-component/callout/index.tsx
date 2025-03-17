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
          <div className={styles.center}>
            <svg
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 3L14.0357 8.16153C14.2236 8.63799 14.3175 8.87622 14.4614 9.0771C14.5889 9.25516 14.7448 9.41106 14.9229 9.53859C15.1238 9.68245 15.362 9.77641 15.8385 9.96432L21 12L15.8385 14.0357C15.362 14.2236 15.1238 14.3175 14.9229 14.4614C14.7448 14.5889 14.5889 14.7448 14.4614 14.9229C14.3175 15.1238 14.2236 15.362 14.0357 15.8385L12 21L9.96432 15.8385C9.77641 15.362 9.68245 15.1238 9.53859 14.9229C9.41106 14.7448 9.25516 14.5889 9.0771 14.4614C8.87622 14.3175 8.63799 14.2236 8.16153 14.0357L3 12L8.16153 9.96432C8.63799 9.77641 8.87622 9.68245 9.0771 9.53859C9.25516 9.41106 9.41106 9.25516 9.53859 9.0771C9.68245 8.87622 9.77641 8.63799 9.96432 8.16153L12 3Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
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
          <div className={styles.center}>
            <svg
              fill='currentColor'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              // xmlns:xlink='http://www.w3.org/1999/xlink'
              width='20px'
              height='20px'
              viewBox='0 0 570 570'
              // xml:space='preserve'
            >
              <g>
                <path
                  d='M538.5,386.199L356.5,70.8c-16.4-28.4-46.7-45.9-79.501-45.9c-32.8,0-63.1,17.5-79.5,45.9L12.3,391.6
		c-16.4,28.4-16.4,63.4,0,91.8C28.7,511.8,59,529.3,91.8,529.3H462.2c0.101,0,0.2,0,0.2,0c50.7,0,91.8-41.101,91.8-91.8
		C554.2,418.5,548.4,400.8,538.5,386.199z M316.3,416.899c0,21.7-16.7,38.3-39.2,38.3s-39.2-16.6-39.2-38.3V416
		c0-21.601,16.7-38.301,39.2-38.301S316.3,394.3,316.3,416V416.899z M317.2,158.7L297.8,328.1c-1.3,12.2-9.4,19.8-20.7,19.8
		s-19.4-7.7-20.7-19.8L237,158.6c-1.3-13.1,5.801-23,18-23H299.1C311.3,135.7,318.5,145.6,317.2,158.7z'
                />
              </g>
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
          <div className={styles.center}>
            <svg
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.3935 6.97639C8.38298 2.64143 15.418 1.9105 21.0973 4.78361C15.7064 4.36298 10.1776 6.11907 5.93875 10.0519M3 6.50002L15 21'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
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
          <div className={styles.center}>
            <svg
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
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
