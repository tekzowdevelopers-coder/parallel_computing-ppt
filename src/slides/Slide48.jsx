import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: "AMDAHL'S LAW",
  title: 'The Limit',
  speakerNotes: 'No matter how many threads you add, the serial portion of your program limits the maximum speedup.',
  component: function Slide48() {
    return (
      <div className="slide">
        <div className="slide-label">48 / AMDAHL'S LAW</div>
        
        <div className="flex flex-col h-full w-full justify-center items-center space-y-16">
          <motion.h1 
            className="text-7xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            THE LIMIT
          </motion.h1>

          <div className="w-full max-w-5xl h-64 flex relative">
            <motion.div 
              className="h-full bg-cyan-600/80 flex flex-col justify-center items-center border-y-4 border-cyan-400 border-l-4 rounded-l-2xl"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "80%", opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="text-3xl font-bold text-white mb-2">PARALLEL WORK</div>
              <div className="flex space-x-2 w-full px-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-4 bg-cyan-300 flex-1 rounded-full opacity-50" />
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="h-full bg-amber-600/80 flex flex-col justify-center items-center border-y-4 border-r-4 border-amber-400 rounded-r-2xl"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "20%", opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="text-3xl font-bold text-white mb-2 rotate-90 whitespace-nowrap">SERIAL</div>
              <div className="h-4 w-4 bg-amber-300 rounded-full opacity-50" />
            </motion.div>
          </div>

          <motion.div
            className="text-5xl font-bold text-amber-400 bg-amber-900/30 p-8 rounded-2xl border border-amber-500/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5 }}
          >
            THE SERIAL PART LIMITS SPEEDUP
          </motion.div>
        </div>
      </div>
    );
  }
};
