import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'PRACTICAL LAB',
  title: 'Lab 2: Parallel Loop',
  speakerNotes: 'Use #pragma omp parallel for to parallelize a loop.',
  component: function Slide52() {
    return (
      <div className="slide-left">
        <div className="slide-label">52 / PRACTICAL LAB</div>
        
        <div className="flex flex-col h-full w-full">
          <motion.h1 
            className="text-6xl font-bold text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            LAB 2: PARALLEL LOOP
          </motion.h1>

          <div className="flex gap-12 h-full">
            <motion.div 
              className="flex-1 glass p-10 rounded-3xl flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-cyan-400 mb-6">Task</h2>
              <p className="text-3xl text-slate-300 leading-relaxed mb-8">
                Process numbers <span className="text-white font-mono bg-slate-800 px-2 rounded">1 → 20</span> using <span className="text-cyan-300 font-mono">#pragma omp parallel for</span>.
              </p>
              <p className="text-3xl text-slate-300 leading-relaxed">
                Each thread should print its ID and the number it processed.
              </p>
            </motion.div>

            <motion.div 
              className="flex-1 bg-navy-900 border border-slate-700 rounded-3xl p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-2xl text-slate-400 mb-6 font-mono border-b border-slate-700 pb-4">Expected Output Format:</h3>
              <div className="font-mono text-2xl space-y-3">
                <motion.div className="text-cyan-300" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}>Thread 0 → Number 1</motion.div>
                <motion.div className="text-cyan-300" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.7}}>Thread 0 → Number 2</motion.div>
                <motion.div className="text-green-400" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.9}}>Thread 2 → Number 11</motion.div>
                <motion.div className="text-amber-400" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.1}}>Thread 1 → Number 6</motion.div>
                <motion.div className="text-slate-500" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.3}}>...</motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
};
