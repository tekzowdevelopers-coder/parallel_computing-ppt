import React from 'react';
import { motion } from 'framer-motion';

const Slide11 = () => {
  return (
    <div className="slide">
      <div className="slide-label">02 / CPU</div>
      <div className="flex flex-col items-center justify-center h-full w-full py-12">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-16 tracking-wider"
        >
          FOUR CORES
        </motion.h1>

        <div className="flex justify-between w-full max-w-6xl space-x-6 mb-20">
          {[0, 1, 2, 3].map((core) => (
            <div key={core} className="flex flex-col items-center flex-1">
              
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: [0, 80], opacity: [1, 1] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                className="bg-cyan-500/20 border-2 border-cyan-400 text-cyan-100 py-3 px-6 rounded-lg text-xl font-bold mb-8 z-10 w-full text-center"
              >
                TASK {String.fromCharCode(65 + core)}
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + (core * 0.1), duration: 0.5 }}
                className="w-full aspect-square border-4 border-cyan-500/50 bg-slate-800 rounded-2xl flex items-end justify-center pb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)] relative overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ delay: 2, duration: 2.5, repeat: Infinity, repeatDelay: 0 }}
                  className="absolute inset-0 bg-cyan-400/10"
                />
                <span className="text-3xl font-mono font-bold text-white">CORE {core}</span>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mt-auto"
        >
          MULTIPLE CORES <span className="text-white">→</span> MULTIPLE WORKERS
        </motion.div>
      </div>
    </div>
  );
};

export default {
  section: 'CPU',
  title: 'FOUR CORES',
  speakerNotes: 'With four cores, four tasks can run at the same time. Each core is an independent worker.',
  component: Slide11
};
