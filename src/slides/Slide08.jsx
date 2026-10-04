import React from 'react';
import { motion } from 'framer-motion';

const Slide08 = () => {
  const mappings = [
    { kitchen: 'Chef', computer: 'Thread' },
    { kitchen: 'Order', computer: 'Task' },
    { kitchen: 'Kitchen', computer: 'Memory / Hardware' },
    { kitchen: 'Manager', computer: 'Program (OpenMP)' },
    { kitchen: 'Ingredients', computer: 'Data' }
  ];

  return (
    <div className="slide">
      <div className="slide-label">01 / OPENING</div>
      <div className="flex flex-col items-center justify-center h-full space-y-16">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-white tracking-wider"
        >
          KITCHEN <span className="text-cyan-400">→</span> COMPUTER
        </motion.h1>

        <div className="flex justify-between items-center w-full max-w-5xl relative">
          
          <div className="flex flex-col space-y-8 w-1/3">
            <h2 className="text-4xl font-bold text-amber-500 mb-4 text-center border-b-2 border-amber-500/30 pb-4">KITCHEN</h2>
            {mappings.map((m, i) => (
              <motion.div 
                key={`k-${i}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.3) }}
                className="glass py-4 px-6 rounded-xl text-center text-2xl font-bold text-white shadow-lg"
              >
                {m.kitchen}
              </motion.div>
            ))}
          </div>

          <div className="w-1/3 h-full absolute left-1/3 top-32 flex flex-col space-y-8 py-4 pointer-events-none">
            {mappings.map((_, i) => (
              <motion.div
                key={`line-${i}`}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ delay: 0.8 + (i * 0.3), duration: 0.4 }}
                className="h-1 bg-gradient-to-r from-amber-500/50 via-cyan-400 to-cyan-500/50 mx-auto mt-6"
                style={{ width: '80%' }}
              />
            ))}
          </div>

          <div className="flex flex-col space-y-8 w-1/3">
            <h2 className="text-4xl font-bold text-cyan-400 mb-4 text-center border-b-2 border-cyan-400/30 pb-4">COMPUTER</h2>
            {mappings.map((m, i) => (
              <motion.div 
                key={`c-${i}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + (i * 0.3) }}
                className="glass-strong py-4 px-6 rounded-xl text-center text-2xl font-bold text-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.2)] border border-cyan-500/30"
              >
                {m.computer}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default {
  section: 'OPENING',
  title: 'KITCHEN → COMPUTER',
  speakerNotes: 'Let\'s translate our kitchen analogy to computing terms. These mappings will be used throughout the day.',
  component: Slide08
};
