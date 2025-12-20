import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ScrollAni.module.css';
import project from '../../../../../assets/project.avif';

// MagicText Component
const MagicText = ({ text }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
      <span className={styles.wordContainer}>
        <span className={styles.wordShadow}>{children}</span>
        <motion.span style={{ opacity: opacity }} className={styles.wordMain}>
          {children}
        </motion.span>
      </span>
    );
  };

  return (
    <div ref={container} className={styles.magicTextContainer}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
};

const ScrollAni = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDarkMode(theme === 'dark');
    };

    // Initial check
    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const scrollY = window.scrollY;
      const progress = Math.max(0, Math.min(1, 
        (scrollY - containerTop + windowHeight) / (containerHeight + windowHeight)
      ));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate transforms based on scroll progress
  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const [scaleStart, scaleEnd] = scaleDimensions();
  const scale = scaleStart + (scaleEnd - scaleStart) * scrollProgress;
  const rotate = 20 - (20 * scrollProgress); // 20 to 0
  const translateY = -100 * scrollProgress; // 0 to -100

  const titleComponent = (
    <>
      <h1 className={`${styles.title} ${isDarkMode ? styles.titleDark : ''}`}>
       Let's Create Your <br />
        <span className={`${styles.titleLarge} ${isDarkMode ? styles.titleLargeDark : ''}`}>
          Next Big Idea.
        </span>
      </h1>
    </>
  );

  return (
    <div className={`${styles.heroScrollDemo} ${isDarkMode ? styles.heroScrollDemoDark : ''}`}>
      {/* About Section with Header */}
      <div className={styles.aboutSection}>
        <div className={styles.aboutHeader}>
          <h2 className={`${styles.aboutTitle} ${isDarkMode ? styles.aboutTitleDark : ''}`}>
            About
          </h2>
          <div className={styles.aboutDivider}></div>
        </div>
        
        {/* MagicText Component */}
        <div className={styles.magicTextSection}>
          <MagicText text="Full-Stack Developer passionate about crafting fast, intuitive, and meaningful web experiences. I blend strong visual and interaction sensibility with solid engineering skills to build products people love using. React, Next.js, TypeScript, Node.js, and modern cloud tools are my playground — I design systems, motion, performance, and scalability are my obsessions." />
        </div>
      </div>

      <ContainerScroll
        containerRef={containerRef}
        titleComponent={titleComponent}
        rotate={rotate}
        scale={scale}
        translateY={translateY}
        isMobile={isMobile}
        isDarkMode={isDarkMode}
      >
        <div className={styles.imageContainer}>
          <img
            src={project}
            alt="Portavia Project"
            className={styles.heroImage}
            draggable={false}
            onError={(e) => {
              console.error('Failed to load image:', project);
              e.target.style.backgroundColor = '#f5f7fa';
              e.target.style.display = 'flex';
              e.target.style.alignItems = 'center';
              e.target.style.justifyContent = 'center';
              e.target.style.color = '#666';
              e.target.innerHTML = 'Project Image';
            }}
          />
        </div>
      </ContainerScroll>
    </div>
  );
};

const ContainerScroll = ({ 
  containerRef, 
  titleComponent, 
  children, 
  rotate, 
  scale, 
  translateY,
  isMobile,
  isDarkMode 
}) => {
  return (
    <div
      className={`${styles.containerScroll} ${isDarkMode ? styles.containerScrollDark : ''}`}
      ref={containerRef}
    >
      <div className={styles.scrollContainer}>
        <div className={styles.contentWrapper}>
          <Header translateY={translateY} titleComponent={titleComponent} />
          <Card rotate={rotate} scale={scale} isMobile={isMobile} isDarkMode={isDarkMode}>
            {children}
          </Card>
        </div>
      </div>
    </div>
  );
};

const Header = ({ translateY, titleComponent }) => {
  return (
    <div 
      className={styles.header}
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      {titleComponent}
    </div>
  );
};

const Card = ({ rotate, scale, children, isMobile, isDarkMode }) => {
  return (
    <div 
      className={`${styles.card} ${isDarkMode ? styles.cardDark : ''}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotate}deg) scale(${scale})`,
        boxShadow: isDarkMode 
          ? `0 0 #0000004d, 
             0 9px 20px #0000004a, 
             0 37px 37px #00000042, 
             0 84px 50px #00000026, 
             0 149px 60px #0000000a, 
             0 233px 65px #00000003`
          : `0 0 #0000004d, 
             0 9px 20px #0000004a, 
             0 37px 37px #00000042, 
             0 84px 50px #00000026, 
             0 149px 60px #0000000a, 
             0 233px 65px #00000003`
      }}
    >
      <div className={`${styles.cardContent} ${isMobile ? styles.mobileCard : ''} ${isDarkMode ? styles.cardContentDark : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default ScrollAni;