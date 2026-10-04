import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FIRST PROGRAM',
  title: 'THREAD ID',
  speakerNotes: 'omp_get_thread_num returns the ID of the calling thread. Thread 0 is always the main thread.',
  component: function Slide29() {
    return (
      <div className="slide">
        <div className="slide-label">29 / FIRST PROGRAM</div>
        <motion.h1 
          className="text-6xl font-bold text-white mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          THREAD ID
        </motion.h1>
        
        <motion.div 
          className="text-6xl font-mono text-cyan-400 font-bold mb-20 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          omp_get_thread_num()
        </motion.div>
        
        <div className="flex gap-8 w-full max-w-5xl justify-center mb-16">
          {[0, 1, 2, 3].map(i => (
            <motion.div 
              key={i}
              className={`flex-1 glass p-6 flex flex-col items-center rounded-xl border-t-4 ${i === 0 ? 'border-amber-400 bg-amber-500/10' : 'border-slate-500'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <div className="text-2xl text-slate-400 font-bold mb-4">THREAD</div>
              <div className={`text-7xl font-bold ${i === 0 ? 'text-amber-400' : 'text-white'}`}>{i}</div>
              {i === 0 && <div className="mt-4 text-amber-400 font-semibold text-lg">MAIN</div>}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="glass-strong p-6 px-12 max-w-3xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p className="text-3xl text-white">Every OpenMP thread has a unique ID.</p>
        </motion.div>
      </div>
    );
  }
};
