import Link from 'next/link';
import { ExternalLinkIcon } from './external-link-icon';
import * as styles from './style.css';
export const Menu = () => {
  return (
    <div>
      <Link href='https://github.com/eastdraconis'>
        <span className={styles.link}>
          Github
          <ExternalLinkIcon />
        </span>
      </Link>
    </div>
  );
};
