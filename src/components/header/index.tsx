import * as styles from './style.css';
import { Logo } from './logo';
import { Menu } from './menu';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <Logo />
        <Menu />
      </div>
    </header>
  );
};
