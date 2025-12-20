import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';
import styles from './Footer.module.css';
import backgroundImage from '/public/Footer/footer_bg.png';
import Logo from '/public/Logo/Logo.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={styles.footer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.container}>
        {/* Contact Information */}
        <div className={styles.contactSection}>
          {/* Email */}
          <div className={styles.contactItem}>
            <div className={styles.contactLabel}>
              <p>Email:</p>
            </div>
            <div className={styles.contactValue}>
              <a 
                href="mailto:designer@example.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                designer@example.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className={styles.contactItem}>
            <div className={styles.contactLabel}>
              <p>Call Today:</p>
            </div>
            <div className={styles.contactValue}>
              <a 
                href="tel:+1 (555) 123-4567" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className={styles.socialSection}>
            <div className={styles.socialLabel}>
              <p>Social:</p>
            </div>
            <div className={styles.socialIcons}>
              <a 
                href="https://t.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Telegram"
              >
                <FaTelegram className={styles.socialIcon} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FaLinkedin className={styles.socialIcon} />
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a 
                href="https://x.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                <FaTwitter className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          {/* Copyright */}
          <div className={styles.copyright}>
            <p>
              © Copyright {currentYear}. All Rights Reserved by{' '}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                Saint
              </a>
            </p>
          </div>

          {/* Creator Credit */}
          <div className={styles.creator}>
            <div className={styles.creatorContent}>
              <p className={styles.creatorText}>Created by</p>
              <div className={styles.creatorLogo}>
                <img
                  decoding="auto"
                  loading="lazy"
                  src={Logo}
                  alt="Creator Logo"
                  className={styles.logoImage}
                />
              </div>
              <p className={styles.creatorText}>
                <a 
                  href="https://x.com/ShenDuncan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Saint Mario
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;