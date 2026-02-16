import Link from 'next/link';
import { RssIcon } from './rss-icon';
import { css } from '../../../../../styled-system/css';

export const RssButton = () => {
  return (
    <Link href={'/rss.xml'} className={css({
  padding: '4px',
  borderRadius: '8px',
  cursor: 'pointer',
  _hover: {
    backgroundColor: 'var(--colors-success)',
  },
})}>
      <RssIcon />
    </Link>
  );
};
