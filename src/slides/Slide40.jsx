import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'PARALLEL FOR',
  title: 'WORK SHARING',
  speakerNotes: 'This is called work sharing. OpenMP handles the distribution automatically.',
  component: function Slide40() {
    return (
      <div className="slide">
        <div className="slide-label">40 / PARALLEL FOR</div>
        <motion.h1 
          className="text-7xl font-bold text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          WORK SHARING
        </motion.h1>
        
        <div className="flex flex-col w-full max-w-5xl items-center gap-12">
          
          <div className="relative w-full h-40 flex items-center justify-center">
            {/* Full block */}
            <motion.div 
              className="absolute w-3/4 h-16 bg-slate-700 rounded-lg flex items-center justify-center text-3xl font-bold text-slate-300"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              FOR LOOP ITERATIONS (0-19)
            </motion.div>
            
            {/* Split blocks */}
            <div className="absolute w-3/4 flex justify-between gap-4">
              {[
                { color: 'bg-red-500', shadow: 'shadow-[0_0_15px_rgba(239,68,68,0.6)]' },
                { color: 'bg-blue-500', shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.6)]' },
                { color: 'bg-green-500', shadow: 'shadow-[0_0_15px_rgba(16,185,129,0.6)]' },
                { color: 'bg-amber-500', shadow: 'shadow-[0_0_15px_rgba(245,158,11,0.6)]' }
              ].map((b, i) => (
                <motion.div 
                  key={i}
                  className={`flex-1 h-16 rounded-lg ${b.color} ${b.shadow}`}
                  initial={{ opacity: 0, scale: 0.8, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 40 }}
                  transition={{ delay: 1.5 + (i * 0.1), duration: 0.5 }}
                />
              ))}
            </div>
            
            {/* Threads below */}
            <div className="absolute w-3/4 flex justify-between gap-4 top-40 mt-8">
              {[0, 1, 2, 3].map(i => (
                <motion.div 
                  key={i}
                  className="flex-1 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 + i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-white font-bold">
                    T{i}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="mt-24 glass-strong p-8 max-w-3xl text-center border-l-4 border-cyan-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
          >
            <p className="text-3xl text-white leading-relaxed">
              OpenMP handles the distribution of loop iterations automatically.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
};
