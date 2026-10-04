import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FIRST PROGRAM',
  title: 'INCLUDE OPENMP',
  speakerNotes: 'Include omp.h to access OpenMP functions.',
  component: function Slide25() {
    return (
      <div className="slide-left">
        <div className="slide-label">25 / FIRST PROGRAM</div>
        <motion.h1 
          className="text-6xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          INCLUDE OPENMP
        </motion.h1>
        
        <div className="flex flex-row gap-12 w-full max-w-6xl items-center">
          <motion.div 
            className="flex-1 glass p-8 text-3xl font-mono leading-loose"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div><span className="text-pink-400">#include</span> <span className="text-orange-300">&lt;stdio.h&gt;</span></div>
            <motion.div 
              className="bg-slate-800/80 -mx-4 px-4 py-2 rounded border-l-4 border-cyan-400 my-2"
              initial={{ backgroundColor: "rgba(30,41,59,0)" }}
              animate={{ backgroundColor: "rgba(30,41,59,0.8)" }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="text-pink-400">#include</span> <span className="text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">&lt;omp.h&gt;</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 glass-strong p-10 border-l-4 border-cyan-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <h3 className="text-4xl text-cyan-400 font-bold mb-4">OpenMP Header</h3>
            <p className="text-2xl text-slate-300 leading-relaxed">
              Provides access to OpenMP runtime library routines and environment variables.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
};
