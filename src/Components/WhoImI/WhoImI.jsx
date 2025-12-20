import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./WhoImI.module.css";

const WhoImI = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const sectionRef = useRef(null);

  const getCurrentTheme = () => {
    if (typeof window === "undefined") return "light";

    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemDark ? "dark" : "light";
  };

  useEffect(() => {
    setIsVisible(true);
    
    const currentTheme = getCurrentTheme();
    setIsDarkMode(currentTheme === "dark");
    document.documentElement.setAttribute('data-theme', currentTheme);

    const handleStorageChange = () => {
      const newTheme = getCurrentTheme();
      setIsDarkMode(newTheme === "dark");
      document.documentElement.setAttribute('data-theme', newTheme);
    };

    const handleThemeChange = () => {
      handleStorageChange();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("themeChanged", handleThemeChange);
    
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themeChanged", handleThemeChange);
      clearInterval(interval);
    };
  }, []);

  const socialLinks = [
    { icon: "https://framerusercontent.com/images/8mOkby3273nD9LO8mmwSd5uBJQ.svg", label: "Twitter" },
    { icon: "https://framerusercontent.com/images/AYPFnqUn057qd1v3JKUQU54aHs.svg", label: "Instagram" },
    { icon: "https://framerusercontent.com/images/0N4SuYKvjta6ctMuqsWFzVE.svg", label: "Behance" },
    { icon: "https://framerusercontent.com/images/ogfS0U6Vtsl7YP6oDfAzHwlXHQ.svg", label: "Dribbble" },
  ];

  const techIcons = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
  ];

  const items = [...socialLinks, ...techIcons];

  const expandedTop = ["48%", "62%", "76%", "87%", "59%", "47%", "70%", "87%"];
  const expandedLeft = ["22%", "20%", "15%", "24%", "83%", "70%", "73%", "70%"];
  const expandedRotate = ["0deg", "0deg", "0deg", "0deg", "26deg", "-23deg", "-4deg", "-38deg"];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const spread = useTransform(scrollYProgress, [0, 1], [-0.88, 2.2]);
  const helloFontSize = useTransform(scrollYProgress, [0, 3], ["1rem", "0.1rem"]);
  const titleFontSize = useTransform(scrollYProgress, [0, 1], ["4.8rem", "2.9rem"]);
  const titleLineHeight = useTransform(scrollYProgress, [0, 1], ["1.1", "1"]);
  const headerScale = useTransform(scrollYProgress, [0, 1], [1.5, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0.55, 0], [0, 3]);

  const profileImageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 0.9, 0.8]);
  const profileImageClip = useTransform(
    scrollYProgress, 
    [0, 0, 1], 
    ["inset(100% 100% 100% 100%)", "inset(10% 10% 10% 10%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <section 
      ref={sectionRef}
      id="about"
      className={styles.about}
      data-theme={isDarkMode ? "dark" : "light"}
    >
      {/* ICON BACKGROUND */}
      <div className={styles.iconsBackground}>
        {items.map((it, i) => {
          const top = useTransform(spread, [0, 1], ["60%", expandedTop[i]]);
          const left = useTransform(spread, [0, 1], ["50%", expandedLeft[i]]);
          const rotate = useTransform(spread, [0, 1], ["0deg", expandedRotate[i]]);
          const scale = useTransform(spread, [0, 1], [0.4, 1]);
          const opacity = useTransform(spread, [0, 1], [0, isDarkMode ? 0.8 : 0.95]);

          return (
            <motion.div
              key={i}
              className={styles.iconElement}
              style={{ top, left, rotate, scale, opacity }}
            >
              <img
                src={it.icon}
                alt={it.label}
                className={styles.iconImage}
                style={{
                  filter: isDarkMode ? 'brightness(0.9) contrast(1.1)' : 'none'
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* BG GLOW */}
      <div className={styles.backgroundGlow}>
        <div className={styles.glowCircle1}></div>
        <div className={styles.glowCircle2}></div>
      </div>

      {/* HERO TITLE */}
      <motion.div 
        className={`${styles.heroHeader} ${isVisible ? styles.visible : ""}`}
        style={{ scale: headerScale, opacity: headerOpacity }}
      >
        <motion.div className={styles.helloText} style={{ fontSize: helloFontSize }}>
         //Hello World — the origin of all programs
        </motion.div>

        <motion.h1 className={styles.mainTitle} style={{ fontSize: titleFontSize, lineHeight: titleLineHeight }}>
          <span className={styles.animatedText}>I'm a Full</span>
        </motion.h1>

        <motion.h1 className={styles.mainTitle} style={{ fontSize: titleFontSize, lineHeight: titleLineHeight }}>
          <span className={styles.animatedText}>Stack Developer</span>
        </motion.h1>
      </motion.div>

      {/* IMAGE */}
      <div className={styles.profileSection}>
        <motion.div 
          className={styles.profileImage}
          style={{ 
            overflow: "hidden",
            clipPath: profileImageClip,
            transformOrigin: "center center"
          }}
        >
          <motion.img
            src="https://framerusercontent.com/images/hyYAPAy5aNpU8ZJazb7OHmP4tw.png"
            alt="Developer Profile"
            className={styles.profileImg}
            style={{
              filter: isDarkMode ? 'grayscale(0.3) brightness(0.95)' : 'grayscale(0.2)',
              scale: profileImageScale,
              transformOrigin: "center center"
            }}
          />
        </motion.div>
      </div>

      {/* TEXT */}
      <div className={styles.contentSection}>
        <div className={styles.aboutContent}>
          <p className={styles.mainDescription}>
           A Developer dedicated to building seamless,  <span className={styles.highlight}>end-to-end digital solutions.</span>With expertise ranging from system architecture to pixel-perfect interfaces , I bridge bulletproof backend engineering with beautiful user experiences {"  "} 
            <span className={styles.highlight}>and responsive  applications</span> that feel effortless.
          </p>

          <p className={styles.subDescription}>
            I turn ideas into clean code that solves real problems.
          </p>
        </div>

        {/* UPDATED RESUME BUTTON */}
        <a 
          href="#" // Replace with actual resume link
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          My Resume
          <svg fill="currentColor" viewBox="0 0 24 24" className={styles.buttonIcon}>
            <path
              clipRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fillRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default WhoImI;