import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FINAL CHALLENGE',
  title: 'FINAL CHALLENGE: 10,000,000 NUMBERS',
  speakerNotes: 'Your final workshop challenge: run benchmarks across different process counts and analyze the scaling curve.',
  component: function Slide85() {
    return (
      <div className="slide">
        <div className="slide-label">85 / FINAL CHALLENGE</div>
        <motion.h1 
          className="text-7xl font-bold text-center text-amber-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          FINAL CHALLENGE
        </motion.h1>
        
        <motion.div 
          className="glass-strong p-16 rounded-3xl max-w-5xl mx-auto flex flex-col items-center border border-amber-500/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-5xl font-bold text-white mb-8 text-center">
            Sum 10,000,000 Numbers
          </h2>
          <p className="text-3xl text-slate-300 text-center mb-12">
            Calculate the sum across 1, 2, 4, 8 processes
          </p>
          
          <div className="w-full bg-slate-800/80 rounded-2xl p-8 mb-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">Deliverables:</h3>
            <ul className="text-2xl text-slate-200 space-y-4">
              <li className="flex items-center"><span className="mr-4 text-amber-400">▶</span> Record Execution Time</li>
              <li className="flex items-center"><span className="mr-4 text-amber-400">▶</span> Calculate Speedup (T1 / Tp)</li>
              <li className="flex items-center"><span className="mr-4 text-amber-400">▶</span> Calculate Parallel Efficiency (Speedup / p)</li>
            </ul>
          </div>
        </motion.div>
      </div>
    );
  }
};
