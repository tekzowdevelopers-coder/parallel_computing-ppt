import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'MPI PERFORMANCE',
  title: 'COMMUNICATION OVERHEAD',
  speakerNotes: 'As process count increases, communication time begins to dominate compute time.',
  component: function Slide65() {
    return (
      <div className="slide">
        <div className="slide-label">65 / MPI PERFORMANCE</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          COMMUNICATION OVERHEAD
        </motion.h1>
        
        <div className="w-full max-w-4xl space-y-8">
          <div className="flex flex-col space-y-2">
            <div className="text-xl text-secondary">2 Processes</div>
            <div className="w-full h-12 flex rounded overflow-hidden">
              <motion.div className="bg-cyan h-full" initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ duration: 1 }} />
              <motion.div className="bg-amber h-full" initial={{ width: 0 }} animate={{ width: '10%' }} transition={{ duration: 1, delay: 0.2 }} />
              <motion.div className="bg-red h-full" initial={{ width: 0 }} animate={{ width: '10%' }} transition={{ duration: 1, delay: 0.4 }} />
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <div className="text-xl text-secondary">16 Processes</div>
            <div className="w-full h-12 flex rounded overflow-hidden">
              <motion.div className="bg-cyan h-full" initial={{ width: 0 }} animate={{ width: '30%' }} transition={{ duration: 1, delay: 0.5 }} />
              <motion.div className="bg-amber h-full" initial={{ width: 0 }} animate={{ width: '50%' }} transition={{ duration: 1, delay: 0.7 }} />
              <motion.div className="bg-red h-full" initial={{ width: 0 }} animate={{ width: '20%' }} transition={{ duration: 1, delay: 0.9 }} />
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex space-x-8 text-xl">
          <div className="flex items-center"><div className="w-6 h-6 bg-cyan rounded mr-2" /> Compute Time</div>
          <div className="flex items-center"><div className="w-6 h-6 bg-amber rounded mr-2" /> Communication Time</div>
          <div className="flex items-center"><div className="w-6 h-6 bg-red rounded mr-2" /> Idle / Wait</div>
        </div>
      </div>
    );
  }
};
