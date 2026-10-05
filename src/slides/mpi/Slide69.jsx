import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'MPI PERFORMANCE',
  title: 'AMDAHL\'S LAW',
  speakerNotes: 'Amdahl\'s law applies ruthlessly to distributed computing.',
  component: function Slide69() {
    return (
      <div className="slide">
        <div className="slide-label">69 / MPI PERFORMANCE</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          AMDAHL'S LAW
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-4xl glass p-12 rounded-xl text-center flex flex-col items-center justify-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-5xl font-mono text-cyanGlow mb-8">
            S(N) = <span className="border-b-2 border-cyanGlow pb-2">1</span><br/>
            <span className="ml-16 pl-4 text-3xl">(1 - P) + P/N</span>
          </div>
          
          <p className="text-2xl text-white">
            P = Parallel fraction, N = Number of processes
          </p>
        </motion.div>
        
        <motion.div 
          className="text-3xl text-red text-center max-w-4xl bg-red/10 p-6 border border-red rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          If 10% of code is serial, maximum speedup is capped at <strong>10×</strong> even with 1,000,000 nodes!
        </motion.div>
      </div>
    );
  }
};
