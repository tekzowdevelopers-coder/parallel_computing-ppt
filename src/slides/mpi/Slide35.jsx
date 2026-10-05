import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'MESSAGE PASSING',
  title: 'MPI_RECV PARAMETERS',
  speakerNotes: 'MPI_Recv mirrors MPI_Send, but specifies who we want to receive from, plus a status object.',
  component: function Slide35() {
    return (
      <div className="slide">
        <div className="slide-label">35 / MESSAGE PASSING</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MPI_RECV <span className="text-green">PARAMETERS</span>
        </motion.h1>
        
        <motion.div 
          className="text-4xl md:text-5xl font-mono text-center mb-16 bg-navy-900/50 p-6 rounded-xl border border-secondary/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="text-green">MPI_Recv</span>(...)
        </motion.div>
        
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          <motion.div
            className="glass p-8 rounded-xl border-l-4 border-amber"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-4xl font-bold text-white mb-4">Source</h3>
            <p className="text-2xl text-secondary">The rank you expect a message from (or <code className="text-cyan">MPI_ANY_SOURCE</code>).</p>
          </motion.div>
          <motion.div
            className="glass p-8 rounded-xl border-l-4 border-amber"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-white mb-4">Status</h3>
            <p className="text-2xl text-secondary">Information about the received message (or <code className="text-cyan">MPI_STATUS_IGNORE</code>).</p>
          </motion.div>
        </div>
      </div>
    );
  }
};
