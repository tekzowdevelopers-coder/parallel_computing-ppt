import React from 'react';
import { motion } from 'framer-motion';

export default function MappingDiagram({ left = [], right = [], connections = [] }) {
  return (
    <div className="flex justify-between items-center w-full max-w-5xl mx-auto px-12 relative h-[500px]">
      <div className="flex flex-col gap-12 w-1/3">
        {left.map((item, i) => (
          <motion.div 
            key={`l-${i}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="glass p-6 rounded-xl flex items-center gap-4 border border-slate-600"
          >
            <span className="text-3xl">{item.icon}</span>
            <span className="text-xl font-bold text-white">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="w-1/3 flex justify-center text-4xl text-cyan-500 opacity-50">
        ↔
      </div>

      <div className="flex flex-col gap-12 w-1/3">
        {right.map((item, i) => (
          <motion.div 
            key={`r-${i}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="glass p-6 rounded-xl flex items-center gap-4 border border-cyan-700/50 glow-cyan bg-cyan-900/10"
          >
            <span className="text-3xl">{item.icon}</span>
            <span className="text-xl font-bold text-white">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
