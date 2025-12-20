import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

// Import your logo image
import logoImage from '../../../public/Logo/Logo.png'; // Update this path

// Import icons (you can use react-icons or SVG)
const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const activeLink = location.pathname;

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' }
  ];

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    
    // Force storage event to notify other components
    window.dispatchEvent(new Event('storage'));
  };

  // Scroll effect for header transformation
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle logo click - scroll to top if on home page, navigate to home otherwise
  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      // Scroll to top of home page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Handle Book a call click - navigate to contact page
  const handleBookCallClick = () => {
    navigate('/contact');
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${
          isDarkMode ? styles.darkTheme : ''
        }`}
      >
        <div className={styles.container}>
          {/* Left: Brand Logo with Image */}
          <Link 
            to="/" 
            className={styles.logo}
            onClick={handleLogoClick}
          >
            <div className={styles.logoMark}>
              <img 
                src={logoImage} 
                alt="Saint Logo" 
                className={styles.logoImage}
              />
            </div>
            <span className={styles.logoWordmark}>saint</span>
          </Link>

          {/* Right: Navigation & CTA - Desktop */}
          <div className={styles.navWrapper}>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className={`${styles.navLink} ${
                        activeLink === link.href ? styles.active : ''
                      }`}
                      aria-current={activeLink === link.href ? 'page' : undefined}
                      onClick={handleLinkClick}
                    >
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Dark Mode Toggle Button */}
            <button 
              className={styles.themeToggle}
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className={styles.themeIcon}>
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </span>
            </button>

            <button 
              className={styles.ctaButton}
              onClick={handleBookCallClick}
            >
              <span>Book a call</span>
            </button>
          </div>

          {/* Modern Hamburger Menu Button - Mobile */}
          <button 
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Refined Glass Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  to={link.href} 
                  className={`${styles.mobileNavLink} ${
                    activeLink === link.href ? styles.active : ''
                  }`}
                  aria-current={activeLink === link.href ? 'page' : undefined}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Dark Mode Toggle */}
        <button 
          className={styles.mobileThemeToggle}
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className={styles.themeIcon}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </span>
          <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
        
        <button 
          className={styles.mobileCtaButton}
          onClick={handleBookCallClick}
        >
          <span>Book a call</span>
        </button>
      </div>
    </>
  );
};

export default Header;