import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'COLLECTIVE COMMUNICATION',
  title: 'MPI_ALLREDUCE',
  speakerNotes: 'MPI_Allreduce avoids having to call Reduce followed by Bcast. Every rank gets the reduced value.',
  component: function Slide51() {
    return (
      <div className="slide">
        <div className="slide-label">51 / COLLECTIVE COMMUNICATION</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MPI_ALLREDUCE
        </motion.h1>
        
        <div className="flex w-full max-w-6xl space-x-12">
          <motion.div 
            className="flex-1 glass p-8 rounded-xl flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl text-cyan mb-8">Reduce</h2>
            <div className="text-2xl text-secondary text-center">
              <p>Result goes ONLY to Rank 0.</p>
              <div className="mt-8 font-mono text-xl">
                R0: <span className="text-green">100</span><br/>
                R1: -<br/>
                R2: -<br/>
                R3: -
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 glass-strong p-8 rounded-xl flex flex-col items-center glow-cyan"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-4xl text-cyanGlow mb-8">Allreduce</h2>
            <div className="text-2xl text-secondary text-center">
              <p>Result is broadcast to EVERY rank.</p>
              <div className="mt-8 font-mono text-xl">
                R0: <span className="text-green">100</span><br/>
                R1: <span className="text-green">100</span><br/>
                R2: <span className="text-green">100</span><br/>
                R3: <span className="text-green">100</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
};
