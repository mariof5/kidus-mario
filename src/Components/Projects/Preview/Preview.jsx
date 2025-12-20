import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiExternalLink, FiX } from "react-icons/fi";
import PROJECTS from "../data/ProjectData";
import styles from "./Preview.module.css";

const Preview = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Add useNavigate hook
  const project = PROJECTS.find(p => p.id === Number(id));

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Function to handle close button click
  const handleClose = () => {
    // Go back to the previous page in history
    navigate(-1);
  };

  if (!project) {
    return (
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.contentWrapper}>
            <h1>Project not found</h1>
            <button onClick={handleClose} className={styles.closeButton}>
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.headerSection}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>{project.title}</h1>
            </div>
            <div className={styles.detailsSection}>
              <div className={styles.detailRow}>
                <div className={styles.detailLabel}>
                  <p className={styles.labelText}>Overview</p>
                </div>
                <div className={styles.detailContent}>
                  <p className={styles.contentText}>
                    {project.overview || project.description}
                  </p>
                </div>
              </div>
              <div className={styles.detailRow}>
                <div className={styles.detailLabel}>
                  <p className={styles.labelText}>Categories</p>
                </div>
                <div className={styles.categoriesContainer}>
                  <div className={styles.categoryItem}>
                    <p className={styles.categoryText}>{project.category}</p>
                  </div>
                  <div className={styles.categoryDivider}></div>
                  <div className={styles.categoryItem}>
                    <p className={styles.categoryText}>{project.stat}</p>
                  </div>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <div className={styles.buttonWrapper}>
                  <a 
                    href={project.liveUrl || "#"} 
                    className={styles.previewButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.buttonTextContainer}>
                      <p className={styles.buttonText}>Live Preview</p>
                    </div>
                    <div className={styles.buttonIcon}>
                      <FiExternalLink className={styles.externalIcon} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <div className={styles.imageInner}>
                  <img
                    decoding="auto"
                    width="1920"
                    height="1080"
                    sizes="min(100vw, 1120px)"
                    srcSet=""
                    src={project.src}
                    alt={`${project.title} preview`}
                    className={styles.previewImage}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ✅ OTHER PROJECTS SECTION */}
          <div className={styles.otherProjectsSection}>
            <h2 className={styles.otherProjectsTitle}>More works</h2>
            <div className={styles.otherProjectsGrid}>
              {PROJECTS.filter((p) => p.id !== project.id).map((p) => (
                <Link 
                  key={p.id} 
                  to={`/work/preview/${p.id}`} 
                  className={styles.otherProjectCard}
                >
                  <div className={styles.otherProjectImageWrapper}>
                    <img 
                      src={p.src} 
                      alt={p.title} 
                      className={styles.otherProjectImage}
                    />
                  </div>
                  <p className={styles.otherProjectName}>{p.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.closeButtonContainer}>
          {/* Change from Link to button with onClick handler */}
          <button onClick={handleClose} className={styles.closeButton}>
            <div className={styles.closeIcon}>
              <FiX className={styles.closeIconSvg} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;