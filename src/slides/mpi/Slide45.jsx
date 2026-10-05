import React from 'react';
import { motion } from 'framer-motion';
import ScatterSimulator from '../../components/visuals/mpi/ScatterSimulator';

export default {
  section: 'COLLECTIVE COMMUNICATION',
  title: 'MPI_SCATTER (ONE → MANY)',
  speakerNotes: 'MPI_Scatter divides an array into equal chunks and sends one chunk to each process.',
  component: function Slide45() {
    return (
      <div className="slide">
        <div className="slide-label">45 / COLLECTIVE COMMUNICATION</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MPI_SCATTER <span className="text-cyan">(ONE → MANY)</span>
        </motion.h1>
        
        <motion.div 
          className="text-3xl font-mono text-center mb-8 text-white glass inline-block mx-auto px-8 py-4 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-cyan">MPI_Scatter</span>(...)
        </motion.div>
        
        <motion.div 
          className="flex-1 w-full max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ScatterSimulator />
        </motion.div>
      </div>
    );
  }
};
