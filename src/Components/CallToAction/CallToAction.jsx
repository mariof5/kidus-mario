import React from 'react';
import styles from './CallToAction.module.css';
import { Link } from 'react-router-dom';

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

      <Link to="/contact">
        <button className={styles.contactButton} type="button" aria-disabled="false">
          <span className={styles.buttonRipple} />
          <span className={styles.buttonTextContainer}>
            <span className={styles.buttonText}>Contact Me</span>
          </span>
        </button>
      </Link>
    </div>
  );
}