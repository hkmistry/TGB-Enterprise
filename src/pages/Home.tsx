import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';

// Import homepage sections
import Hero from '../components/sections/Hero';
import Identity from '../components/sections/Identity';
import Projects from '../components/sections/Projects';
import Industries from '../components/sections/Industries';
import Testimonials from '../components/sections/Testimonials';
import ContactCTA from '../components/sections/ContactCTA';

export const Home: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Hero />
      <Identity />
      <Projects />
      <Industries />
      <Testimonials />
      <ContactCTA />
    </motion.div>
  );
};

export default Home;
