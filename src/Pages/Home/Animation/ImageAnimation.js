import React, { useState, useEffect } from 'react';
import animationImages from './AnimationImages';
import styles from './AnimationImages.module.css';
import urduLogo from '../../../assets/Unilogo.jpeg';

function ImageAnimation() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload images when the component mounts
  useEffect(() => {
    const preloadImages = () => {
      animationImages.forEach(image => {
        const img = new Image();
        img.src = image;
      });
    };

    preloadImages();
  }, []);

  // Change images every 60ms for smoother animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        (prevIndex + 1) % animationImages.length
      );
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.fullscreenContainer}>
      <div className={styles.fullscreenImageContainer}>
        <img
          src={animationImages[currentImageIndex]}
          alt={`Frame ${currentImageIndex + 1}`}
          className={styles.fullscreenImage}
        />
      </div>
      <div className={styles.imageOverlay}>
        <img loading='lazy' src={urduLogo} alt='IU LOGO' />
      </div>
    </div>
  );
}

export default ImageAnimation;
