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
    { text: "Single page or single multiple page" },
    { text: "Fully built in Framer or Webflow" },
    { text: "Mobile friendly and fast loading" },
    { text: "Basic SEO Setup" }
  ];

  const premiumFeatures = [
    { text: "Custom multiple page design" },
    { text: "Built in framer or webflow with animation/interactions" },
    { text: "Advanced SEO analytics setup" },
    { text: "Integration (forms, bookings, etc)" },
    { text: "Dedicated support until launch" }
  ];

  const backgroundImage = imgplans;

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <h2 className={styles.mainTitle}>Founder's Offer</h2>
          </div>
        </div>

        <div className={styles.plansContainer}>
          <div className={styles.planWrapper}>
            <PlanCard
              title="Starter Website Plan"
              description="Perfect for small business owners or personal branding starting fresh."
              deliveryTime="1-2 weeks"
              features={starterFeatures}
              price="$500"
            />
          </div>

          <div className={styles.planWrapper}>
            <PlanCard
              title="Premium Website Plan"
              description="Ideal for business that need a polished, scalable online presence."
              deliveryTime="2-3 weeks"
              features={premiumFeatures}
              price="$1000"
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