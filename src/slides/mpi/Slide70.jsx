import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'MPI PERFORMANCE',
  title: 'STRONG VS WEAK SCALING',
  speakerNotes: 'In strong scaling we keep the problem fixed. In weak scaling we grow the problem with the machine.',
  component: function Slide70() {
    return (
      <div className="slide">
        <div className="slide-label">70 / MPI PERFORMANCE</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          STRONG VS WEAK SCALING
        </motion.h1>
        
        <div className="flex w-full max-w-6xl space-x-8">
          <motion.div 
            className="flex-1 glass p-8 rounded-xl border border-cyan"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl text-cyan mb-6 text-center">Strong Scaling</h2>
            <ul className="text-2xl text-white space-y-4 list-disc pl-6">
              <li>Fixed problem size</li>
              <li>Add more processes</li>
              <li className="text-cyanGlow font-bold">Goal: Finish faster</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="flex-1 glass p-8 rounded-xl border border-green"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-4xl text-green mb-6 text-center">Weak Scaling</h2>
            <ul className="text-2xl text-white space-y-4 list-disc pl-6">
              <li>Problem size grows proportionally</li>
              <li>Add more processes</li>
              <li className="text-greenGlow font-bold">Goal: Solve larger problems in constant time</li>
            </ul>
          </motion.div>
        </div>
      </div>
    );
  }
};
