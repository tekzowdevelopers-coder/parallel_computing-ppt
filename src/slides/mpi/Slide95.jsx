import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FINAL CHALLENGE',
  title: 'THINK DISTRIBUTED.',
  speakerNotes: 'Congratulations on completing Day 2 of the Parallel Computing Workshop. Think parallel, think distributed!',
  component: function Slide95() {
    return (
      <div className="slide">
        <div className="slide-label">95 / FINAL CHALLENGE</div>
        
        <div className="flex flex-col items-center justify-center h-full">
          <motion.h1 
            className="text-[100px] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-400 to-cyan-400 mb-12 tracking-tight text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            THINK DISTRIBUTED.
          </motion.h1>

          <motion.p 
            className="text-4xl text-slate-300 text-center max-w-4xl leading-relaxed mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Don't just ask how many cores you have. Ask how you divide the work and how much data they exchange.
          </motion.p>

          <motion.div
            className="glass-strong px-8 py-4 rounded-full border border-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <span className="text-xl font-bold tracking-widest text-slate-400">
              DAY 2 COMPLETE • ADVANCED PARALLEL COMPUTING
            </span>
          </motion.div>
        </div>
      </div>
    );
  }
};
