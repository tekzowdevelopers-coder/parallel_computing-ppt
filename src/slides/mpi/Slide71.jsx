import React from 'react';
import { motion } from 'framer-motion';
import { Gauge } from 'lucide-react';

export default {
  section: 'MPI PERFORMANCE',
  title: 'LATENCY VS BANDWIDTH',
  speakerNotes: 'Sending one giant message is much faster than sending 1,000 tiny messages due to latency overhead.',
  component: function Slide71() {
    return (
      <div className="slide">
        <div className="slide-label">71 / MPI PERFORMANCE</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          LATENCY VS BANDWIDTH
        </motion.h1>
        
        <div className="flex w-full max-w-5xl space-x-8 mb-12">
          <motion.div 
            className="flex-1 glass p-8 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl text-amber mb-4">Latency</h2>
            <p className="text-xl text-secondary mb-2">Time to start (Startup delay)</p>
            <p className="text-lg text-muted italic">"Time for the courier to start and arrive."</p>
          </motion.div>
          
          <motion.div 
            className="flex-1 glass p-8 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl text-cyan mb-4">Bandwidth</h2>
            <p className="text-xl text-secondary mb-2">Data rate (Bytes per second)</p>
            <p className="text-lg text-muted italic">"How many boxes the courier can carry per trip."</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="w-full max-w-4xl text-center bg-navy-900 border border-muted p-6 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-4xl font-mono text-white flex items-center justify-center">
            Time = <span className="text-amber ml-4 mr-4">Latency</span> + 
            <div className="ml-4 flex flex-col items-center text-3xl">
              <span className="border-b-2 border-white pb-1">Message Size</span>
              <span className="text-cyan pt-1">Bandwidth</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
};
