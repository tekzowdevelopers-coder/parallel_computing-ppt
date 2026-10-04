import React from 'react';
import { motion } from 'framer-motion';

export default function ParallelLoopVisualizer({ iterations = 20, threadCount = 4, animate = true, showDistribution = true }) {
  const colors = ['bg-cyan-500', 'bg-green-500', 'bg-red-500', 'bg-amber-500'];
  const itersPerThread = Math.ceil(iterations / threadCount);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {Array.from({ length: iterations }).map((_, i) => {
          const threadIndex = Math.floor(i / itersPerThread);
          const color = showDistribution ? colors[threadIndex % colors.length] : 'bg-slate-600';
          
          return (
            <motion.div
              key={i}
              initial={animate ? { scale: 0, opacity: 0 } : false}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`w-12 h-12 rounded flex items-center justify-center font-mono font-bold text-white shadow-md ${color}`}
            >
              {i}
            </motion.div>
          );
        })}
      </div>
      
      {showDistribution && (
        <div className="flex justify-center gap-8 mt-8">
          {Array.from({ length: threadCount }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded ${colors[i % colors.length]}`}></div>
              <span className="text-slate-300 font-mono">Thread {i}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
