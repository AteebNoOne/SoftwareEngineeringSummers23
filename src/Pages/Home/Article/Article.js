import React, { useState, useEffect } from 'react';
import articleAnimationImages from './ArticleAnimationImages.js';
import UniImage from '../../../assets/UniImage.jpg'
import styles from './Article.module.css';

function Article() {
    const totalFrames = articleAnimationImages.length;
    const frameHeight = window.innerHeight / totalFrames;
    const preloadBuffer = 2; // Number of frames to preload ahead

    const [currentFrame, setCurrentFrame] = useState(0);

    

    useEffect(() => {
        let animationFrame;
        let lastScrollTime = 0;
        let prevScrollPosition = window.scrollY;

        const preloadImages = (startIndex) => {
            for (let i = 1; i <= preloadBuffer; i++) {
                const preloadIndex = (startIndex + i) % totalFrames;
                const img = new Image();
                img.onload = () => {
                };
                img.src = articleAnimationImages[preloadIndex];
            }
        };

        const handleScroll = () => {
            const currentTime = performance.now();
            const scrollPosition = window.scrollY;

            if (currentTime - lastScrollTime >= 16) {

                const scrollDirection = scrollPosition > prevScrollPosition ? 'down' : 'up';

                let newFrameIndex;
                if (scrollDirection === 'down') {
                    newFrameIndex = Math.floor(scrollPosition / frameHeight);
                } else {
                    newFrameIndex = Math.ceil(scrollPosition / frameHeight);
                }

                setCurrentFrame(Math.min(Math.max(newFrameIndex, 0), totalFrames - 1));
                preloadImages(newFrameIndex);
                prevScrollPosition = scrollPosition;
            }

            animationFrame = requestAnimationFrame(handleScroll);
        };

        handleScroll();
        preloadImages(0);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrame);
        };
    }, [frameHeight, totalFrames]);

    return (
        <article>
            <div className={styles.animationContainer}>
                <img
                    loading='lazy'
                    src={articleAnimationImages[currentFrame]}
                    alt={`Frame ${currentFrame + 1}`}
                    className={styles.animationImage}
                />
                <div className={styles.textOverlay}>
                    <h1>Software Engineering Semester Project Summers 2023</h1>
                </div>
            </div>
            <div className={styles.animationContainer}>
                <img
                    src={articleAnimationImages[currentFrame]}
                    alt={`Frame ${currentFrame + 1}`}
                    className={styles.animationImage}
                />
                <div className={styles.imageOverlay}>
                    <img src={UniImage} alt='University look'></img>
                </div>
            </div>
            
        </article>
    );
}

export default Article;
