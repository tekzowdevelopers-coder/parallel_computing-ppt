import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'PERFORMANCE',
  title: 'Speedup',
  speakerNotes: 'Speedup is sequential time divided by parallel time. 2.5× means it runs 2.5 times faster.',
  component: function Slide46() {
    return (
      <div className="slide">
        <div className="slide-label">46 / PERFORMANCE</div>
        
        <div className="flex flex-col h-full w-full justify-center items-center space-y-20">
          
          <div className="w-full max-w-5xl space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-48 text-3xl text-right font-bold text-slate-400">Sequential</div>
              <motion.div 
                className="h-16 bg-slate-700 rounded-r-xl flex items-center px-6"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <span className="text-3xl font-mono text-white">10.0s</span>
              </motion.div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-48 text-3xl text-right font-bold text-cyan-400">Parallel</div>
              <motion.div 
                className="h-16 bg-cyan-600 rounded-r-xl flex items-center px-6"
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
              >
                <span className="text-3xl font-mono text-white">4.0s</span>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="flex flex-col items-center glass p-12 rounded-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <div className="text-4xl text-slate-300 font-mono mb-6">
              Speedup = <span className="text-white">10.0</span> / <span className="text-cyan-400">4.0</span>
            </div>
            <motion.div 
              className="text-8xl font-bold text-green-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 4, type: "spring", bounce: 0.6 }}
            >
              2.5×
            </motion.div>
          </motion.div>

        </div>
      </div>
    );
  }
};
