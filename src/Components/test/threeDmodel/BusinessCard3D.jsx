// Portfolio.jsx
import React, { useEffect, useState } from 'react';
import styles from './BusinessCard3D.module.css';

function BusinessCard3D() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set scroll range for the animation
  const maxScroll = 500;
  const progress = Math.min(scrollY / maxScroll, 1);

  // Card position moves diagonally from top-right to bottom-left
  const cardStyle = {
    top: `${10 + progress * 60}vh`, // Moves from 10vh to 70vh
    left: `${70 - progress * 60}vw`, // Moves from 70vw to 10vw
  };

  // Enhanced 3D rotation with multiple axes
  const innerStyle = {
    transform: `
      rotateY(${progress * 180}deg)
      rotateX(${progress * -15}deg)
      scale(${1 - progress * 0.15})
    `,
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Portfolio</h1>
          <p className={styles.heroSubtitle}>Scroll to explore the journey</p>
        </div>

        {/* 3D Portfolio Card */}
        <div className={styles.card} style={cardStyle}>
          <div className={styles.inner} style={innerStyle}>
            {/* Front side - Portfolio Preview */}
            <div className={styles.front}>
              <div className={styles.projectTitle}>Modern Web Design</div>
              <div className={styles.projectType}>UI/UX Case Study</div>
              <div className={styles.tech}>React • Framer Motion • GSAP</div>
              <div className={styles.status}>Available for work</div>
            </div>
            
            {/* Back side - Contact Info */}
            <div className={styles.back}>
              <div className={styles.thankYou}>Let's Work Together</div>
              <div className={styles.tagline}>Creating digital experiences that matter</div>
              <div className={styles.contact}>contact@portfolio.com</div>
              <div className={styles.website}>www.portfolio.dev</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.contentGrid}>
          <div className={styles.textContent}>
            <h2 className={styles.contentTitle}>Featured Work</h2>
            <p className={styles.contentDescription}>
              A collection of carefully crafted projects demonstrating modern 
              design principles and cutting-edge development techniques.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureNumber}>01</span>
                <span className={styles.featureText}>Responsive Design</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureNumber}>02</span>
                <span className={styles.featureText}>Performance Optimized</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureNumber}>03</span>
                <span className={styles.featureText}>User Centered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for scroll */}
      <div className={styles.spacer} />
    </div>
  );
}

export default BusinessCard3D;