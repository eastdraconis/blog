import Image from 'next/image';
import * as styles from './style.css';

interface QrModalProps {
  onClose: () => void;
}

export const QrModal = ({ onClose }: QrModalProps) => {
  return (
    <div className={styles.dimmed} onClick={onClose}>
      <div className={styles.modalContainer}>
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>Buy me a coffee</h2>
          <div className={styles.qrContainer}>
            <span className={styles.qrTitle}>QR 송금</span>
            <div className={styles.qrInnerContainer}>
              <div className={styles.qrImageContainer}>
                <Image
                  src={'/toss.png'}
                  width={48}
                  height={48}
                  quality={100}
                  priority
                  alt='toss'
                  className={styles.ci}
                />
                <Image src={'/qr-toss.png'} alt='qr-code' width={100} height={100} quality={100} />
              </div>
              <div className={styles.qrImageContainer}>
                <Image
                  src={'/kakao.png'}
                  width={48}
                  height={48}
                  quality={100}
                  priority
                  alt='kakaopay'
                  className={styles.ci}
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
