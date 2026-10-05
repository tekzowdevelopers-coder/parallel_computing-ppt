import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'MPI PERFORMANCE',
  title: 'SPEEDUP & EFFICIENCY',
  speakerNotes: 'Speedup tells you how much faster you ran. Efficiency tells you how well you utilized the hardware.',
  component: function Slide67() {
    return (
      <div className="slide">
        <div className="slide-label">67 / MPI PERFORMANCE</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          SPEEDUP & EFFICIENCY
        </motion.h1>
        
        <div className="flex w-full max-w-5xl space-x-8 mb-12">
          <motion.div 
            className="flex-1 glass p-8 rounded-xl flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl text-cyan mb-6">Speedup (S)</h2>
            <div className="text-5xl font-mono text-white">
              S = <span className="border-b-2 border-white pb-1">T₁</span><br/>
              <span className="ml-12 pl-2">Tₚ</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 glass p-8 rounded-xl flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl text-green mb-6">Efficiency (E)</h2>
            <div className="text-5xl font-mono text-white">
              E = <span className="border-b-2 border-white pb-1">S</span> × 100%<br/>
              <span className="ml-12 pl-2">P</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-2xl text-secondary text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Example: T₁ = 100s, T₄ = 30s → <span className="text-cyanGlow font-bold">S = 3.33×</span>, <span className="text-greenGlow font-bold">E = 83.3%</span>
        </motion.div>
      </div>
    );
  }
};
