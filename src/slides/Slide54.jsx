import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'PRACTICAL LAB',
  title: 'Lab 4: Array Processing',
  speakerNotes: 'This is a classic embarrassingly parallel problem. Perfect for OpenMP.',
  component: function Slide54() {
    return (
      <div className="slide-left">
        <div className="slide-label">54 / PRACTICAL LAB</div>
        
        <div className="flex flex-col h-full w-full justify-center space-y-12">
          <motion.h1 
            className="text-6xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            LAB 4: ARRAY PROCESSING
          </motion.h1>

          <motion.div 
            className="glass p-10 rounded-3xl max-w-4xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ul className="space-y-8 text-3xl text-slate-200">
              <li className="flex items-center space-x-4">
                <span className="w-4 h-4 rounded-full bg-cyan-500"></span>
                <span>Create <strong className="text-white">1,000,000</strong> elements</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="w-4 h-4 rounded-full bg-cyan-500"></span>
                <span>Perform operation:</span>
              </li>
              <div className="pl-8 pt-2">
                <div className="font-mono text-3xl bg-navy-900 border border-slate-700 p-6 rounded-xl text-cyan-300 inline-block">
                  array[i] = array[i] * 2;
                </div>
              </div>
              <li className="flex items-center space-x-4">
                <span className="w-4 h-4 rounded-full bg-green-500"></span>
                <span className="text-green-400 font-bold">Compare Sequential VS Parallel</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    );
  }
};
