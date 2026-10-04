import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FORK-JOIN',
  title: 'FORK',
  speakerNotes: 'Fork means creating multiple threads. The main thread spawns a team of worker threads.',
  component: function Slide21() {
    return (
      <div className="slide">
        <div className="slide-label">21 / FORK-JOIN</div>
        <motion.h1 
          className="text-8xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          FORK
        </motion.h1>
        
        <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
          <div className="relative w-full h-64 flex justify-center items-start">
            {/* Manager Thread */}
            <motion.div 
              className="absolute top-0 w-20 h-20 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)] flex items-center justify-center z-10 text-white font-bold text-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              M
            </motion.div>
            
            {/* Fork lines and workers */}
            <div className="absolute top-10 w-full flex justify-between px-16">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center relative">
                  {/* Connecting lines */}
                  <motion.svg className="absolute -top-10 w-full h-32 overflow-visible pointer-events-none" style={{ left: '50%' }}>
                    <motion.path
                      d={`M ${-((i - 1.5) * 150)} 10 Q ${-((i - 1.5) * 75)} 60 0 100`}
                      fill="transparent"
                      stroke="#06b6d4"
                      strokeWidth="4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    />
                  </motion.svg>
                  
                  {/* Worker Threads */}
                  <motion.div 
                    className="mt-24 w-16 h-16 rounded-full bg-green-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] flex items-center justify-center z-10 text-white font-bold"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}
                  >
                    T{i}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="glass p-8 mt-12 max-w-2xl text-center border-l-4 border-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <p className="text-3xl text-slate-200">OpenMP creates a team of threads when entering a parallel region.</p>
          </motion.div>
        </div>
      </div>
    );
  }
};
