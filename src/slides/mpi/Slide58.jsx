import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'SYNCHRONIZATION & DEADLOCK',
  title: 'NON-BLOCKING MPI',
  speakerNotes: 'Non-blocking calls allow you to compute while the network hardware transfers data in the background.',
  component: function Slide58() {
    return (
      <div className="slide">
        <div className="slide-label">58 / SYNCHRONIZATION & DEADLOCK</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          NON-BLOCKING MPI: ISEND & IRECV
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-5xl glass p-8 rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col space-y-6 text-2xl font-mono text-secondary">
            <div className="flex items-center space-x-4">
              <span className="text-cyan w-48">MPI_Isend()</span>
              <span className="text-muted">→ starts transfer</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-amber w-48">Compute()</span>
              <span className="text-white">→ heavy computation in parallel with network</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-cyan w-48">MPI_Wait()</span>
              <span className="text-muted">→ checks completion</span>
            </div>
          </div>
        </motion.div>
        
        <motion.h3 
          className="mt-12 text-4xl text-greenGlow font-bold uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Communication & Computation Overlap
        </motion.h3>
      </div>
    );
  }
};
