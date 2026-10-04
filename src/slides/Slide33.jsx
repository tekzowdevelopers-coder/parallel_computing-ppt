import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default {
  section: 'THREAD CONTROL',
  title: 'HOW MANY THREADS?',
  speakerNotes: 'You can control how many threads OpenMP creates.',
  component: function Slide33() {
    const [count, setCount] = useState(2);
    
    useEffect(() => {
      const timer1 = setTimeout(() => setCount(4), 2000);
      const timer2 = setTimeout(() => setCount(8), 4000);
      return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    return (
      <div className="slide">
        <div className="slide-label">33 / THREAD CONTROL</div>
        <motion.h1 
          className="text-7xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          HOW MANY THREADS?
        </motion.h1>
        
        <div className="flex flex-col items-center w-full max-w-5xl h-[500px]">
          <motion.div 
            className="text-5xl font-bold text-cyan-400 mb-16"
            key={count}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring' }}
          >
            {count} THREADS
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl">
            <AnimatePresence>
              {Array.from({ length: count }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-24 h-24 rounded-full bg-green-500 shadow-[0_0_20px_rgba(16,185,129,0.6)] flex items-center justify-center text-3xl font-bold text-white"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', damping: 12, stiffness: 100, delay: i * 0.05 }}
                >
                  T{i}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }
};
