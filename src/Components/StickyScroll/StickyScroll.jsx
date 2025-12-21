import React, { useRef, useEffect, useState } from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { 
  FiChevronDown, 
  FiChevronUp,
  FiLayout,
  FiSmartphone,
  FiUsers,
  FiZap,
  FiPenTool,
  FiImage,
  FiPieChart,
  FiFeather,
  FiGlobe,
  FiTarget,
  FiCode,
  FiTool,
  FiAward,
  FiType,
  FiMessageCircle,
  FiShare2,
  FiMonitor,
  FiFileText,
  FiPlus,
  FiMinus,
  FiDatabase,
  FiServer,
  FiCloud,
  FiCpu
} from 'react-icons/fi';
import styles from './StickyScroll.module.css';

// Updated section images for web development
const sectionImages = [
  "https://framerusercontent.com/images/hyYAPAy5aNpU8ZJazb7OHmP4tw.png",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
];

// Updated tech stack for React/Web Development
const techStack = [
  {
    name: "React",
    description: "My primary framework for building dynamic, component-based user interfaces with reusable logic and state management.",
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg"
  },
  {
    name: "Next.js",
    description: "My go-to React framework for production applications, offering SSR, SSG, and optimal performance out of the box.",
    icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg"
  },
  {
    name: "TypeScript",
    description: "Essential for building scalable applications with type safety, better developer experience, and maintainable code.",
    icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg"
  }
];

const additionalTechStack = [
  {
    name: "Tailwind CSS",
    description: "My preferred utility-first CSS framework for rapidly building custom designs without leaving my HTML/JSX.",
    icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
  },
  {
    name: "Node.js",
    description: "My backend runtime for building scalable server-side applications and APIs with JavaScript.",
    icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
  },
  {
    name: "MongoDB",
    description: "My flexible NoSQL database choice for modern applications with dynamic data schemas.",
    icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
  }
];

// Updated services for Web Development
const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive, interactive user interfaces with React, Next.js, and modern JavaScript frameworks.",
    icon: FiCode,
    items: [
      { icon: FiLayout, text: "Component-based architecture with React" },
      { icon: FiSmartphone, text: "Responsive and mobile-first web applications" },
      { icon: FiZap, text: "Performance optimization and code splitting" },
      { icon: FiUsers, text: "Accessibility-first development practices" }
    ]
  },
  {
    id: 2,
    title: "Full Stack Development",
    description: "End-to-end web application development with React frontends and Node.js backends.",
    icon: FiServer,
    items: [
      { icon: FiDatabase, text: "RESTful API design and implementation" },
      { icon: FiCloud, text: "Database design with MongoDB/PostgreSQL" },
      { icon: FiCpu, text: "Authentication and authorization systems" },
      { icon: FiTool, text: "Deployment and DevOps with Vercel/AWS" }
    ]
  },
  {
    id: 3,
    title: "UI Development",
    description: "Translating designs into pixel-perfect, interactive React components with modern CSS.",
    icon: FiMonitor,
    items: [
      { icon: FiPenTool, text: "Custom React component development" },
      { icon: FiImage, text: "CSS-in-JS and styled-components" },
      { icon: FiType, text: "Design system implementation" },
      { icon: FiFeather, text: "Animation with Framer Motion/GSAP" }
    ]
  },
  {
    id: 4,
    title: "Code Optimization",
    description: "Improving application performance, maintainability, and developer experience.",
    icon: FiAward,
    items: [
      { icon: FiTarget, text: "Code refactoring and optimization" },
      { icon: FiPieChart, text: "Performance monitoring and analytics" },
      { icon: FiMessageCircle, text: "Technical documentation" },
      { icon: FiShare2, text: "Code review and best practices" }
    ]
  }
];

