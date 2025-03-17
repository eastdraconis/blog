import * as styles from './style.css';
import { GiveCoffeeButton } from './give-coffee-button';
import { RssButton } from './rss-button';
export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerActions}>
        <RssButton />
        <GiveCoffeeButton />
      </div>

      <div className={styles.copyrightWrapper}>
        <span className={styles.copyrightText}>
          {`© ${new Date().getFullYear()}. handongryong all rights reserved.`}
        </span>
      </div>
    </footer>
  );
};
