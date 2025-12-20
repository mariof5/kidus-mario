'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './Experience.module.css';

const SkillBadge = ({ name }) => (
  <div className={styles.skillBadge}>
    <div className={styles.skillIcon}>
      <img
        alt={name}
        loading="lazy"
        decoding="async"
        className={styles.skillImage}
        src={`https://devrajchatribin.com/skills/${name}.svg`}
      />
    </div>
    {name}
  </div>
);

const ExpertiseCard = ({ icon, title, isActive, onClick }) => (
  <div className={styles.expertiseCard}>
    <h3 className={styles.expertiseHeading}>
      <button
        type="button"
        aria-expanded={isActive}
        onClick={onClick}
        className={`${styles.expertiseButton} ${isActive ? styles.active : ''}`}
      >
        {icon}
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${styles.chevron} ${isActive ? styles.rotate : ''}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </h3>
  </div>
);

export default function Experience() {
  const [activeExpertise, setActiveExpertise] = useState('development');
  const skillsContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = skillsContainerRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPos) => {
        const containerWidth = container.scrollWidth;
        const visibleWidth = container.clientWidth;
        const newPosition = prevPos - 1;
        
        if (Math.abs(newPosition) > containerWidth / 2) {
          return 0;
        }
        return newPosition;
      });
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  const expertiseAreas = [
    {
      id: 'development',
      title: 'Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      )
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
          <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
          <path d="m2.3 2.3 7.286 7.286" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      )
    },
    {
      id: 'branding',
      title: 'Branding',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" />
          <path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" />
          <path d="M 7 17h.01" />
          <path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" />
        </svg>
      )
    }
  ];

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Angular', 
    'Redux', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'PostgreSQL', 
    'Cypress', 'Docker', 'Firebase', 'AWS', 'GSAP', 'FramerMotion', 'Figma', 
    'TailwindCSS', 'GIT'
  ];

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.speciality}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
          <p className={styles.specialityText}>Speciality</p>
        </div>
        
        <h2 className={styles.title}>
          Areas of Expertise
        </h2>
        
        <div className={styles.grid}>
          <div className={styles.expertiseList}>
            {expertiseAreas.map((expertise) => (
              <ExpertiseCard
                key={expertise.id}
                icon={expertise.icon}
                title={expertise.title}
                isActive={activeExpertise === expertise.id}
                onClick={() => setActiveExpertise(expertise.id)}
              />
            ))}
          </div>
          
          <div className={styles.imageContainer}>
            {expertiseAreas.map((expertise) => (
              <img
                key={expertise.id}
                alt={expertise.title}
                loading="lazy"
                width="600"
                height="400"
                decoding="async"
                className={`${styles.expertiseImage} ${
                  activeExpertise === expertise.id ? styles.imageActive : styles.imageInactive
                }`}
                srcSet={`https://devrajchatribin.com/_next/image?url=%2Fimages%2F${expertise.id}.avif&w=640&q=100 1x, https://devrajchatribin.com/_next/image?url=%2Fimages%2F${expertise.id}.avif&w=1200&q=100 2x`}
                src={`https://devrajchatribin.com/_next/image?url=%2Fimages%2F${expertise.id}.avif&w=1200&q=100`}
              />
            ))}
          </div>
        </div>
        
        <div className={styles.skillsSection}>
          <div className={styles.skillsOverflow}>
            <div 
              ref={skillsContainerRef}
              className={styles.skillsContainer}
              style={{ transform: `translateX(${scrollPosition}px)` }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <SkillBadge key={`${skill}-${index}`} name={skill} />
              ))}
            </div>
          </div>
          <div className={styles.gradientLeft} />
          <div className={styles.gradientRight} />
        </div>
      </section>
    </div>
  );
}