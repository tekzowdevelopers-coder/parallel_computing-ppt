import React from 'react';
import { motion } from 'framer-motion';
import { Network, Server } from 'lucide-react';

export default {
  section: 'WHY MPI?',
  title: 'PARALLEL COMPUTING WITH MPI',
  speakerNotes: 'Welcome to Day 2. Yesterday we mastered shared-memory programming with OpenMP. Today we scale beyond a single machine into distributed memory using MPI.',
  component: function Slide01() {
    return (
      <div className="slide">
        <div className="slide-label">01 / WHY MPI?</div>
        <motion.div 
          className="flex flex-col items-center justify-center h-full space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center space-y-4">
            <h1 className="text-7xl font-bold text-white tracking-tight">
              PARALLEL COMPUTING <span className="text-cyan-400">WITH MPI</span>
            </h1>
            <h2 className="text-4xl text-cyan-200">From Shared Memory to Message Passing</h2>
          </div>
          
          <div className="flex space-x-4">
            {['C', 'MPI', 'Distributed Computing'].map((badge, i) => (
              <motion.span 
                key={badge}
                className="px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-900/20 text-cyan-300 text-xl font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>

          <motion.div 
            className="flex items-center space-x-12 mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Server size={80} className="text-cyan-700" />
            <motion.div 
              animate={{ 
                x: [0, 20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Network size={60} className="text-cyan-400" />
            </motion.div>
            <Server size={80} className="text-cyan-700" />
          </motion.div>
        </motion.div>
      </div>
    );
  }
};
