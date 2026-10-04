import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Store } from 'lucide-react';

const Slide15 = () => {
  return (
    <div className="slide">
      <div className="slide-label">03 / PROCESS & THREAD</div>
      <div className="flex flex-col items-center justify-center h-full w-full py-8">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-16 tracking-wider"
        >
          KITCHEN VERSION
        </motion.h1>

        <div className="flex flex-col items-center w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center bg-cyan-900/30 border-4 border-cyan-500 rounded-3xl p-8 w-full mb-12 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
          >
            <Store size={80} className="text-cyan-400 mb-4" />
            <h2 className="text-5xl font-bold text-white tracking-widest">RESTAURANT</h2>
          </motion.div>

          <div className="flex w-full justify-between px-12 relative mb-20">
            {/* Connecting lines */}
            <svg className="absolute top-[-48px] left-0 w-full h-[48px] -z-10" preserveAspectRatio="none">
              {[15, 38, 62, 85].map((pos, i) => (
                <motion.path
                  key={i}
                  d={`M 50% 0 C 50% 24, ${pos}% 24, ${pos}% 48`}
                  fill="none"
                  stroke="rgba(34,211,238,0.3)"
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              ))}
            </svg>

            {[1, 2, 3, 4].map((chef, i) => (
              <motion.div
                key={chef}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + (i * 0.2) }}
                className="flex flex-col items-center"
              >
                <div className="bg-slate-800 border-2 border-slate-600 rounded-full p-6 mb-4 shadow-lg">
                  <ChefHat size={48} className="text-white" />
                </div>
                <span className="text-2xl font-bold text-secondary">C{chef}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex space-x-12 w-full justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3 }}
              className="glass px-8 py-4 rounded-xl border-l-4 border-cyan-500 flex items-center space-x-4"
            >
              <Store size={32} className="text-cyan-400" />
              <span className="text-3xl text-white font-bold">= PROCESS</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.5 }}
              className="glass px-8 py-4 rounded-xl border-l-4 border-green-400 flex items-center space-x-4"
            >
              <ChefHat size={32} className="text-green-400" />
              <span className="text-3xl text-white font-bold">= THREAD</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  section: 'PROCESS & THREAD',
  title: 'KITCHEN VERSION',
  speakerNotes: 'Our restaurant is the process. The chefs are the threads. Multiple threads live inside one process.',
  component: Slide15
};
