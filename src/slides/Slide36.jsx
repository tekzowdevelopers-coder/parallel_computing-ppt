import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'THREAD CONTROL',
  title: 'RUNTIME THREAD COUNT',
  speakerNotes: 'Use omp_get_num_threads to query how many threads are in the current team.',
  component: function Slide36() {
    return (
      <div className="slide">
        <div className="slide-label">36 / THREAD CONTROL</div>
        <motion.h1 
          className="text-6xl font-bold text-white mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          HOW MANY THREADS RUNNING?
        </motion.h1>
        
        <motion.div 
          className="text-6xl font-mono text-cyan-400 font-bold mb-16 bg-slate-900/50 p-8 rounded-2xl border border-cyan-500/30"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          omp_get_num_threads()
        </motion.div>
        
        <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
          {[0, 1, 2, 3].map(i => (
            <motion.div 
              key={i}
              className="glass p-6 text-2xl font-mono text-center flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.2 }}
            >
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                T{i}
              </div>
              <span className="text-slate-300">"Thread {i} of <span className="text-cyan-400 font-bold">4</span>"</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
};
