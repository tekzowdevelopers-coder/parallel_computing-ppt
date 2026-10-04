import React from 'react';
import { motion } from 'framer-motion';

export default function ConceptMap({ nodes = [], animate = true }) {
  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-3xl mx-auto py-8">
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          <motion.div
            initial={animate ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.4 }}
            className="glass px-8 py-4 rounded-xl text-2xl font-bold text-white text-center w-full max-w-md glow-cyan bg-cyan-900/10"
          >
            {node}
          </motion.div>
          
          {i < nodes.length - 1 && (
            <motion.div
              initial={animate ? { height: 0, opacity: 0 } : false}
              animate={{ height: 40, opacity: 1 }}
              transition={{ delay: i * 0.4 + 0.2 }}
              className="w-1 bg-cyan-500/50"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
