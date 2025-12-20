import React, { useRef, useEffect, useState } from 'react';
import styles from './Testimonials.module.css';
import { sampleTestimonials } from './data/TestData';
export function Testimonials({ 
  title = "What Our Clients Say",
  description = "Real stories from real customers using our product every day.",
  testimonials = [],
  className = ''
}) {
  const marqueeRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  
  // Create 2 sets of testimonials for seamless infinite loop (reduced from 4 for performance)
  const loopedTestimonials = [...Array(2)].flatMap(() => testimonials);

  // Check for reduced motion preference
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setPlaying(false);
    }
  }, []);

  // Marquee animation calculation
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el || testimonials.length === 0) return;

    const calculateAnimation = () => {
      const contentWidth = el.scrollWidth / 2; // Since we're duplicating content
      const speedPxPerSecond = 60; // Adjust this to control speed
      const duration = Math.max(20, Math.round(contentWidth / speedPxPerSecond));
      
      el.style.setProperty('--marquee-duration', `${duration}s`);
      el.style.setProperty('--marquee-translate', `${contentWidth}px`);
    };

    calculateAnimation();

    // Recalculate on resize
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(calculateAnimation, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [testimonials]);

  // Control animation play state
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    el.style.animationPlayState = playing ? 'running' : 'paused';
  }, [playing]);

  const togglePlaying = () => setPlaying(!playing);

  return (
    <section 
      className={`${styles.section} ${className}`}
      role="region" 
      aria-label="Customer testimonials"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.controls}>
          <button 
            onClick={togglePlaying} 
            aria-pressed={!playing}
            className={styles.controlButton}
          >
            {playing ? 'Pause' : 'Play'} testimonials
          </button>
        </div>

        <div className={styles.marqueeContainer}>
          <div 
            className={styles.marqueeGroup}
            tabIndex={0}
            onFocus={() => setPlaying(false)}
            onBlur={() => {
              // Only resume if not manually paused
              const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
              if (!prefersReduced) setPlaying(true);
            }}
          >
            <div 
              ref={marqueeRef}
              className={styles.marquee}
              role="list"
            >
              {loopedTestimonials.map((testimonial, index) => (
                <article 
                  key={index}
                  className={styles.testimonialCard}
                  role="listitem"
                  aria-label={`Testimonial by ${testimonial.author.name}`}
                >
                  <div className={styles.cardContent}>
                    "{testimonial.text}"
                  </div>
                  <div className={styles.authorSection}>
                    <div className={styles.avatar}>
                      {testimonial.author.avatar ? (
                        <img 
                          src={testimonial.author.avatar}
                          alt={`${testimonial.author.name} avatar`}
                          className={styles.avatarImage}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className={styles.avatarFallback}>
                          {testimonial.author.name?.charAt(0) || 'U'}
                        </div>
                      )}
                    </div>
                    <div className={styles.authorInfo}>
                      <div className={styles.authorName}>
                        {testimonial.author.name}
                      </div>
                      {testimonial.author.handle && (
                        <div className={styles.authorHandle}>
                          {testimonial.author.handle}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}