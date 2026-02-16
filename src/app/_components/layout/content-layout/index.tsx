import { css } from '../../../../../styled-system/css';

export const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={css({
  backgroundColor: '#faf9f5',
  margin: 'auto',
  position: 'relative',
  '@media (max-width: 768px)': {
    padding: '0 32px',
    paddingTop: '32px',
    maxWidth: `calc(900px + ${32 * 2}px)`,
  },
  '@media (min-width: 768px)': {
    padding: '0 64px',
    paddingTop: '64px',
    maxWidth: `calc(1200px + ${64 * 2}px)`,
  },
})}>
      {children}
    </div>
  );
};
