import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FIRST PROGRAM',
  title: 'THE MAGIC LINE',
  speakerNotes: 'This single line tells the compiler to create threads and run the following block in parallel.',
  component: function Slide26() {
    return (
      <div className="slide">
        <div className="slide-label">26 / FIRST PROGRAM</div>
        <motion.h1 
          className="text-6xl font-bold text-white mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          THE MAGIC LINE
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-5xl py-12 px-16 bg-slate-900 rounded-2xl border border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.3)] mb-16"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-7xl font-mono text-center font-bold tracking-tight">
            <span className="text-pink-500">#pragma</span>{' '}
            <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">omp parallel</span>
          </div>
        </motion.div>
        
        <div className="flex gap-12 w-full max-w-5xl">
          <motion.div 
            className="flex-1 glass p-8 flex items-center justify-center border-t-4 border-pink-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="text-3xl text-center font-semibold text-white">
              START A PARALLEL REGION
            </p>
          </motion.div>
          
          <motion.div 
            className="flex-1 glass-strong p-8 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-3xl text-center text-amber-400 italic">
              "Everyone, start working!"
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
};
