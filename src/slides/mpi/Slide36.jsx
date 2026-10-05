import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'MESSAGE PASSING',
  title: 'SOURCE & DESTINATION',
  speakerNotes: 'The sender explicitly addresses the target rank. The receiver can specify a rank or listen for anyone.',
  component: function Slide36() {
    return (
      <div className="slide">
        <div className="slide-label">36 / MESSAGE PASSING</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          SOURCE & <span className="text-cyan">DESTINATION</span>
        </motion.h1>
        
        <div className="grid grid-cols-2 gap-12 max-w-5xl mx-auto w-full">
          <motion.div 
            className="glass p-12 rounded-2xl text-center border-t-4 border-cyan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Sender</h2>
            <div className="text-4xl font-mono text-cyanGlow bg-navy-900 p-4 rounded-lg">
              dest = 1
            </div>
          </motion.div>
          
          <motion.div 
            className="glass p-12 rounded-2xl text-center border-t-4 border-green"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Receiver</h2>
            <div className="text-4xl font-mono text-green bg-navy-900 p-4 rounded-lg mb-4">
              source = 0
            </div>
            <p className="text-secondary text-2xl italic my-4">or</p>
            <div className="text-4xl font-mono text-amber bg-navy-900 p-4 rounded-lg mt-4">
              MPI_ANY_SOURCE
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
};
