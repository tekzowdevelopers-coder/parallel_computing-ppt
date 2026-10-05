import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default {
  section: 'MPI PERFORMANCE',
  title: 'LOAD BALANCING',
  speakerNotes: 'If one worker has 10x the work, all other workers sit waiting at the barrier.',
  component: function Slide66() {
    return (
      <div className="slide">
        <div className="slide-label">66 / MPI PERFORMANCE</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          LOAD BALANCING
        </motion.h1>
        
        <div className="flex w-full max-w-5xl space-x-12 mb-12">
          <motion.div 
            className="flex-1 glass p-8 rounded-xl border border-red"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl text-red mb-6">Bad Balancing</h2>
            <div className="space-y-4">
              <div className="flex items-center"><div className="w-12 text-secondary">R0</div><div className="h-8 bg-cyan rounded w-full" /></div>
              <div className="flex items-center"><div className="w-12 text-secondary">R1</div><div className="h-8 bg-cyan rounded w-1/4" /></div>
              <div className="flex items-center"><div className="w-12 text-secondary">R2</div><div className="h-8 bg-cyan rounded w-1/4" /></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 glass p-8 rounded-xl border border-green"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl text-green mb-6">Good Balancing</h2>
            <div className="space-y-4">
              <div className="flex items-center"><div className="w-12 text-secondary">R0</div><div className="h-8 bg-cyan rounded w-2/3" /></div>
              <div className="flex items-center"><div className="w-12 text-secondary">R1</div><div className="h-8 bg-cyan rounded w-2/3" /></div>
              <div className="flex items-center"><div className="w-12 text-secondary">R2</div><div className="h-8 bg-cyan rounded w-2/3" /></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex items-center space-x-4 bg-amber/20 border border-amber p-6 rounded-xl text-amber max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <AlertTriangle className="w-10 h-10" />
          <span className="text-2xl font-bold">Rule: A parallel program is only as fast as its slowest process!</span>
        </motion.div>
      </div>
    );
  }
};
