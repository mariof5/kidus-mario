import React from 'react';
import styles from './Plans.module.css';
import imgplans from '/Plans/plans.webp';
import {
  FiCheck
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PlanFeature = ({ text }) => (
  <div className={styles.feature}>
    <div className={styles.featureIcon}>
      <FiCheck />
    </div>
    <p className={styles.featureText}>{text}</p>
  </div>
);

const PlanCard = ({
  title,
  description,
  deliveryTime,
  features,
  price,
  isPremium = false,
  backgroundImage
}) => {
  const cardClass = isPremium ? styles.premiumCard : styles.card;

  return (
    <div className={cardClass}>
      {isPremium && backgroundImage && (
        <div className={styles.backgroundImage}>
          <img
            decoding="auto"
            loading="lazy"
            src={backgroundImage}
            alt="Background"
            className={styles.backgroundImg}
          />
        </div>
      )}

      <div className={styles.planContent}>
        <div className={styles.planHeader}>
          <h6 className={isPremium ? styles.premiumTitle : styles.title}>
            {title}
          </h6>
          <p className={isPremium ? styles.premiumDescription : styles.description}>
            {description}
          </p>
        </div>

        <div className={styles.deliveryInfo}>
          <div className={styles.deliveryRow}>
            <p className={isPremium ? styles.premiumText : styles.deliveryLabel}>
              Delivery Time
            </p>
            <p className={isPremium ? styles.premiumText : styles.deliveryTime}>
              {deliveryTime}
            </p>
          </div>
          <div className={isPremium ? styles.premiumDivider : styles.divider}></div>
        </div>
      </div>

      <div className={styles.planFeatures}>
        <div className={isPremium ? styles.premiumDivider : styles.divider}></div>

        <div className={styles.featuresList}>
          {features.map((feature, index) => (
            <PlanFeature
              key={index}
              text={feature.text}
            />
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <Link to="/contact" className={styles.ctaButton}>
            <div className={styles.buttonBackground}></div>
            <p className={styles.buttonText}>Let's Begin</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Plans = () => {
  const starterFeatures = [
    { text: "Single Page React Application with Responsive Design" },
    { text: "Mobile-First Development Approach" },
    { text: "Basic SEO Setup & Optimization" },
    { text: "Performance Optimization & Fast Loading" },
    { text: "1 Round of Revisions Included" }
  ];

  const premiumFeatures = [
    { text: "Multi-Page React/Next.js Application" },
    { text: "Advanced SEO & Analytics Integration" },
    { text: "Custom Backend API Development" },
    { text: "User Authentication System" },
    { text: "Database Integration (MongoDB/PostgreSQL)" },
    { text: "3 Rounds of Revisions" },
    { text: "Performance & Speed Optimization" },
    { text: "1 Month Post-Launch Support" },
    { text: "CMS Integration (Optional)" },
    { text: "Priority Support" }
  ];

  const backgroundImage = imgplans;

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <h2 className={styles.mainTitle}>Web Development Services</h2>
          </div>
        </div>

        <div className={styles.plansContainer}>
          <div className={styles.planWrapper}>
            <PlanCard
              title="Starter Development Plan"
              description="Perfect for MVPs, landing pages, or small businesses getting started with a modern web presence."
              deliveryTime="2-3 weeks"
              features={starterFeatures}
              price="$1,500"
            />
          </div>

          <div className={styles.planWrapper}>
            <PlanCard
              title="Premium Full-Stack Plan"
              description="Ideal for growing businesses needing complete web applications with backend functionality and advanced features."
              deliveryTime="4-6 weeks"
              features={premiumFeatures}
              price="$3,500"
              isPremium={true}
              backgroundImage={backgroundImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;