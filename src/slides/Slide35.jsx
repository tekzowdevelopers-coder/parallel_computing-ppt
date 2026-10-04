import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'THREAD CONTROL',
  title: 'ENVIRONMENT VARIABLE',
  speakerNotes: 'You can also set thread count via an environment variable.',
  component: function Slide35() {
    return (
      <div className="slide-left">
        <div className="slide-label">35 / THREAD CONTROL</div>
        <motion.h1 
          className="text-6xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ENVIRONMENT VARIABLE
        </motion.h1>
        
        <div className="flex flex-col gap-12 w-full max-w-5xl">
          <motion.div 
            className="w-full bg-black rounded-xl border border-slate-700 shadow-2xl p-8 font-mono text-3xl leading-loose"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-2 mb-6">
              <div className="w-4 h-4 rounded-full bg-slate-700"></div>
              <div className="w-4 h-4 rounded-full bg-slate-700"></div>
              <div className="w-4 h-4 rounded-full bg-slate-700"></div>
            </div>
            <div className="text-slate-300">
              <span className="text-cyan-400">$</span> export <span className="text-green-400 font-bold">OMP_NUM_THREADS</span>=<span className="text-amber-400">4</span>
            </div>
            <div className="text-slate-300 mt-4">
              <span className="text-cyan-400">$</span> ./hello
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-strong p-10 border-l-4 border-amber-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="text-3xl text-white leading-relaxed">
              Environment variables can configure OpenMP <span className="text-amber-400 font-bold">without changing</span> the source code.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
};
