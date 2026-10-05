import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'COLLECTIVE COMMUNICATION',
  title: 'THE COLLECTIVE MAP',
  speakerNotes: 'Collectives are divided into broadcast, distribution, gathering, and synchronization.',
  component: function Slide42() {
    return (
      <div className="slide">
        <div className="slide-label">42 / COLLECTIVE COMMUNICATION</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          THE COLLECTIVE <span className="text-cyan">MAP</span>
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          <motion.div 
            className="glass p-8 rounded-2xl border-t-4 border-cyan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">1-to-All</h2>
            <ul className="space-y-4 text-3xl font-mono text-cyanGlow">
              <li>MPI_Bcast</li>
              <li>MPI_Scatter</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="glass p-8 rounded-2xl border-t-4 border-green"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">All-to-1</h2>
            <ul className="space-y-4 text-3xl font-mono text-green">
              <li>MPI_Gather</li>
              <li>MPI_Reduce</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="glass p-8 rounded-2xl border-t-4 border-amber"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">All-to-All</h2>
            <ul className="space-y-4 text-3xl font-mono text-amber">
              <li>MPI_Allreduce</li>
              <li>MPI_Alltoall</li>
              <li>MPI_Barrier</li>
            </ul>
          </motion.div>
        </div>
      </div>
    );
  }
};
