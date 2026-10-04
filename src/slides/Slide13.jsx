import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2, Play, MemoryStick } from 'lucide-react';

const Slide13 = () => {
  return (
    <div className="slide">
      <div className="slide-label">03 / PROCESS & THREAD</div>
      <div className="flex flex-col items-center justify-center h-full w-full py-12 space-y-16">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-white tracking-wider"
        >
          WHAT IS A PROCESS?
        </motion.h1>

        <div className="flex items-center justify-center space-x-12 w-full max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 bg-slate-800 border-2 border-slate-600 rounded-2xl flex items-center justify-center mb-6">
              <FileCode2 size={80} className="text-secondary" />
            </div>
            <span className="text-3xl font-mono font-bold text-white">hello.exe</span>
            <span className="text-xl text-secondary mt-2">PROGRAM (on disk)</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: 'spring' }}
            className="text-cyan-500"
          >
            <Play size={64} fill="currentColor" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-64 h-64 glass-strong border-4 border-cyan-500 rounded-3xl flex flex-col items-center justify-center mb-6 relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <motion.div 
                animate={{ y: ['-100%', '100%'] }} 
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
              />
              <MemoryStick size={80} className="text-cyan-300 mb-4" />
              <span className="text-2xl font-bold text-white z-10">Running in Memory</span>
            </div>
            <span className="text-4xl font-mono font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">PROCESS</span>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 }}
          className="glass p-10 rounded-2xl max-w-4xl text-center border-l-4 border-cyan-500 mt-12"
        >
          <p className="text-4xl text-white font-medium">
            "A process is a <span className="text-cyan-400 font-bold">running instance</span> of a program."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default {
  section: 'PROCESS & THREAD',
  title: 'WHAT IS A PROCESS?',
  speakerNotes: 'When you double-click a program, it becomes a process — a running instance in memory.',
  component: Slide13
};
