import React from 'react';
import { motion } from 'framer-motion';

const Slide02 = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <div className="slide">
      <div className="slide-label">01 / OPENING</div>
      <div className="flex flex-col items-center justify-center h-full space-y-16">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-white tracking-wider"
        >
          TODAY'S MISSION
        </motion.h1>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex space-x-8 w-full max-w-6xl"
        >
          {['UNDERSTAND', 'DIVIDE', 'PARALLELIZE'].map((word, i) => (
            <motion.div 
              key={word}
              variants={item}
              className="flex-1 glass p-12 rounded-2xl flex items-center justify-center border-t-2 border-cyan-500/50 bg-gradient-to-b from-cyan-900/20 to-transparent"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 tracking-widest">{word}</h2>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-3xl text-secondary max-w-4xl text-center leading-relaxed"
        >
          By the end of today, you will understand how OpenMP allows multiple threads to work together.
        </motion.p>
      </div>
    </div>
  );
};

export default {
  section: 'OPENING',
  title: "TODAY'S MISSION",
  speakerNotes: "Three goals for today. Let's start with understanding the problem.",
  component: Slide02
};
