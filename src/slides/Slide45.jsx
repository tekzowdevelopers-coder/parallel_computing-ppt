import React from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

export default {
  section: 'PERFORMANCE',
  title: 'Measure, Don\'t Guess',
  speakerNotes: 'Always measure. Never guess. omp_get_wtime gives wall clock time.',
  component: function Slide45() {
    return (
      <div className="slide-left">
        <div className="slide-label">45 / PERFORMANCE</div>
        
        <div className="flex flex-col h-full w-full justify-center">
          <motion.h1 
            className="text-7xl font-bold mb-16 text-cyan-400"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            MEASURE, DON'T GUESS
          </motion.h1>

          <div className="flex w-full items-center justify-between gap-12">
            <motion.div 
              className="flex-1 text-4xl font-mono bg-navy-900 border border-slate-700 p-8 rounded-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-cyan-300">double <span className="text-white">start</span> = <span className="text-green-400">omp_get_wtime()</span>;</div>
              <div className="text-slate-500 my-4 ml-8">/* parallel work */</div>
              <div className="text-cyan-300">double <span className="text-white">end</span> = <span className="text-green-400">omp_get_wtime()</span>;</div>
            </motion.div>

            <motion.div 
              className="flex-1 flex flex-col items-center justify-center glass p-16 rounded-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <Timer size={120} className="text-amber-400 mb-8" />
              <div className="text-4xl font-bold text-white text-center">
                Time = <span className="text-amber-400">end - start</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
};
