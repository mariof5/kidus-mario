'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './Workflow.module.css';
import chain from '/Workflow/ChainRm.png';

const WorkflowStep = ({ number, title, description, isActive, onClick }) => {
  const stepRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (stepRef.current) {
        const rect = stepRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

        // Only animate when scrolling DOWN and element is in viewport
        if (currentScrollY > lastScrollY && isInViewport) {
          setIsVisible(true);
        }
        // Reset visibility when scrolling UP and element leaves viewport
        else if (currentScrollY < lastScrollY && !isInViewport) {
          setIsVisible(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    // Initial check
    if (stepRef.current) {
      const rect = stepRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
      if (isInViewport) {
        setIsVisible(true);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div ref={stepRef} className={styles.stepContainer}>
      <div className={styles.stepContent}>
        <div className={styles.stepNumberSection}>
          <div className={styles.stepNumberWrapper}>
            <div
              className={styles.stepNumberClickable}
              onClick={onClick}
              tabIndex="0"
            >
              <div
                className={`${styles.stepNumber} ${isActive ? styles.active : styles.inactive}`}
                style={{
                  transform: isVisible ? 'scale(1)' : 'scale(0.3)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                }}
              >
                <p>{number.padStart(2, '0')}</p>
              </div>
            </div>
          </div>
          {number !== "4" && (
            <div className={styles.stepConnector} />
          )}
        </div>
        <div className={styles.stepInfo}>
          <div
            className={styles.stepCard}
            style={{
              transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(40px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.1s'
            }}
          >
            <div className={styles.stepHeader}>
              <div className={styles.stepBadge}>
                <div className={styles.stepLabel}>
                  <p>Step</p>
                </div>
                <div className={styles.stepLabelNumber}>
                  <p>{number.padStart(2, '0')}</p>
                </div>
              </div>
              <div className={styles.stepTitle}>
                <h3>{title}</h3>
              </div>
            </div>
            <div className={styles.stepDescription}>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(1);
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Plan & Architect",
      description: "Before writing a single line of code, I dive deep into understanding the project goals, user needs, and technical constraints."
    },
    {
      number: "2",
      title: "Build & Develop",
      description: "Build pixel-perfect user interfaces and robust backend systems in parallel. I ensure that every component—UI or API—is maintainable."
    },
    {
      number: "3",
      title: "Feedback & Refinement",
      description: "Collaboration is key. I review the design with you, gather feedback, and refine the work to align with your expectations and goals. This ensures the design reflects your vision."
    },
    {
      number: "4",
      title: "Launch & Support",
      description: "I also provide post-launch monitoring, performance optimization, and ongoing iteration support to keep your product growing."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

        // Only animate when scrolling DOWN and element is in viewport
        if (currentScrollY > lastScrollY && isInViewport) {
          setTitleVisible(true);
        }
        // Reset visibility when scrolling UP and element leaves viewport
        else if (currentScrollY < lastScrollY && !isInViewport) {
          setTitleVisible(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    // Initial check
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      if (isInViewport) {
        setTitleVisible(true);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={styles.workflowSection}>
      <div className={styles.workflowBackground}>
        <div className={styles.workflowContent} id="step">
          <div className={styles.titleSection} ref={titleRef}>
            <div className={styles.titleContainer}>
              <div className={styles.titleMask}>
                <div
                  className={styles.titleWrapper}

                >
                  <h2 className={styles.mainTitle}>
                    <span className={styles.titleGradient}>
                      Our Workflow
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <figure className={styles.decorationImage}>
            <div className={styles.imageContainer}>
              <img
                decoding="auto"
                loading="lazy"
                width="1080"
                height="1080"
                sizes="150px"
                src={chain}
                alt="Created by saint"
                className={styles.image}
              />
            </div>
          </figure>

          <div className={styles.stepsContainer}>
            <div className={styles.stepsList}>
              {steps.map((step, index) => (
                <WorkflowStep
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isActive={activeStep === index + 1}
                  onClick={() => setActiveStep(index + 1)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}