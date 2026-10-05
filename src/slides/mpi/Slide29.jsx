import React from 'react';
import { motion } from 'framer-motion';
import Terminal from '../../components/visuals/Terminal';

export default {
  section: 'FIRST MPI PROGRAM',
  title: 'RUNNING WITH MPIEXEC',
  speakerNotes: 'The -n parameter specifies the number of processes to spawn.',
  component: function Slide29() {
    return (
      <div className="slide">
        <div className="slide-label">29 / FIRST MPI PROGRAM</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          RUNNING WITH <span className="text-cyan">MPIEXEC</span>
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Terminal 
            command="mpiexec -n 4 ./hello_mpi"
            output={[]}
          />
        </motion.div>
        
        <motion.p
          className="text-3xl text-center mt-12 text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-cyan font-mono">mpiexec</span> launches 4 distinct OS processes running the compiled binary.
        </motion.p>
      </div>
    );
  }
};
