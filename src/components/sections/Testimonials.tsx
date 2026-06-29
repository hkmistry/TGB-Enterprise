import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { homeContent } from '../../content/home';
import styles from './Testimonials.module.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Testimonials: React.FC = () => {
  const { header, reviews } = homeContent.testimonials;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section id="testimonials" className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        {/* Section Header */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.titleBlock}>
            <span className={styles.label}>{header.label}</span>
            <h2 className={styles.mainTitle}>{header.title}</h2>
          </div>
          <span className={styles.coordinates}>{header.coordinates}</span>
        </motion.div>

        {/* Testimonials Deck */}
        <motion.div
          className={styles.reviewsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {reviews.map((review, i) => (
            <motion.div 
              key={i} 
              className={styles.reviewCard}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className={styles.quoteMark}>“</div>
              <p className={styles.quoteText}>{review.quote}</p>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{review.author}</span>
                <span className={styles.authorRole}>{review.role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
