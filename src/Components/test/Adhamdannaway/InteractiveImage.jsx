import React, { useState, useRef, useCallback } from 'react';
import styles from './InteractiveImage.module.css';

// Import your images
import heroBefore from './assets/images/hero-comparison-before.png';
import heroAfter from './assets/images/hero-comparison-after.png';

const InteractiveImage = ({ 
  reversed = true, 
  snapToEdges = true,
  showLabels = true,
  showControls = true,
  beforeLabel = "Before",
  afterLabel = "After"
}) => {
  const [hoverPosition, setHoverPosition] = useState(50);
  const [isReversed, setIsReversed] = useState(reversed);
  const containerRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      let percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

      if (snapToEdges) {
        if (percentage < 5) percentage = 0;
        if (percentage > 95) percentage = 100;
      }

      setHoverPosition(percentage);
    }
  }, [snapToEdges]);

  const handleMouseLeave = () => {
    setHoverPosition(50);
  };

  const handleKeyDown = (e) => {
    switch(e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        setHoverPosition(prev => Math.max(0, prev - 10));
        break;
      case 'ArrowRight':
        e.preventDefault();
        setHoverPosition(prev => Math.min(100, prev + 10));
        break;
      case 'Home':
        e.preventDefault();
        setHoverPosition(0);
        break;
      case 'End':
        e.preventDefault();
        setHoverPosition(100);
        break;
      case ' ':
        e.preventDefault();
        setHoverPosition(50);
        break;
      case 'r':
      case 'R':
        e.preventDefault();
        setIsReversed(prev => !prev);
        break;
      default:
        break;
    }
  };

  // Calculate widths based on reversed state
  const beforeWidth = isReversed ? `${100 - hoverPosition}%` : `${hoverPosition}%`;
  const afterWidth = isReversed ? `${hoverPosition}%` : `${100 - hoverPosition}%`;

  const handleReset = () => setHoverPosition(50);
  const handleShowBefore = () => setHoverPosition(0);
  const handleShowAfter = () => setHoverPosition(100);
  const handleToggleDirection = () => setIsReversed(prev => !prev);

  return (
    <section 
      className={styles.interactiveSection}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Interactive image comparison. Use mouse hover or keyboard arrows to compare before and after images."
      role="region"
    >
      <div className={styles.imageContainer}>
        {/* Before Image */}
        <div 
          className={styles.beforeImage}
          style={{ 
            width: beforeWidth,
            backgroundImage: `url(${heroBefore})`
          }}
          aria-hidden="true"
        >
          {showLabels && (
            <div className={styles.imageLabel}>
              {beforeLabel}
            </div>
          )}
        </div>
        
        {/* After Image */}
        <div 
          className={styles.afterImage}
          style={{ 
            width: afterWidth,
            backgroundImage: `url(${heroAfter})`
          }}
          aria-hidden="true"
        >
          {showLabels && (
            <div className={styles.imageLabel}>
              {afterLabel}
            </div>
          )}
        </div>
        
        <div className={styles.sliderIndicator} style={{ left: `${hoverPosition}%` }} />
      </div>
      
      <p className={styles.hoverInstruction}>
        ← Hover or use arrow keys to reveal effect →
        <small>Press Space to reset • Press R to reverse</small>
      </p>

      {showControls && (
        <div className={styles.controlPanel}>
          <button className={styles.controlButton} onClick={handleShowBefore}>
            Show Before
          </button>
          <button className={styles.controlButton} onClick={handleReset}>
            Reset
          </button>
          <button className={styles.controlButton} onClick={handleShowAfter}>
            Show After
          </button>
          <button className={styles.controlButton} onClick={handleToggleDirection}>
            {isReversed ? 'Normal Mode' : 'Reversed Mode'}
          </button>
        </div>
      )}

      <div className={styles.directionIndicator}>
        Current mode: {isReversed ? 'Reversed' : 'Normal'} 
        {isReversed ? ' (Right reveals After)' : ' (Right reveals Before)'}
      </div>
    </section>
  );
};

export default InteractiveImage;