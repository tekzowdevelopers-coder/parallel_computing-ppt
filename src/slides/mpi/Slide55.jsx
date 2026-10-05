import React from 'react';
import { motion } from 'framer-motion';
import DeadlockSimulator from '../../components/visuals/mpi/DeadlockSimulator';

export default {
  section: 'SYNCHRONIZATION & DEADLOCK',
  title: 'WHAT IS DEADLOCK?',
  speakerNotes: 'Deadlock is the ultimate concurrency nightmare: processes wait on each other in an infinite cycle.',
  component: function Slide55() {
    return (
      <div className="slide">
        <div className="slide-label">55 / SYNCHRONIZATION & DEADLOCK</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          WHAT IS DEADLOCK?
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <DeadlockSimulator />
        </motion.div>
        
        <motion.p 
          className="mt-12 text-3xl text-secondary max-w-4xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Two processes waiting on each other forever: <span className="text-red font-mono">R0</span> waiting for <span className="text-red font-mono">R1</span>, and <span className="text-red font-mono">R1</span> waiting for <span className="text-red font-mono">R0</span>.
        </motion.p>
      </div>
    );
  }
};
