import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'SYNCHRONIZATION & DEADLOCK',
  title: 'BLOCKING VS NON-BLOCKING',
  speakerNotes: 'Blocking calls halt execution until the buffer is safe to reuse. This can lead to waiting.',
  component: function Slide54() {
    return (
      <div className="slide">
        <div className="slide-label">54 / SYNCHRONIZATION & DEADLOCK</div>
        <motion.h1 
          className="text-6xl font-bold mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          BLOCKING VS NON-BLOCKING
        </motion.h1>
        
        <div className="flex w-full max-w-6xl space-x-8">
          <motion.div 
            className="flex-1 glass p-8 rounded-xl border border-red/30"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl text-red mb-6 font-mono">MPI_Send</h2>
            <p className="text-2xl text-secondary mb-4">(blocking)</p>
            <p className="text-xl text-white">
              Function returns when buffer can be safely reused. Completion semantics depend on MPI implementation and buffer protocol.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex-1 glass p-8 rounded-xl border border-cyan/30"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-4xl text-cyan mb-6 font-mono">MPI_Recv</h2>
            <p className="text-2xl text-secondary mb-4">(blocking)</p>
            <p className="text-xl text-white">
              Waits until matching message arrives into buffer.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
};
