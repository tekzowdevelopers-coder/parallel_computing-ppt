import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

const Slide01 = () => (
  <div className="slide">
    <div className="slide-label">01 / OPENING</div>
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-center uppercase tracking-wider"
      >
        Parallel Computing <br/> with OpenMP
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-3xl text-secondary"
      >
        From One Worker to Many
      </motion.p>
      
      <div className="flex items-center justify-center h-48 w-full relative">
        <motion.div
          initial={{ scale: 1, opacity: 1, x: 0 }}
          animate={{ scale: [1, 1.2, 0], opacity: [1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 3 }}
          className="absolute"
        >
          <ChefHat size={80} className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1] }}
          transition={{ duration: 2, times: [0, 0.8, 1], repeat: Infinity, repeatDelay: 3 }}
          className="flex space-x-8 absolute"
        >
          {[1, 2, 3, 4].map(i => (
            <motion.div key={i}
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ delay: 2 + (i * 0.1), duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <ChefHat size={80} className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex space-x-6 mt-12"
      >
        <span className="px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono">DAY 1</span>
        <span className="px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono">C</span>
        <span className="px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono">GCC</span>
        <span className="px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono">OpenMP</span>
      </motion.div>
    </div>
  </div>
);

export default {
  section: 'OPENING',
  title: 'PARALLEL COMPUTING WITH OPENMP',
  speakerNotes: 'Welcome to Day 1. Today we begin our journey into parallel computing.',
  component: Slide01
};
