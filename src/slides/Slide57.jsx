import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'WRAP-UP',
  title: 'Day 1 Concept Map',
  speakerNotes: 'Let\'s review everything we learned today.',
  component: function Slide57() {
    const nodes = [
      "PARALLEL COMPUTING",
      "CPU CORES",
      "THREADS",
      "SHARED MEMORY",
      "OPENMP",
      "FORK",
      "PARALLEL REGION",
      "PARALLEL FOR",
      "SYNCHRONIZATION",
      "PERFORMANCE"
    ];

    return (
      <div className="slide">
        <div className="slide-label">57 / WRAP-UP</div>
        
        <div className="flex flex-col h-full w-full justify-center items-center">
          <motion.h1 
            className="text-6xl font-bold text-white mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            DAY 1 CONCEPT MAP
          </motion.h1>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 max-w-6xl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
            }}
          >
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className="glass px-8 py-4 rounded-full text-2xl font-bold text-cyan-300 border-2 border-cyan-500/30 hover:bg-cyan-900/30 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                {node}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
};
