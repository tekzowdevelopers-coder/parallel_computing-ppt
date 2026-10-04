import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FORK-JOIN',
  title: 'PARALLEL WORK',
  speakerNotes: 'During the parallel region, all threads work simultaneously on their assigned tasks.',
  component: function Slide22() {
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
      }
    };
    
    const item = {
      hidden: { opacity: 0, scale: 0.8, y: 20 },
      show: { opacity: 1, scale: 1, y: 0 }
    };

    return (
      <div className="slide">
        <div className="slide-label">22 / FORK-JOIN</div>
        <motion.h1 
          className="text-7xl font-bold text-white mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          PARALLEL WORK
        </motion.h1>
        
        <div className="flex flex-col w-full max-w-5xl gap-16">
          <motion.div 
            className="grid grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[0, 1, 2, 3].map(i => (
              <motion.div key={i} variants={item} className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-green-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center justify-center text-2xl font-bold text-white">
                  T{i}
                </div>
                
                <div className="flex flex-col gap-2 w-full">
                  {[1, 2, 3].map(task => (
                    <motion.div 
                      key={task}
                      className="h-12 bg-slate-800 rounded border border-slate-700 flex items-center justify-center text-cyan-400 font-mono"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + (i * 0.1) + (task * 0.2) }}
                    >
                      Task {i}-{task}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="glass-strong p-8 rounded-2xl flex justify-around items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            <div className="text-center">
              <span className="text-4xl font-bold text-green-400">CHEFS</span>
              <div className="text-2xl text-slate-400 mt-2">↓</div>
              <span className="text-4xl font-bold text-white">THREADS</span>
            </div>
            
            <div className="h-16 w-px bg-slate-700"></div>
            
            <div className="text-center">
              <span className="text-4xl font-bold text-amber-400">ORDERS</span>
              <div className="text-2xl text-slate-400 mt-2">↓</div>
              <span className="text-4xl font-bold text-white">TASKS</span>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
};
