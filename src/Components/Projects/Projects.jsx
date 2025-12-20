import React, { useState } from "react";
import { motion, cubicBezier, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PROJECTS from "./data/ProjectData";
import styles from "./Projects.module.css";

const easeSoft = cubicBezier(0.22, 1, 0.36, 1);

const ProjectCard = ({
  id,
  title,
  description,
  src,
  index,
  totalItems,
  onSelect,
  mode = "sticky" // Add mode prop
}) => {
  const isFirst = index === 0;
  const isLast = index === totalItems - 1;
  const [isHovered, setIsHovered] = useState(false);
  const [isGridHovered, setIsGridHovered] = useState(false);

  // Different hover handlers for grid vs sticky modes
  const handleMouseEnter = () => {
    if (mode === "grid") {
      setIsGridHovered(true);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (mode === "grid") {
      setIsGridHovered(false);
    }
    setIsHovered(false);
  };

  return (
    <motion.section
      className={`${styles.cardSection} ${isLast ? styles.fullScreen : ""} ${mode === "grid" ? styles.gridCardSection : ""}`}
      initial={isFirst ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: isFirst ? 0 : 0.7, ease: easeSoft }}
    >
      <article
        className={`${styles.projectCard} ${isLast ? styles.fullScreenCard : ""} ${mode === "grid" ? styles.gridProjectCard : ""}`}
        onClick={() => onSelect(id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Grid Mode Hover Overlay */}
        {mode === "grid" && (
          <AnimatePresence>
            {isGridHovered && (
              <motion.span
                className={styles.gridHoverOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>
        )}

        <div className={styles.imageClip}>
          <img className={styles.image} src={src} alt={title} />
        </div>

        {/* Original Overlay (for both modes) */}
        <div className={`${styles.cardOverlay} ${isHovered ? styles.overlayVisible : ""}`}>
          <div className={styles.contentWrapper}>
            <motion.h2
              className={styles.projectTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.4, ease: easeSoft }}
            >
              {title}
            </motion.h2>
            <motion.p
              className={styles.projectDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.4, ease: easeSoft, delay: 0.1 }}
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.4, ease: easeSoft, delay: 0.2 }}
            >
              <button className={`${styles.button} ${styles.type1}`}>
                <span className={styles.btnTxt}>Check It Out</span>
              </button>
            </motion.div>
          </div>
        </div>
      </article>
    </motion.section>
  );
};

const Projects = ({ mode = "sticky" }) => {
  const navigate = useNavigate();

  const handleProjectSelect = (id) => {
    navigate(`/work/preview/${id}`);
  };

  return (
    <div className={`${styles.container} ${mode === "grid" ? styles.gridContainer : ""}`}>
      {/* Show gradient text in both modes, but only once */}
      {mode === "grid" ? (
        <div className={styles.gridTitleSection}>
          <span className={styles.gradientText}>Projects</span>
        </div>
      ) : (
        <>
          {PROJECTS.map((project, index) => (
            <React.Fragment key={project.id}>
              {index === 0 && (
                <div className={styles.testimonialsSection}>
                  <span className={styles.gradientText}>Projects</span>
                </div>
              )}
              <ProjectCard
                {...project}
                index={index}
                id={project.id}
                totalItems={PROJECTS.length}
                onSelect={handleProjectSelect}
                mode={mode}
              />
            </React.Fragment>
          ))}
        </>
      )}
      
      {/* Grid mode projects */}
      {mode === "grid" && PROJECTS.map((project, index) => (
        <ProjectCard
          key={project.id}
          {...project}
          index={index}
          id={project.id}
          totalItems={PROJECTS.length}
          onSelect={handleProjectSelect}
          mode={mode}
        />
      ))}
    </div>
  );
};

export default Projects;