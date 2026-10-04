import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'WRAP-UP',
  title: 'Day 2 — MPI',
  speakerNotes: 'Tomorrow we move from shared memory to distributed memory with MPI. Same concepts, bigger scale.',
  component: function Slide60() {
    return (
      <div className="slide">
        <div className="slide-label">60 / WRAP-UP</div>
        
        <div className="flex flex-col h-full w-full justify-center items-center">
          <motion.h1 
            className="text-[10rem] font-bold text-white mb-12 tracking-tighter"
            initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, type: 'spring' }}
          >
            DAY 2
          </motion.h1>

          <div className="flex w-full max-w-6xl justify-between items-center bg-navy-900/50 p-12 rounded-3xl border border-slate-700">
            <motion.div 
              className="flex-1 flex flex-col items-center space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-4xl font-bold text-cyan-400 mb-4">TODAY</h2>
              <div className="text-2xl text-slate-300">OPENMP</div>
              <div className="text-2xl text-slate-300">THREADS</div>
              <div className="text-2xl text-slate-300">SHARED MEMORY</div>
            </motion.div>

            <motion.div 
              className="text-6xl text-slate-500 mx-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              →
            </motion.div>

            <motion.div 
              className="flex-1 flex flex-col items-center space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
            >
              <h2 className="text-4xl font-bold text-amber-500 mb-4">TOMORROW</h2>
              <div className="text-2xl text-slate-300">MPI</div>
              <div className="text-2xl text-slate-300">PROCESSES</div>
              <div className="text-2xl text-slate-300">DISTRIBUTED MEMORY</div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-500 pb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            FROM SHARED MEMORY → DISTRIBUTED MEMORY
          </motion.div>
        </div>
      </div>
    );
  }
};
