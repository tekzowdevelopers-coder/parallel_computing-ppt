import React from 'react';
import { motion } from 'framer-motion';
import DistributedPerformanceSimulator from '../../components/visuals/mpi/DistributedPerformanceSimulator';

export default {
  section: 'MPI PERFORMANCE',
  title: 'MORE PROCESSES ≠ ALWAYS FASTER',
  speakerNotes: 'Adding 100 processes will not make your program 100x faster. Let\'s understand why.',
  component: function Slide64() {
    return (
      <div className="slide">
        <div className="slide-label">64 / MPI PERFORMANCE</div>
        <motion.h1 
          className="text-6xl font-bold mb-8 text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          WHY DOESN'T SPEEDUP SCALE FOREVER?
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-5xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <DistributedPerformanceSimulator />
        </motion.div>
      </div>
    );
  }
};
