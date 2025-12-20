import React, { useRef, useEffect, useState } from 'react';
import { FaTwitter, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';
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
  FiMinus
} from 'react-icons/fi';
import styles from './StickyScroll.module.css';

// Move static data outside component
const sectionImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
];

const techStack = [
  {
    name: "Framer",
    description: "My creative playground for building interactive and responsive websites—fast, flexible, and no code.",
    icon: "https://framerusercontent.com/images/Nf63tXddU52SRtJJgRHqk7zzD2g.png"
  },
  {
    name: "Figma",
    description: "My go-to for UI/UX design—perfect for wireframing, prototyping, and collaborating in real time.",
    icon: "https://framerusercontent.com/images/RaZetiUCiiVee9pYfau5kIm0k.jpg"
  },
  {
    name: "X",
    description: "Where I connect, share insights, and grow within the design and Framer community.",
    icon: "https://framerusercontent.com/images/KhZnIlAtOozB2Axd5yg9ALd7A.jpg"
  }
];

const additionalTechStack = [
  {
    name: "Spline",
    description: "My tool for bringing 3D visuals into the web—perfect for adding playful, interactive depth to projects.",
    icon: "https://framerusercontent.com/images/FigaBMy3WrTNL79MFKifsXxXE.jpg"
  },
  {
    name: "Lemon Squeezy",
    description: "My trusted solution for managing payments and licensing digital products effortlessly.",
    icon: "https://framerusercontent.com/images/1jsryiRhbB5SoLHzyceqqF9tpo.jpg"
  }
];

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "As a digital designer, I am a visual storyteller, crafting experiences that connect deeply and spark creativity.",
    icon: FiLayout,
    items: [
      { icon: FiPenTool, text: "Wireframing and prototyping" },
      { icon: FiSmartphone, text: "User Interface design for web and mobile apps" },
      { icon: FiUsers, text: "Usability testing and user feedback analysis" },
      { icon: FiZap, text: "Interaction design and micro-animations" }
    ]
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Creating compelling visual identities that communicate your brand's essence and values.",
    icon: FiImage,
    items: [
      { icon: FiAward, text: "Logo and brand identity design" },
      { icon: FiShare2, text: "Social media graphics and ad creatives" },
      { icon: FiPieChart, text: "Infographics and data visualization" },
      { icon: FiFeather, text: "Custom illustrations and icons" }
    ]
  },
  {
    id: 3,
    title: "Web Design",
    description: "Building responsive, user-friendly websites that deliver exceptional digital experiences.",
    icon: FiGlobe,
    items: [
      { icon: FiMonitor, text: "Responsive website design" },
      { icon: FiTarget, text: "Landing page design and optimization" },
      { icon: FiCode, text: "Webflow development and customization" },
      { icon: FiTool, text: "Website maintenance and updates" }
    ]
  },
  {
    id: 4,
    title: "Branding",
    description: "Developing cohesive brand systems that tell your unique story and connect with your audience.",
    icon: FiAward,
    items: [
      { icon: FiAward, text: "Brand strategy and identity development" },
      { icon: FiFileText, text: "Visual style guide creation" },
      { icon: FiType, text: "Typography and color scheme selection" },
      { icon: FiMessageCircle, text: "Brand storytelling and messaging" }
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
                <h3 className={styles.name}>Duncan Robert</h3>
                <p className={styles.bio}>
                  I'm a digital designer and Framer developer passionate about
                  crafting meaningful, user-centered experiences.
                </p>
                <p className={styles.bio}>
                  With a strong foundation in visual design and a deep
                  understanding of interactive systems, I bring ideas to life
                  through thoughtful design, smooth animations, and responsive
                  layouts.
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
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaInstagram className={styles.socialIcon} />
                </a>
                <a
                  href="https://www.behance.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaBehance className={styles.socialIcon} />
                </a>
                <a
                  href="https://dribbble.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaDribbble className={styles.socialIcon} />
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
                  As a digital designer, I am a visual storyteller, crafting
                  experiences that connect deeply and spark creativity.
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
                  I build with intention. Framer for fast, interactive web design.
                  Figma for clean interfaces. Notion and X for content. Each tool
                  supports how I think, design.
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
                  alt={index === 0 ? "About Duncan Robert" : index === 1 ? "Services" : "Tech Stack"}
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