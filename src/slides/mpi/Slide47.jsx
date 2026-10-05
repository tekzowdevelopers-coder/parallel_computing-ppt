import React from 'react';
import { motion } from 'framer-motion';
import GatherSimulator from '../../components/visuals/mpi/GatherSimulator';

export default {
  section: 'COLLECTIVE COMMUNICATION',
  title: 'MPI_GATHER (MANY → ONE)',
  speakerNotes: 'MPI_Gather does the exact reverse of Scatter: collects individual results from all ranks into a master array on the root.',
  component: function Slide47() {
    return (
      <div className="slide">
        <div className="slide-label">47 / COLLECTIVE COMMUNICATION</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MPI_GATHER <span className="text-green">(MANY → ONE)</span>
        </motion.h1>
        
        <motion.div 
          className="text-3xl font-mono text-center mb-8 text-white glass inline-block mx-auto px-8 py-4 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-green">MPI_Gather</span>(...)
        </motion.div>
        
        <motion.div 
          className="flex-1 w-full max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <GatherSimulator />
        </motion.div>
      </div>
    );
  }
};
