import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FINAL CHALLENGE',
  title: 'AUDIENCE QUESTION: DOES DOUBLING PROCESSES HALVE TIME?',
  speakerNotes: 'Always remember: distributed computing has physical network and communication overheads.',
  component: function Slide87() {
    return (
      <div className="slide">
        <div className="slide-label">87 / FINAL CHALLENGE</div>
        
        <div className="flex flex-col items-center justify-center h-full">
          <motion.h1 
            className="text-6xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Does doubling processes halve time?
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: 'spring', damping: 12 }}
            className="mb-16"
          >
            <h2 className="text-[150px] font-black text-red-500 leading-none">NO.</h2>
          </motion.div>

          <motion.div 
            className="glass-strong p-8 rounded-2xl w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <h3 className="text-3xl font-bold text-amber-400 mb-6 text-center">The Overhead Penalties:</h3>
            <div className="grid grid-cols-2 gap-8 text-2xl text-slate-200">
              <div className="flex items-center space-x-4 bg-slate-800/50 p-4 rounded-xl">
                <span className="text-red-400 font-bold">1</span>
                <span>Network Latency</span>
              </div>
              <div className="flex items-center space-x-4 bg-slate-800/50 p-4 rounded-xl">
                <span className="text-red-400 font-bold">2</span>
                <span>Synchronization Waits</span>
              </div>
              <div className="flex items-center space-x-4 bg-slate-800/50 p-4 rounded-xl">
                <span className="text-red-400 font-bold">3</span>
                <span>Load Imbalance</span>
              </div>
              <div className="flex items-center space-x-4 bg-slate-800/50 p-4 rounded-xl">
                <span className="text-red-400 font-bold">4</span>
                <span>Serial Sections</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
};
