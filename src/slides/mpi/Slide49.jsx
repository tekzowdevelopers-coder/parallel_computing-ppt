import React from 'react';
import { motion } from 'framer-motion';
import ReduceSimulator from '../../components/visuals/mpi/ReduceSimulator';

export default {
  section: 'COLLECTIVE COMMUNICATION',
  title: 'MPI_REDUCE',
  speakerNotes: 'MPI_Reduce is like Gather + Compute in one step: it reduces multiple values to a single answer.',
  component: function Slide49() {
    return (
      <div className="slide">
        <div className="slide-label">49 / COLLECTIVE COMMUNICATION</div>
        <motion.h1 
          className="text-6xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MPI_REDUCE
        </motion.h1>
        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ReduceSimulator />
          <p className="text-2xl text-secondary mt-8 text-center">
            Collects values from all processes, performs an associative operation, and stores the final result on root.
          </p>
        </motion.div>
      </div>
    );
  }
};
