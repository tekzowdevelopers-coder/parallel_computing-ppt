import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'THREAD CONTROL',
  title: 'SET THREAD COUNT',
  speakerNotes: 'Call this function before the parallel region to set the number of threads.',
  component: function Slide34() {
    return (
      <div className="slide">
        <div className="slide-label">34 / THREAD CONTROL</div>
        <motion.h1 
          className="text-6xl font-bold text-white mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          SET THREAD COUNT
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-4xl py-12 px-16 bg-slate-900 rounded-2xl border border-green-500/50 shadow-[0_0_40px_rgba(16,185,129,0.2)] mb-16 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl font-mono font-bold tracking-tight">
            <span className="text-green-400">omp_set_num_threads</span>
            <span className="text-white">(</span>
            <span className="text-amber-400">4</span>
            <span className="text-white">);</span>
          </div>
        </motion.div>
        
        <div className="flex flex-col items-center">
          <motion.div 
            className="text-2xl text-slate-400 font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            OPENMP RUNTIME
          </motion.div>
          
          <motion.div 
            className="h-16 w-1 bg-gradient-to-b from-slate-500 to-cyan-500 mb-4 rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            style={{ transformOrigin: 'top' }}
            transition={{ delay: 1.5, duration: 0.5 }}
          />
          
          <motion.div 
            className="glass-strong px-12 py-6 rounded-full text-4xl font-bold text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, type: 'spring' }}
          >
            4 THREADS
          </motion.div>
        </div>
      </div>
    );
  }
};
