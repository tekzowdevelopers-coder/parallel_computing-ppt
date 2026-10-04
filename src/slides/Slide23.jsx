import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FORK-JOIN',
  title: 'JOIN',
  speakerNotes: 'Join means all threads finish and return control to the main thread.',
  component: function Slide23() {
    return (
      <div className="slide">
        <div className="slide-label">23 / FORK-JOIN</div>
        <motion.h1 
          className="text-8xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          JOIN
        </motion.h1>
        
        <div className="flex flex-col items-center gap-8 w-full max-w-4xl mt-8">
          <div className="relative w-full h-80 flex justify-center items-end">
            {/* Thread starting points */}
            <div className="absolute top-0 w-full flex justify-between px-16">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-green-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] flex items-center justify-center text-white font-bold"
                  >
                    T{i}
                  </motion.div>
                  
                  {/* Connecting lines */}
                  <motion.svg className="absolute top-16 w-full h-40 overflow-visible pointer-events-none" style={{ left: '50%' }}>
                    <motion.path
                      d={`M 0 0 Q ${-((i - 1.5) * 75)} 60 ${-((i - 1.5) * 150)} 120`}
                      fill="transparent"
                      stroke="#06b6d4"
                      strokeWidth="4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                    />
                  </motion.svg>
                </div>
              ))}
            </div>
            
            {/* Main Thread resuming */}
            <motion.div 
              className="absolute bottom-0 w-24 h-24 rounded-full bg-cyan-500 shadow-[0_0_30px_rgba(6,182,212,1)] flex items-center justify-center z-10 text-white font-bold text-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
            >
              MAIN
            </motion.div>
            
            {/* Join barrier representation */}
            <motion.div 
              className="absolute bottom-28 w-full max-w-2xl h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)]"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            />
          </div>
          
          <motion.div 
            className="glass p-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <p className="text-4xl text-white font-light tracking-wide text-center">
              All threads synchronize and terminate.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
};
