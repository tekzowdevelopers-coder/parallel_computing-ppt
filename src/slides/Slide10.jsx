import React from 'react';
import { motion } from 'framer-motion';

const Slide10 = () => {
  return (
    <div className="slide">
      <div className="slide-label">02 / CPU</div>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-20 tracking-wider"
        >
          ONE CORE
        </motion.h1>

        <div className="flex items-center space-x-24">
          
          <div className="flex flex-col space-y-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="bg-amber-500/20 border-2 border-amber-500 text-amber-300 py-4 px-8 rounded-lg text-2xl font-bold flex items-center shadow-[0_0_15px_rgba(245,158,11,0.3)]"
            >
              WAITING TASK
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: [0, 200, 200], opacity: [1, 1, 0] }}
              transition={{ delay: 1.5, duration: 2, repeat: Infinity, repeatDelay: 2 }}
              className="bg-cyan-500/20 border-2 border-cyan-400 text-cyan-300 py-4 px-8 rounded-lg text-2xl font-bold flex items-center"
            >
              ACTIVE TASK
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-96 h-96 border-4 border-cyan-500 bg-slate-900 rounded-3xl p-8 flex flex-col items-center justify-center relative shadow-[0_0_40px_rgba(6,182,212,0.4)]"
          >
            <h2 className="text-5xl font-mono font-bold text-white mb-8">CORE 0</h2>
            
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-green-500/20 text-green-400 border border-green-500/50 py-2 px-6 rounded-full text-2xl font-bold tracking-widest"
            >
              WORKING
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default {
  section: 'CPU',
  title: 'ONE CORE',
  speakerNotes: 'A single core can only work on one task at a time. Other tasks must wait.',
  component: Slide10
};
