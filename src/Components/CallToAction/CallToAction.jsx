import React from 'react';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <div className={styles.container}>
      <div className={styles.availabilityBadge}>
        <span className={styles.badgeDot}>
          <span className={styles.dotPulse} />
          <span className={styles.dot} />
        </span>
        <p className={styles.availabilityText}>Available for work</p>
      </div>

      <h2 className={styles.heading} role="heading">
        <span className={styles.word}>
          <span className={styles.letter}>L</span>
          <span className={styles.letter}>e</span>
          <span className={styles.letter}>t</span>
          <span className={styles.letter}>'</span>
          <span className={styles.letter}>s</span>
        </span>
        <span className={styles.word}>
          <span className={styles.letter}>c</span>
          <span className={styles.letter}>r</span>
          <span className={styles.letter}>e</span>
          <span className={styles.letter}>a</span>
          <span className={styles.letter}>t</span>
          <span className={styles.letter}>e</span>
        </span>
        <span className={styles.word}>
          <span className={styles.letter}>y</span>
          <span className={styles.letter}>o</span>
          <span className={styles.letter}>u</span>
          <span className={styles.letter}>r</span>
        </span>
        <span className={styles.word}>
          <span className={styles.letter}>n</span>
          <span className={styles.letter}>e</span>
          <span className={styles.letter}>x</span>
          <span className={styles.letter}>t</span>
        </span>
        <span className={styles.word}>
          <span className={styles.letter}>b</span>
          <span className={styles.letter}>i</span>
          <span className={styles.letter}>g</span>
        </span>
        <span className={styles.word}>
          <span className={styles.letter}>i</span>
          <span className={styles.letter}>d</span>
          <span className={styles.letter}>e</span>
          <span className={styles.letter}>a</span>
          <span className={styles.letter}>.</span>
        </span>
      </h2>

      <a href="/contact">
        <button className={styles.contactButton} type="button" aria-disabled="false">
          <span className={styles.buttonRipple} />
          <span className={styles.buttonTextContainer}>
            <span className={styles.buttonText}>Contact Me</span>
          </span>
        </button>
      </a>

      <div className={styles.socialLinks}>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/devraj-chatribin/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            className={styles.socialIcon}
            height="20"
            width="20"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect height="12" width="4" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        
        <a
          aria-label="GitHub"
          href="https://github.com/DevrajDC"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            className={styles.socialIcon}
            height="20"
            width="20"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
        
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/devraj_uiux/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            className={styles.socialIcon}
            height="20"
            width="20"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect height="20" width="20" rx="5" ry="5" x="2" y="2" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
        
        <a
          aria-label="Gmail"
          href="mailto:devrajchatribin9978@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            className={styles.socialIcon}
            height="20"
            width="20"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect height="16" width="20" rx="2" x="2" y="4" />
          </svg>
        </a>
        
        <a
          aria-label="Twitter"
          href="https://twitter.com/devrajchatribin"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            className={styles.socialIcon}
            height="20"
            width="20"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}