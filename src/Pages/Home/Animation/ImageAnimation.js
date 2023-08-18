import React, { useState, useEffect } from 'react';
import animationImages from './AnimationImages';
import styles from './AnimationImages.module.css';
import urduLogo from '../../../assets/Unilogo.jpeg'

function ImageAnimation() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        (prevIndex + 1) % animationImages.length
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.fullscreenContainer}>
      <img
        src={animationImages[currentImageIndex]}
        alt={`Frame ${currentImageIndex + 1}`}
        className={styles.fullscreenImage}
      />
      <div className={styles.imageOverlay}>
        <img src={urduLogo} alt='IU LOGO'></img>
      </div>
    </div>
    
  );
}

export default ImageAnimation;
