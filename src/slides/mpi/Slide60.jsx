import React from 'react';
import { motion } from 'framer-motion';
import { Server } from 'lucide-react';

export default {
  section: 'DISTRIBUTED COMPUTING',
  title: 'DISTRIBUTED MEMORY CLUSTERS',
  speakerNotes: 'Supercomputers are essentially clusters of independent computers linked by fast interconnects.',
  component: function Slide60() {
    return (
      <div className="slide">
        <div className="slide-label">60 / DISTRIBUTED COMPUTING</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          DISTRIBUTED MEMORY CLUSTERS
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-5xl flex items-center justify-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[1, 2, 3].map(i => (
            <motion.div 
              key={i}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.2 }}
            >
              <Server className="w-32 h-32 text-cyan mb-4" />
              <div className="text-xl text-secondary">Node {i}</div>
              <div className="text-sm text-muted">OS, CPU, RAM</div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-3xl text-white text-center max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Server racks linked with high-speed InfiniBand switches. Each node has its own OS, CPU, and RAM.
        </motion.div>
      </div>
    );
  }
};
