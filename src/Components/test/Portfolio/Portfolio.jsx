import React, { useState, useEffect, useRef } from 'react';
import styles from './Portfolio.module.css';
import heroImage from '../../../../../../assets/img/portavia_center.png';

const Portfolio = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);
  const animationRef = useRef(null);
  const scrollStateRef = useRef({
    currentTranslateX: 0,
    currentTranslateY: 0,
    currentScale: 1,
    currentRotate: 0,
    targetTranslateX: 0,
    targetTranslateY: 0,
    targetScale: 1,
    targetRotate: 0,
    velocityX: 0,
    velocityY: 0,
    velocityScale: 0,
    velocityRotate: 0,
    lastScrollY: 0,
    scrollDirection: 0
  });

  useEffect(() => {
const handleScroll = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const heroHeight = window.innerHeight;
  const normalizedScroll = Math.min(scrollY / heroHeight, 1);
  
  const state = scrollStateRef.current;
  
  // Detect scroll direction
  const scrollDirection = scrollY > state.lastScrollY ? 1 : -1;
  state.scrollDirection = scrollDirection;
  state.lastScrollY = scrollY;

  // Enhanced easing with different curves for up/down
  let easedScroll;
  if (scrollDirection > 0) {
    // Scrolling down - ease out cubic
    easedScroll = 1 - Math.pow(1 - normalizedScroll, 3);
  } else {
    // Scrolling up - ease in cubic for smoother return
    easedScroll = Math.pow(normalizedScroll, 3);
  }

  // REDUCED parallax values for faster movement
  state.targetTranslateX = easedScroll * 350; // Reduced from 350
  state.targetTranslateY = easedScroll * (window.innerHeight * 0.5); // Reduced from 0.9
  state.targetScale = 1 - easedScroll * 0.06; // Reduced from 0.12
  state.targetRotate = easedScroll * 4; // Reduced from 8
  
  // Start animation if not already running
  if (!animationRef.current) {
    animationRef.current = requestAnimationFrame(updateTransform);
  }
};

const updateTransform = () => {
  const state = scrollStateRef.current;
  
  // Dynamic lerp factor based on scroll direction and distance
  const distance = Math.sqrt(
    Math.pow(state.targetTranslateX - state.currentTranslateX, 2) +
    Math.pow(state.targetTranslateY - state.currentTranslateY, 2)
  );
  
  // ORIGINAL SMOOTH SPEED SETTINGS
  const baseLerp = 0.08;
  const directionMultiplier = state.scrollDirection !== 0 ? 1.2 : 0.8;
  const distanceMultiplier = Math.min(distance / 100, 2);
  const lerpFactor = baseLerp * directionMultiplier * (1 + distanceMultiplier * 0.5);
  
  // ORIGINAL spring physics for natural movement
  const springStrength = 0.15;
  const damping = 0.85;
  
  // Update velocities
  state.velocityX = (state.targetTranslateX - state.currentTranslateX) * springStrength;
  state.velocityY = (state.targetTranslateY - state.currentTranslateY) * springStrength;
  state.velocityScale = (state.targetScale - state.currentScale) * springStrength;
  state.velocityRotate = (state.targetRotate - state.currentRotate) * springStrength;
  
  // Apply damping
  state.velocityX *= damping;
  state.velocityY *= damping;
  state.velocityScale *= damping;
  state.velocityRotate *= damping;
  
  // Update current values with velocity
  state.currentTranslateX += state.velocityX;
  state.currentTranslateY += state.velocityY;
  state.currentScale += state.velocityScale;
  state.currentRotate += state.velocityRotate;
  
  // Apply transform with rotation
  if (imageRef.current) {
    imageRef.current.style.transform = `
      translate3d(calc(-50% + ${state.currentTranslateX}px), calc(-50% + ${state.currentTranslateY}px), 0)
      scale(${state.currentScale})
      rotate(${state.currentRotate}deg)
    `;
  }
  
  // Continue animation if there's movement
  const totalVelocity = Math.abs(state.velocityX) + Math.abs(state.velocityY) + 
                       Math.abs(state.velocityScale) + Math.abs(state.velocityRotate);
  const totalDistance = Math.abs(state.targetTranslateX - state.currentTranslateX) + 
                       Math.abs(state.targetTranslateY - state.currentTranslateY) + 
                       Math.abs(state.targetScale - state.currentScale) +
                       Math.abs(state.targetRotate - state.currentRotate);
  
  if (totalVelocity > 0.01 || totalDistance > 0.01) {
    animationRef.current = requestAnimationFrame(updateTransform);
  } else {
    // Snap to final position when very close
    state.currentTranslateX = state.targetTranslateX;
    state.currentTranslateY = state.targetTranslateY;
    state.currentScale = state.targetScale;
    state.currentRotate = state.targetRotate;
    state.velocityX = 0;
    state.velocityY = 0;
    state.velocityScale = 0;
    state.velocityRotate = 0;
    animationRef.current = null;
  }
};

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => setImageLoaded(true);

  return (
    <section className={styles.hero}>
      {/* Floating image */}
      <div
        ref={imageRef}
        className={`${styles.imageWrapper} ${imageLoaded ? styles.loaded : ''}`}
      >
        <img
          src={heroImage}
          alt="Portfolio showcase"
          className={styles.heroImage}
          onLoad={handleImageLoad}
        />
        <div className={styles.imageOverlay}></div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine}></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Portfolio;