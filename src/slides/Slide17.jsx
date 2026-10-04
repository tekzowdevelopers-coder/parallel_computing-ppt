import React from 'react';
import { motion } from 'framer-motion';

const Slide17 = () => {
  return (
    <div className="slide">
      <div className="slide-label">04 / OPENMP</div>
      <div className="flex flex-col items-center justify-center h-full w-full space-y-12">
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className="text-8xl md:text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_40px_rgba(34,211,238,0.5)] tracking-tighter"
        >
          OPENMP
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-5xl font-bold text-white tracking-widest mt-4"
        >
          Open Multi-Processing
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-3xl text-secondary mt-8 uppercase tracking-widest"
        >
          Shared-Memory Parallel Programming API
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
          className="flex space-x-8 mt-16"
        >
          <div className="glass-strong border-2 border-cyan-500 bg-cyan-900/30 px-8 py-4 rounded-xl text-3xl font-bold text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            C
          </div>
          <div className="glass px-8 py-4 rounded-xl text-3xl font-bold text-slate-400 border border-slate-600">
            C++
          </div>
          <div className="glass px-8 py-4 rounded-xl text-3xl font-bold text-slate-400 border border-slate-600">
            Fortran
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default {
  section: 'OPENMP',
  title: 'OPENMP',
  speakerNotes: 'OpenMP stands for Open Multi-Processing. It\'s a standard API for shared-memory parallel programming.',
  component: Slide17
};
