import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'DISTRIBUTED COMPUTING',
  title: 'SHARED VS DISTRIBUTED MEMORY',
  speakerNotes: 'This is the core conceptual divide in parallel computer architecture.',
  component: function Slide59() {
    return (
      <div className="slide">
        <div className="slide-label">59 / DISTRIBUTED COMPUTING</div>
        <motion.h1 
          className="text-6xl font-bold mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          SHARED VS DISTRIBUTED
        </motion.h1>
        
        <div className="flex w-full max-w-6xl space-x-8">
          <motion.div 
            className="flex-1 glass p-8 rounded-xl flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl text-cyan mb-4 text-center">Shared Memory<br/><span className="text-2xl text-secondary">(OpenMP)</span></h2>
            <div className="mt-8 p-6 bg-navy-900 border border-muted rounded-xl w-full text-center">
              <div className="text-xl text-white mb-4">One RAM Address Space</div>
              <div className="flex justify-center space-x-4">
                <div className="p-4 bg-cyan/20 rounded">T0</div>
                <div className="p-4 bg-cyan/20 rounded">T1</div>
                <div className="p-4 bg-cyan/20 rounded">T2</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 glass-strong p-8 rounded-xl flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-4xl text-green mb-4 text-center">Distributed Memory<br/><span className="text-2xl text-secondary">(MPI)</span></h2>
            <div className="mt-8 flex justify-between items-center w-full">
              <div className="p-4 bg-navy-900 border border-muted rounded text-center">
                <div className="text-white text-sm mb-2">RAM A</div>
                <div className="p-2 bg-green/20 rounded">P0</div>
              </div>
              <div className="h-1 bg-green/50 flex-1 mx-2" />
              <div className="p-4 bg-navy-900 border border-muted rounded text-center">
                <div className="text-white text-sm mb-2">RAM B</div>
                <div className="p-2 bg-green/20 rounded">P1</div>
              </div>
            </div>
            <p className="mt-6 text-xl text-secondary text-center">Separate RAM spaces connected via network</p>
          </motion.div>
        </div>
      </div>
    );
  }
};
