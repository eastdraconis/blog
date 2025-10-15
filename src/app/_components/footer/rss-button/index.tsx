import Link from 'next/link';
import { RssIcon } from './rss-icon';
import * as styles from './style.css';

export const RssButton = () => {
  return (
    <Link href={'/rss.xml'} className={styles.buttonWrapper}>
      <RssIcon />
    </Link>
  );
};
