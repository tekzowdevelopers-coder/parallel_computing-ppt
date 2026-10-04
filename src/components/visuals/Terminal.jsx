import React from 'react';
import { motion } from 'framer-motion';

export default function Terminal({ lines = [], typewriter = true, prompt = '$' }) {
  return (
    <div className="rounded-xl overflow-hidden glass border border-slate-700/50 shadow-2xl w-full">
      <div className="bg-slate-800/80 px-4 py-2 border-b border-slate-700/50 flex items-center">
        <span className="text-slate-400 font-mono text-sm">Terminal</span>
      </div>
      <div className="p-4 bg-black min-h-[200px] font-mono text-lg">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={typewriter ? { opacity: 0 } : false}
            animate={typewriter ? { opacity: 1 } : false}
            transition={{ delay: i * 0.3 }}
            className="mb-1"
          >
            {line.type === 'input' && (
              <div className="flex">
                <span className="text-green-500 mr-3">{prompt}</span>
                <span className="text-white">{line.text}</span>
              </div>
            )}
            {line.type === 'output' && (
              <div className="text-slate-300">{line.text}</div>
            )}
            {line.type === 'empty' && <div className="h-6"></div>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
