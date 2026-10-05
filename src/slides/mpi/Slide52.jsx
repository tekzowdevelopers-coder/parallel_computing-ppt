import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'COLLECTIVE COMMUNICATION',
  title: 'MPI_BARRIER',
  speakerNotes: 'A barrier is a global synchronization wall. Be careful: overusing barriers destroys parallel speedup.',
  component: function Slide52() {
    return (
      <div className="slide">
        <div className="slide-label">52 / COLLECTIVE COMMUNICATION</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MPI_BARRIER
        </motion.h1>
        
        <motion.div 
          className="relative w-full max-w-4xl h-64 bg-navy-900 rounded-xl border border-muted p-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute right-32 top-0 bottom-0 w-2 bg-cyanGlow shadow-[0_0_20px_#22d3ee] z-10" />
          
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="flex items-center mb-6 last:mb-0 relative z-0">
              <div className="w-16 font-mono text-secondary">R{i}</div>
              <motion.div 
                className="h-8 bg-cyan rounded-r"
                initial={{ width: 0 }}
                animate={{ width: ['0%', '75%'] }}
                transition={{ duration: 1.5 + i * 0.5, ease: "linear" }}
              />
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-3xl text-secondary text-center max-w-3xl italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          "No one serves dessert until every kitchen has finished main courses."
        </motion.div>
      </div>
    );
  }
};
