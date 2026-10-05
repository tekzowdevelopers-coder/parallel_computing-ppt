import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Network } from 'lucide-react';

export default {
  section: 'COLLECTIVE COMMUNICATION',
  title: 'MPI_ALLTOALL',
  speakerNotes: 'MPI_Alltoall is the heaviest collective. Every rank exchanges unique data with every other rank.',
  component: function Slide53() {
    return (
      <div className="slide">
        <div className="slide-label">53 / COLLECTIVE COMMUNICATION</div>
        <motion.h1 
          className="text-6xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MPI_ALLTOALL
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-3xl glass p-8 rounded-xl flex flex-col items-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Network className="w-32 h-32 text-cyan mb-8" />
          <p className="text-3xl text-center text-white">
            Every process sends distinct data to every other process (N × N matrix transpose).
          </p>
        </motion.div>
        
        <motion.div 
          className="flex items-center space-x-4 bg-red/20 border border-red text-red p-6 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <AlertTriangle className="w-12 h-12" />
          <span className="text-2xl font-bold">WARNING: Communication cost scales as O(N²)</span>
        </motion.div>
      </div>
    );
  }
};
