import React from 'react';
import { motion } from 'framer-motion';

export default function SequentialVsParallel({ taskCount = 8, threadCount = 4, running = false }) {
  return (
    <div className="grid grid-cols-2 gap-8 w-full h-96">
      <div className="glass p-6 rounded-2xl flex flex-col items-center">
        <h3 className="text-2xl font-bold text-red-400 mb-6">Sequential (1 Worker)</h3>
        <div className="flex-1 w-full flex flex-col justify-center items-center gap-4">
          <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center text-4xl mb-4">
            👨‍🍳
          </div>
          <div className="flex gap-2 flex-wrap justify-center w-full max-w-xs">
            {Array.from({ length: taskCount }).map((_, i) => (
              <motion.div
                key={i}
                className="w-8 h-8 rounded bg-red-500 shadow-md"
                initial={{ opacity: 1 }}
                animate={running ? { opacity: 0.2 } : { opacity: 1 }}
                transition={{ duration: 0.5, delay: running ? i * 0.5 : 0 }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="glass p-6 rounded-2xl flex flex-col items-center glow-cyan">
        <h3 className="text-2xl font-bold text-cyan-400 mb-6">Parallel ({threadCount} Workers)</h3>
        <div className="flex-1 w-full flex flex-col justify-center items-center gap-8">
          <div className="flex gap-4">
            {Array.from({ length: threadCount }).map((_, i) => (
              <div key={i} className="w-16 h-16 bg-cyan-900 border-2 border-cyan-500 rounded-full flex items-center justify-center text-3xl">
                👨‍🍳
              </div>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap justify-center w-full max-w-xs">
            {Array.from({ length: taskCount }).map((_, i) => (
              <motion.div
                key={i}
                className="w-8 h-8 rounded bg-cyan-500 shadow-md"
                initial={{ opacity: 1 }}
                animate={running ? { opacity: 0.2 } : { opacity: 1 }}
                transition={{ duration: 0.5, delay: running ? Math.floor(i / threadCount) * 0.5 : 0 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
