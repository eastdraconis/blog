import Link from 'next/link';
import * as styles from './style.css';

export const Logo = () => {
  return (
    <Link href='/'>
      <span className={styles.logo}>
        <svg
          fill='#000000'
          width='32px'
          height='32px'
          viewBox='0 0 32 32'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
          <g id='SVGRepo_iconCarrier'>
            <path d='M24.835 31.207l6.492-0.047-0.008-3.279c-5.175-7.613-4.843-13.627-3.515-19.265-8.169-6.933-17.586-7.277-26.352-7.378 2.521 2.903 2.43 5.953 0.738 8.709 3.83 1.226 4.048 6.582 2.509 9.742 4.728-1.33 9.333 2.794 6.495 7.528 5.75-4.834 14.165-2.732 13.641 3.99l0-0z'></path>{' '}
          </g>
        </svg>
      </span>
    </Link>
  );
};
