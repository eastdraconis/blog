import Image from 'next/image';
import { css } from '../../../../../../styled-system/css';

interface QrModalProps {
  onClose: () => void;
}

export const QrModal = ({ onClose }: QrModalProps) => {
  return (
    <div className={css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backdropFilter: 'blur(5px)',
  zIndex: 100,
})} onClick={onClose}>
      <div className={css({
  width: '300px',
  padding: '36px',
  backgroundColor: 'white',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
  zIndex: 200,
  borderRadius: '8px',
})}>
        <div className={css({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})}>
          <h2 className={css({
  fontWeight: 'bold',
  fontSize: '16px',
  textAlign: 'center',
})}>Buy me a coffee</h2>
          <div className={css({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})}>
            <span className={css({
  fontSize: '14px',
  fontWeight: 'bold',
})}>QR 송금</span>
            <div className={css({
  display: 'flex',
  justifyContent: 'space-between',
})}>
              <div className={css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
})}>
                <Image
                  src={'/toss.png'}
                  width={48}
                  height={48}
                  quality={100}
                  priority
                  alt='toss'
                  className={css({
  width: '48px',
  height: '48px',
})}
                />
                <Image src={'/qr-toss.png'} alt='qr-code' width={100} height={100} quality={100} />
              </div>
              <div className={css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
})}>
                <Image
                  src={'/kakao.png'}
                  width={48}
                  height={48}
                  quality={100}
                  priority
                  alt='kakaopay'
                  className={css({
  width: '48px',
  height: '48px',
})}
                  style={{ objectFit: 'contain' }}
                />
                <Image src={'/qr-kakao.jpg'} alt='qr-code' width={100} height={100} quality={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
