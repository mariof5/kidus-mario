"use client";

import React, { useEffect, useState, useRef } from 'react';
import { GiHand } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import styles from './Hero.module.css';

const DecryptedText = ({
  text,
  speed = 150,
  maxIterations = 10,
  sequential = true,
  revealDirection = 'start',
  useOriginalCharsOnly = true,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  ...props
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let interval;
    let currentIteration = 0;

    const getNextIndex = revealedSet => {
      const textLength = text.length;
      switch (revealDirection) {
        case 'start':
          return revealedSet.size;
        case 'end':
          return textLength - 1 - revealedSet.size;
        case 'center': {
          const middle = Math.floor(textLength / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;

          if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
            return nextIndex;
          }

          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i;
          }
          return 0;
        }
        default:
          return revealedSet.size;
      }
    };

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter(char => char !== ' ')
      : characters.split('');

    const shuffleText = (originalText, currentRevealed) => {
      if (useOriginalCharsOnly) {
        const positions = originalText.split('').map((char, i) => ({
          char,
          isSpace: char === ' ',
          index: i,
          isRevealed: currentRevealed.has(i)
        }));

        const nonSpaceChars = positions.filter(p => !p.isSpace && !p.isRevealed).map(p => p.char);

        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]];
        }

        let charIndex = 0;
        return positions
          .map(p => {
            if (p.isSpace) return ' ';
            if (p.isRevealed) return originalText[p.index];
            return nonSpaceChars[charIndex++];
          })
          .join('');
      } else {
        return originalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (currentRevealed.has(i)) return originalText[i];
            return availableChars[Math.floor(Math.random() * availableChars.length)];
          })
          .join('');
      }
    };

    if (isHovering) {
      setIsScrambling(true);
      interval = setInterval(() => {
        setRevealedIndices(prevRevealed => {
          if (sequential) {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed);
              const newRevealed = new Set(prevRevealed);
              newRevealed.add(nextIndex);
              setDisplayText(shuffleText(text, newRevealed));
              return newRevealed;
            } else {
              clearInterval(interval);
              setIsScrambling(false);
              return prevRevealed;
            }
          } else {
            setDisplayText(shuffleText(text, prevRevealed));
            currentIteration++;
            if (currentIteration >= maxIterations) {
              clearInterval(interval);
              setIsScrambling(false);
              setDisplayText(text);
            }
            return prevRevealed;
          }
        });
      }, speed);
    } else {
      setDisplayText(text);
      setRevealedIndices(new Set());
      setIsScrambling(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, text, speed, maxIterations, sequential, revealDirection, characters, useOriginalCharsOnly]);

  useEffect(() => {
    if (animateOn !== 'view' && animateOn !== 'both') return;

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animateOn, hasAnimated]);

  const hoverProps =
    animateOn === 'hover' || animateOn === 'both'
      ? {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false)
        }
      : {};

  return (
    <span 
      className={`${parentClassName} ${styles.decryptedTextWrapper}`} 
      ref={containerRef} 
      {...hoverProps} 
      {...props}
    >
      <span className={styles.srOnly}>{displayText}</span>

      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone = revealedIndices.has(index) || !isScrambling || !isHovering;

          return (
            <span key={index} className={isRevealedOrDone ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
};

// Marquee Component
const Marquee = () => {
  const marqueeItems = [
    { text: "Development" },
    { text: "Designing" },
    { text: "Mentor" },
    { text: "Animations" },
    { text: "Websites" },
    { text: "Apps" },
    { text: "Programming" },
  ];

  const SparkleIcon = () => (
    <svg
      className={styles.sparkleIcon}
      height="32"
      width="56"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {/* First set */}
        {marqueeItems.map((item, index) => (
          <div key={`first-${index}`} className={styles.marqueeItem}>
            <h2 className={styles.marqueeText}>{item.text}</h2>
            <SparkleIcon />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {marqueeItems.map((item, index) => (
          <div key={`second-${index}`} className={styles.marqueeItem}>
            <h2 className={styles.marqueeText}>{item.text}</h2>
            <SparkleIcon />
          </div>
        ))}
      </div>
      {/* Gradient overlays */}
      <div className={styles.marqueeGradientLeft} />
      <div className={styles.marqueeGradientRight} />
    </div>
  );
};

// GradualSpacing component integrated directly
const GradualSpacingText = ({ text, className = "", duration = 0.5, delayMultiple = 0.04 }) => {
  return (
    <div className={styles.gradualSpacingContainer}>
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration, delay: i * delayMultiple }}
            className={`${styles.gradualSpacingChar} ${className}`}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <header className={styles.hero}>
        <div className={styles.container}>
          
          {/* Hi! It's me Kidus Section */}
          <div className={styles.kidusSection}>
            <div className={styles.content}>
              <span className={styles.wave}>
                <GiHand className={styles.icon} />
              </span>
              <p className={styles.text}>
                <DecryptedText 
                  text="Hey! It's me Saint"
                  speed={110}
                  maxIterations={15}
                  sequential={true}
                  revealDirection="start"
                  useOriginalCharsOnly={true}
                  animateOn="view"
                  parentClassName={styles.decryptedTextWrapper}
                  className={styles.revealedText}
                  encryptedClassName={styles.encryptedText}
                />
              </p>
            </div>
          </div>

          {/* Main Headline with GradualSpacing - Two Rows Only */}
          <div className={styles.headlineSection}>
            {/* First Row: "Crafting Meaningful & Impactful." */}
            <div className={styles.headlineRow}>
              <div className={styles.headlinePrimary}>
                <GradualSpacingText 
                  text="Crafting" 
                  className={styles.headlinePrimaryText}
                  duration={0.6}
                  delayMultiple={0.01}
                />
              </div>
              <div className={styles.headlineSecondary}>
                <GradualSpacingText 
                  text="Meaningful" 
                  className={styles.headlineSecondaryText}
                  duration={0.6}
                  delayMultiple={0.05}
                />
              </div>
              <div className={styles.headlineAccent}>
                <GradualSpacingText 
                  text="& Impactful." 
                  className={styles.headlineAccentText}
                  duration={0.6}
                  delayMultiple={0.10}
                />
              </div>
            </div>
            
            {/* Second Row: "Digital Experiences" */}
            <div className={styles.headlineRow}>
              <div className={styles.headlineSecondary}>
                <GradualSpacingText 
                  text="Digital" 
                  className={styles.headlineSecondaryText}
                  duration={0.5}
                  delayMultiple={0.05}
                />
              </div>
              <div className={styles.headlinePrimary}>
                <GradualSpacingText 
                  text="Experiences" 
                  className={styles.headlinePrimaryText}
                  duration={0.5}
                  delayMultiple={0.10}
                />
              </div>
            </div>
          </div>

          {/* Description with GradualSpacing */}
          <div className={styles.description}>
            <div className={styles.descriptionText}>
              <GradualSpacingText 
                text="building pixel-perfect, engaging, accessible digital experiences for global brands that drive results and achieve business goals."
                className={styles.descriptionChar}
                duration={0.3}
                delayMultiple={0.01}
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaSection}>
            <button className={`${styles.ctaButton} ${styles.ctaPrimary}`}>
              <span>Book a call</span>
            </button>
            <button className={`${styles.ctaButton} ${styles.ctaSecondary}`}>
              View Work
            </button>
          </div>

          {/* Available Badge */}
          <div className={styles.availableBadgeContainer}>
            <button className={styles.availableBadge} aria-label="Currently available for work projects">
              <div className={styles.statusDot}></div>
              <span>Available for work</span>
            </button>
          </div>

        </div>
      </header>

      {/* Marquee Section */}
      <Marquee />
    </>
  );
};

export default Hero;