import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'MPI PERFORMANCE',
  title: 'IDEAL VS REAL SPEEDUP',
  speakerNotes: 'Real speedup diverges from linear due to network latency, synchronization, and serial code.',
  component: function Slide68() {
    return (
      <div className="slide">
        <div className="slide-label">68 / MPI PERFORMANCE</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          IDEAL VS REAL SPEEDUP
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-4xl h-80 relative border-l-2 border-b-2 border-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Ideal Speedup Line */}
          <motion.div 
            className="absolute left-0 bottom-0 w-[141%] h-0.5 bg-green origin-bottom-left"
            style={{ rotate: '-45deg' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <div className="absolute top-4 right-10 text-green font-bold text-xl rotate-[-45deg]">Ideal (Linear)</div>
          
          {/* Real Speedup Curve */}
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              d="M 0,100 Q 50,50 100,70" 
              fill="none" 
              stroke="#06b6d4" 
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
          </svg>
          <div className="absolute right-4 bottom-1/4 text-cyan font-bold text-xl">Real Speedup</div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-secondary">Number of Processes</div>
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 -rotate-90 text-secondary">Speedup</div>
        </motion.div>
      </div>
    );
  }
};
