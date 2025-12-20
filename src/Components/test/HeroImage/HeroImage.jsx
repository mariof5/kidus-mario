import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HeroImage.module.css';

const HeroImage = ({ 
  src, 
  alt = "Hero image",
  className = '',
  rotateAmount = 5, // degrees
  moveDistance = 200, // pixels
  scaleAmount = 1.05
}) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform values based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], [0, moveDistance]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotateAmount]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, scaleAmount]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.8]);

  return (
    <section 
      ref={containerRef} 
      className={`${styles.heroContainer} ${className}`}
    >
      <div className={styles.imageWrapper}>
        <motion.div
          className={styles.imageContainer}
          style={{
            x,
            rotate,
            scale,
            opacity
          }}
        >
          <img
            src={src}
            alt={alt}
            className={styles.heroImage}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroImage;