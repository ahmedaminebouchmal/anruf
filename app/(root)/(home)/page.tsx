"use client";

import { motion } from 'framer-motion';
import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react';  // Ensure React is imported

const Home: React.FC = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now);

  // Animation variants for containers and items
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
  };

  return (
    <motion.section
      className="flex flex-col gap-6 p-6 bg-dark-1 text-white rounded-lg shadow-md max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main background container with glassmorphism effect */}
      <motion.div
        className="h-[303px] w-full rounded-2xl bg-hero bg-cover bg-center shadow-lg overflow-hidden"
        variants={itemVariants}
      >
        <div className="flex h-full flex-col justify-between p-6 lg:p-10 bg-dark-2 bg-opacity-70 backdrop-blur-sm">
          <motion.h2
            className="glassmorphism max-w-[273px] mx-auto rounded py-2 px-4 text-center text-sm font-medium text-sky-1 lg:text-base"
            variants={itemVariants}
          >
            Upcoming Meeting at: 9:00 PM
          </motion.h2>
          <div className="flex flex-col items-center gap-2 mt-auto">
            <motion.h1
              className="text-5xl font-extrabold lg:text-7xl drop-shadow-md"
              variants={itemVariants}
            >
              {time}
            </motion.h1>
            <motion.p
              className="text-lg font-medium text-sky-1 lg:text-2xl"
              variants={itemVariants}
            >
              {date}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* MeetingTypeList Component remains unchanged */}
      <MeetingTypeList />
    </motion.section>
  );
};

export default Home;
