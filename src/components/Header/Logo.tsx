import Link from 'next/link';
import * as styles from './style.css';

export const Logo = () => {
  return (
    <Link href='/'>
      <span className={styles.logo}>韓東龍</span>
    </Link>
  );
};
