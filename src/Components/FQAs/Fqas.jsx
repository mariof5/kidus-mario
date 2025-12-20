'use client';
import React, { useState } from 'react';
import styles from './Fqas.module.css';

const FAQItem = ({ number, question, answer, isOpen, onClick }) => {
  return (
    <div className={styles.faqItem}>
      <div 
        className={styles.faqHeader} 
        tabIndex="0"
        onClick={onClick}
        role="button"
        aria-expanded={isOpen}
      >
        <div className={styles.faqQuestion}>
          <div className={styles.questionNumber}>
            <span>{number}.</span>
          </div>
          <div className={styles.questionText}>
            <h3>{question}</h3>
          </div>
        </div>
        <div className={`${styles.arrowContainer} ${isOpen ? styles.arrowOpen : ''}`}>
          <svg
            height="1.5em"
            width="100%"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.arrow}
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div 
        className={`${styles.faqAnswer} ${isOpen ? styles.answerOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.answerContent}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function Fqas() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      number: "1",
      question: "What services do you offer?",
      answer: "I offer comprehensive design services including UI/UX design, web design, mobile app design, branding, and design systems. I work with startups and established businesses to create user-centered digital experiences that drive results and enhance user engagement."
    },
    {
      number: "2",
      question: "How does the design process work?",
      answer: "My design process follows a structured, collaborative approach: discovery and research, strategy and planning, design and prototyping, testing and iteration, and finally, delivery and handoff. I maintain transparent communication throughout each phase to ensure alignment with your vision and business objectives."
    },
    {
      number: "3",
      question: "How long does a project usually take?",
      answer: "Project timelines vary based on scope and complexity. A typical website design takes 2-4 weeks, while comprehensive branding projects can take 4-6 weeks. More complex applications may require 6-8 weeks. I provide detailed timelines and milestones during our initial consultation to set clear expectations."
    },
    {
      number: "4",
      question: "What do I need to provide before starting a project?",
      answer: "To ensure project success, I'll need your business goals, target audience information, brand guidelines (if available), content strategy, and any existing design assets. The more context you provide about your vision and requirements, the better I can tailor the solution to meet your specific needs and objectives."
    },
    {
      number: "5",
      question: "Do you offer revisions?",
      answer: "Yes, I include structured revision rounds in each project package to ensure we can refine the designs until you're completely satisfied. This balanced approach maintains project efficiency while allowing for necessary adjustments. The number of revisions depends on the project scope and is clearly outlined in our agreement."
    },
    {
      number: "6",
      question: "How do I get started?",
      answer: "Getting started is straightforward. Schedule a complimentary consultation call where we'll discuss your project vision, goals, timeline, and budget. Following our discussion, I'll provide a detailed proposal outlining the scope, deliverables, and investment. Once approved, we'll begin our collaborative journey."
    }
  ];

  return (
    <section className={styles.faqSection} aria-labelledby="faq-title">
      <div className={styles.faqContainer}>
        <div className={styles.faqSidebar}>
          <div className={styles.sidebarContent}>
            <div className={styles.titleContainer}>
              <h2 id="faq-title">Frequently Asked Questions</h2>
            </div>
            <div className={styles.descriptionContainer}>
              <p>
                Here are answers to some of the most common questions I
                receive as a professional designer. If you don't see your
                question here, feel free to reach out—I'm always happy to help!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.faqContent}>
          <div className={styles.faqList}>
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                number={faq.number}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems[index]}
                onClick={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}