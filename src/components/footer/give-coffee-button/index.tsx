'use client';

import { createPortal } from 'react-dom';
import { useState } from 'react';
import { QrModal } from './qr-modal';
import { CoffeeIcon } from './coffee-icon';
import * as styles from './style.css';

export const GiveCoffeeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type='button'
        aria-label='give coffee'
        aria-haspopup='dialog'
        aria-expanded={isOpen ? 'true' : 'false'}
        name='give-coffee'
        onClick={openModal}
        className={styles.buttonWrapper}
      >
        <CoffeeIcon />
      </button>
      {isOpen &&
        createPortal(
          <QrModal onClose={closeModal} />,
          document.getElementById('modal') as HTMLElement,
        )}
    </>
  );
};
