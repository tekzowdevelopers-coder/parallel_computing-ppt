import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'PARALLEL FOR',
  title: '20 ORDERS',
  speakerNotes: 'Let\'s solve a real problem. 20 tasks, one worker. How do we parallelize a loop?',
  component: function Slide37() {
    return (
      <div className="slide">
        <div className="slide-label">37 / PARALLEL FOR</div>
        <motion.h1 
          className="text-8xl font-bold text-amber-500 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)] mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          20 ORDERS
        </motion.h1>
        
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mb-12">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div 
                key={i}
                className="w-12 h-12 bg-slate-800 rounded-md border border-slate-600 flex items-center justify-center text-white font-mono text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.05) }}
              >
                {i}
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <div className="text-3xl text-slate-400 mb-6">ONE CHEF</div>
            <div className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center text-5xl border-4 border-slate-500">
              👨‍🍳
            </div>
            
            <motion.div 
              className="mt-12 glass p-6 border-l-4 border-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              <p className="text-2xl text-white">How do we parallelize a loop efficiently?</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }
};
