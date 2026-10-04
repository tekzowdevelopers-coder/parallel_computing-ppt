import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'PRACTICAL LAB',
  title: 'Lab 3: Sum 1 → 1,000,000',
  speakerNotes: 'Build both versions and compare. Which is faster and by how much?',
  component: function Slide53() {
    return (
      <div className="slide">
        <div className="slide-label">53 / PRACTICAL LAB</div>
        
        <div className="flex flex-col h-full w-full items-center justify-center space-y-12">
          <motion.h1 
            className="text-6xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            LAB 3: SUM 1 → 1,000,000
          </motion.h1>

          <div className="flex w-full max-w-6xl gap-8">
            <motion.div 
              className="flex-1 glass p-8 rounded-3xl border-t-4 border-slate-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-300 mb-6 text-center">Version A</h2>
              <div className="text-4xl font-bold text-white text-center py-12 bg-slate-800/50 rounded-xl">
                SEQUENTIAL
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: 'spring' }}
            >
              <div className="text-6xl font-bold text-amber-500">VS</div>
            </motion.div>

            <motion.div 
              className="flex-1 glass p-8 rounded-3xl border-t-4 border-cyan-400"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-cyan-300 mb-6 text-center">Version B</h2>
              <div className="text-4xl font-bold text-white text-center py-12 bg-cyan-900/30 rounded-xl">
                PARALLEL (Reduction)
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-4xl font-bold text-green-400 mt-12 bg-green-900/20 px-8 py-4 rounded-full border border-green-500/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            Compare Execution Times
          </motion.div>
        </div>
      </div>
    );
  }
};
