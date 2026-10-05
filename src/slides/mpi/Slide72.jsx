import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'MPI + OPENMP',
  title: 'CAN WE COMBINE MPI & OPENMP?',
  speakerNotes: 'Why choose between MPI and OpenMP? The fastest supercomputers combine both.',
  component: function Slide72() {
    return (
      <div className="slide">
        <div className="slide-label">72 / MPI + OPENMP</div>
        
        <motion.div 
          className="text-center w-full max-w-5xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl text-secondary mb-12 italic">
            "What if we use MPI between nodes AND OpenMP inside each node?"
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-green mb-8">
              HYBRID PARALLEL PROGRAMMING
            </h1>
            <p className="text-3xl text-cyanGlow">
              The industry standard for modern HPC
            </p>
          </motion.div>
        </motion.div>
      </div>
    );
  }
};
