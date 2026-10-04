import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'RACE CONDITIONS',
  title: 'Race Condition',
  speakerNotes: 'When two threads read and write the same variable without coordination, we get a race condition.',
  component: function Slide42() {
    return (
      <div className="slide">
        <div className="slide-label">42 / RACE CONDITIONS</div>
        
        <div className="flex flex-col items-center justify-center h-full w-full space-y-12">
          <motion.div 
            className="text-6xl font-mono text-cyan-400 glass px-12 py-6 rounded-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            COUNTER = <motion.span 
              initial={{ opacity: 1 }} 
              animate={{ opacity: 0, display: "none" }} 
              transition={{ delay: 2.5 }}
            >10</motion.span>
            <motion.span 
              initial={{ opacity: 0, display: "none" }} 
              animate={{ opacity: 1, display: "inline-block" }} 
              transition={{ delay: 2.5 }}
              className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
            >11</motion.span>
          </motion.div>

          <div className="flex justify-between w-full max-w-4xl space-x-8">
            <motion.div 
              className="flex-1 glass p-8 flex flex-col items-center space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-cyan-300">THREAD 1</h3>
              <motion.div className="text-2xl font-mono text-slate-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>READ 10</motion.div>
              <motion.div className="text-2xl font-mono text-slate-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>INCREMENT (11)</motion.div>
              <motion.div className="text-2xl font-mono font-bold text-cyan-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>WRITE 11</motion.div>
            </motion.div>

            <motion.div 
              className="flex-1 glass p-8 flex flex-col items-center space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-green-400">THREAD 2</h3>
              <motion.div className="text-2xl font-mono text-slate-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>READ 10</motion.div>
              <motion.div className="text-2xl font-mono text-slate-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>INCREMENT (11)</motion.div>
              <motion.div className="text-2xl font-mono font-bold text-green-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>WRITE 11</motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, type: 'spring' }}
            className="text-7xl font-bold text-red-500 tracking-wider drop-shadow-[0_0_20px_rgba(239,68,68,0.6)] border-4 border-red-500/50 p-6 rounded-2xl bg-red-500/10"
          >
            RACE CONDITION
          </motion.div>
        </div>
      </div>
    );
  }
};
