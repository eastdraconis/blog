import { css } from '../../../../styled-system/css';
import { GiveCoffeeButton } from './give-coffee-button';
import { RssButton } from './rss-button';

export const Footer = () => {
  return (
    <footer className={css({
  backgroundColor: '#1C1C22',
  padding: '60px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})}>
      <div className={css({
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
})}>
        <RssButton />
        <GiveCoffeeButton />
      </div>

      <div className={css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})}>
        <span className={css({
  fontSize: '14px',
  color: '#ffffff',
})}>
          {`© ${new Date().getFullYear()}. handongryong all rights reserved.`}
        </span>
      </div>
    </footer>
  );
};
