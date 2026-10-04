import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FIRST PROGRAM',
  title: 'WAIT...',
  speakerNotes: 'The output order is not 0,1,2,3. Why?',
  component: function Slide31() {
    return (
      <div className="slide">
        <div className="slide-label">31 / FIRST PROGRAM</div>
        
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              className="text-8xl font-mono text-slate-300 font-bold"
              initial={{ x: -200, y: -100, opacity: 0, rotate: -15 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ position: 'absolute' }}
            >
              0
            </motion.div>
            <motion.div 
              className="text-8xl font-mono text-slate-300 font-bold"
              initial={{ x: 150, y: -50, opacity: 0, rotate: 20 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ position: 'absolute' }}
            >
              2
            </motion.div>
            <motion.div 
              className="text-8xl font-mono text-slate-300 font-bold"
              initial={{ x: -100, y: 150, opacity: 0, rotate: 10 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              style={{ position: 'absolute' }}
            >
              1
            </motion.div>
            <motion.div 
              className="text-8xl font-mono text-slate-300 font-bold"
              initial={{ x: 200, y: 100, opacity: 0, rotate: -5 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              style={{ position: 'absolute' }}
            >
              3
            </motion.div>
          </div>
          
          <motion.div
            className="z-10 bg-slate-900/80 backdrop-blur-md p-12 rounded-3xl border border-red-500/50 shadow-[0_0_100px_rgba(239,68,68,0.2)]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 0.8, type: 'spring' }}
          >
            <h1 className="text-7xl font-bold text-red-500 text-center drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">
              WHY IS THE ORDER<br/>RANDOM?
            </h1>
          </motion.div>
        </div>
      </div>
    );
  }
};
