import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './SellButton.module.css';

const PinkButton = ({ text, url }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      ScrollReveal().reveal(buttonRef.current, {
        duration: 1000,
        distance: '20px',
        origin: 'bottom',
        rotate: {
          x: 0,
          y: 15,
          z: 0
        },
        opacity: 0,
        scale: 0.8,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
      });
    }
  }, []);

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={styles.pinkButton}
    >
      {text}
    </button>
  );
};

export default PinkButton;