const StickyScroll = ({ isDarkMode = false }) => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openService, setOpenService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showMoreTech, setShowMoreTech] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Cache section refs
    sectionRefs.current = containerRef.current?.querySelectorAll(`.${styles.textSection}`) || [];
    
    const observerOptions = {
      root: null,
      rootMargin: isMobile ? '-20% 0px -20% 0px' : '-30% 0px -30% 0px',
      threshold: isMobile ? 0.25 : 0.35,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isMobile]);

  const toggleService = (serviceId) => {
    setOpenService(openService === serviceId ? null : serviceId);
  };

  const toggleShowMoreTech = () => {
    setShowMoreTech(!showMoreTech);
  };

  return (
    <div 
      className={styles.container} 
      ref={containerRef}
      data-theme={isDarkMode ? "dark" : "light"}
    >
      {/* Background Elements */}
      <div className={styles.backgroundGlow}>
        <div className={styles.glowCircle1}></div>
        <div className={styles.glowCircle2}></div>
      </div>

      {/* Preload first image */}
      <link rel="preload" as="image" href={sectionImages[0]} />
      
      <div className={styles.contentWrapper}>
        <div className={styles.textColumn}>
          {/* About Section */}
          <div className={styles.textSection} data-index={0}>
            <div className={styles.aboutContent}>
              <div className={styles.aboutHeader}>
                <h1 className={styles.aboutTitle}>About me</h1>
              </div>
              <div className={styles.aboutDetails}>
                <h3 className={styles.name}>kidus h/mariam mario</h3>
                <p className={styles.bio}>
                  I'm a full-stack developer specializing in React and modern web technologies,
                  passionate about building scalable, performant applications.
                </p>
                <p className={styles.bio}>
                  With expertise in React, Next.js, and TypeScript, I create elegant solutions
                  that balance user experience with technical excellence.
                </p>
              </div>
              <div className={styles.socialLinks}>
                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaTwitter className={styles.socialIcon} />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaGithub className={styles.socialIcon} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaLinkedin className={styles.socialIcon} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaInstagram className={styles.socialIcon} />
                </a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className={styles.textSection} data-index={1}>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeader}>
                <h2 className={styles.servicesTitle}>what I can do for you</h2>
                <p className={styles.servicesDescription}>
                  I build modern web applications with clean architecture, optimal performance,
                  and exceptional user experiences.
                </p>
              </div>
              <div className={styles.servicesList}>
                {services.map((service) => (
                  <div key={service.id} className={styles.serviceItem}>
                    <div 
                      className={styles.serviceHeader}
                      onClick={() => toggleService(service.id)}
                    >
                      <div className={styles.serviceTitleWrapper}>
                        <span className={styles.serviceNumber}>{service.id}.</span>
                        <h3 className={styles.serviceName}>{service.title}</h3>
                      </div>
                      <div className={styles.serviceIcon}>
                        {openService === service.id ? <FiChevronUp /> : <FiChevronDown />}
                      </div>
                    </div>
                    <div 
                      className={`${styles.serviceContent} ${
                        openService === service.id ? styles.serviceContentOpen : ''
                      }`}
                    >
                      <div className={styles.serviceItems}>
                        {service.items.map((item, index) => (
                          <div key={index} className={styles.serviceDetail}>
                            <div className={styles.detailIcon}>
                              <item.icon />
                            </div>
                            <p className={styles.detailText}>{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className={styles.textSection} data-index={2}>
            <div className={styles.techStackContent}>
              <div className={styles.techStackHeader}>
                <h2 className={styles.techStackTitle}>My Tech Stack</h2>
                <p className={styles.techStackDescription}>
                  I work with modern technologies to build scalable web applications.
                  React for dynamic UIs, Next.js for full-stack solutions, TypeScript for
                  type-safe code, and Tailwind CSS for rapid styling.
                </p>
              </div>
              <div className={styles.techStackItems}>
                {techStack.map((tech, index) => (
                  <div key={index} className={styles.techItem}>
                    <div className={styles.techIcon}>
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className={styles.techImage}
                        width="56"
                        height="56"
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.techContent}>
                      <h3 className={styles.techName}>{tech.name}</h3>
                      <p className={styles.techDescription}>{tech.description}</p>
                    </div>
                  </div>
                ))}
                
                {/* Additional Tech Stack - Hidden by default */}
                <div className={`${styles.additionalTechItems} ${showMoreTech ? styles.show : ''}`}>
                  {additionalTechStack.map((tech, index) => (
                    <div key={index} className={styles.techItem}>
                      <div className={styles.techIcon}>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className={styles.techImage}
                          width="56"
                          height="56"
                          loading="lazy"
                        />
                      </div>
                      <div className={styles.techContent}>
                        <h3 className={styles.techName}>{tech.name}</h3>
                        <p className={styles.techDescription}>{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Professional See More Button */}
                <div className={styles.seeMoreContainer}>
                  <button 
                    className={styles.seeMoreButton}
                    onClick={toggleShowMoreTech}
                  >
                    <span className={styles.seeMoreText}>
                      {showMoreTech ? 'See Less' : 'See More'}
                    </span>
                    <div className={styles.seeMoreIcon}>
                      {showMoreTech ? <FiMinus /> : <FiPlus />}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.stickyColumn}>
          <div className={styles.imageContainer}>
            {sectionImages.map((image, index) => (
              <div
                key={index}
                className={`${styles.imageWrapper} ${activeIndex === index ? styles.active : ''}`}
              >
                <img
                  src={image}
                  alt={index === 0 ? "Web Development" : index === 1 ? "Coding Services" : "Tech Stack"}
                  className={styles.image}
                  width="800"
                  height="600"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;