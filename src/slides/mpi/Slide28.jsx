import React from 'react';
import { motion } from 'framer-motion';
import Terminal from '../../components/visuals/Terminal';

export default {
  section: 'FIRST MPI PROGRAM',
  title: 'COMPILING WITH MPICC',
  speakerNotes: 'We don\'t call plain gcc; we use mpicc, which passes all the MPI link flags automatically.',
  component: function Slide28() {
    return (
      <div className="slide">
        <div className="slide-label">28 / FIRST MPI PROGRAM</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          COMPILING WITH <span className="text-cyan">MPICC</span>
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Terminal 
            command="mpicc hello_mpi.c -o hello_mpi"
            output={[]}
          />
        </motion.div>
        
        <motion.p
          className="text-3xl text-center mt-12 text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-cyan font-mono">mpicc</span> is a compiler wrapper that automatically links MPI libraries and header paths.
        </motion.p>
      </div>
    );
  }
};
