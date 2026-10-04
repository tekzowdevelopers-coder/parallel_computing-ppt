import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FIRST PROGRAM',
  title: 'WHAT JUST HAPPENED?',
  speakerNotes: 'When the program hits the pragma, it forks into threads. Each thread executes the printf.',
  component: function Slide28() {
    return (
      <div className="slide">
        <div className="slide-label">28 / FIRST PROGRAM</div>
        <motion.h1 
          className="text-6xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          WHAT JUST HAPPENED?
        </motion.h1>
        
        <div className="flex flex-col items-center w-full max-w-5xl">
          <motion.div 
            className="w-48 py-4 bg-slate-800 rounded-lg text-center text-2xl font-bold border-2 border-slate-600 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            MAIN THREAD
          </motion.div>
          
          <motion.div 
            className="text-3xl font-mono text-cyan-400 font-bold mb-8 py-2 px-6 glass rounded"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            #pragma omp parallel
          </motion.div>
          
          <motion.div 
            className="text-2xl text-amber-500 font-bold tracking-widest mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            FORK
          </motion.div>
          
          <div className="flex justify-between w-full mt-4">
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="flex flex-col items-center">
                <motion.div 
                  className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold mb-4 z-10 relative"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + i * 0.1 }}
                >
                  T{i}
                </motion.div>
                
                <motion.div 
                  className="glass-strong p-4 rounded-xl text-center relative w-40"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3 + i * 0.2, type: 'spring' }}
                >
                  {/* Speech bubble pointer */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-800/80 rotate-45 border-l border-t border-white/20"></div>
                  <p className="text-lg font-mono text-green-300">"Hello from thread {i}"</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
