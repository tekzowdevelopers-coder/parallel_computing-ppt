import React from 'react';
import { motion } from 'framer-motion';
import BroadcastSimulator from '../../components/visuals/mpi/BroadcastSimulator';

export default {
  section: 'COLLECTIVE COMMUNICATION',
  title: 'MPI_BCAST (ONE → ALL)',
  speakerNotes: 'MPI_Bcast sends the root process\'s data to EVERY other process in the communicator.',
  component: function Slide43() {
    return (
      <div className="slide">
        <div className="slide-label">43 / COLLECTIVE COMMUNICATION</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MPI_BCAST <span className="text-cyan">(ONE → ALL)</span>
        </motion.h1>
        
        <motion.div 
          className="text-4xl font-mono text-center mb-8 text-white glass inline-block mx-auto px-8 py-4 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-cyan">MPI_Bcast</span>(&data, count, type, root, comm);
        </motion.div>
        
        <motion.div 
          className="flex-1 w-full max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <BroadcastSimulator />
        </motion.div>
      </div>
    );
  }
};
