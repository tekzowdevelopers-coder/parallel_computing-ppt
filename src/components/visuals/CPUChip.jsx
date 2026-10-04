import React from 'react';
import { motion } from 'framer-motion';

export default function CPUChip({ coreCount = 4, activeCores = [], tasks = [], showLabels = true, animate = true }) {
  const cores = Array.from({ length: coreCount });
  const gridCols = coreCount > 4 ? 'grid-cols-4' : 'grid-cols-2';

  return (
    <div className="bg-slate-900 p-8 rounded-3xl border-4 border-slate-700 shadow-2xl relative w-full max-w-2xl mx-auto">
      <div className="absolute top-2 left-4 text-slate-500 font-mono text-xl font-bold">CPU</div>
      <div className={`grid ${gridCols} gap-6 mt-6`}>
        {cores.map((_, i) => {
          const isActive = activeCores.includes(i);
          const task = tasks[i];
          
          return (
            <motion.div
              key={i}
              className={`h-32 rounded-xl flex flex-col items-center justify-center relative transition-all duration-300 border-2 ${isActive ? 'border-cyan-400 bg-cyan-900/30 glow-cyan' : 'border-slate-700 bg-slate-800'}`}
              initial={animate ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {showLabels && (
                <span className={`font-mono text-lg font-bold mb-2 ${isActive ? 'text-cyan-300' : 'text-slate-500'}`}>
                  CORE {i}
                </span>
              )}
              {task && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-cyan-500 text-navy-900 px-3 py-1 rounded-md font-bold text-sm shadow-md"
                >
                  {task}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
