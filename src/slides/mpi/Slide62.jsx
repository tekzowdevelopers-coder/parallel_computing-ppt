import React from 'react';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';

export default {
  section: 'DISTRIBUTED COMPUTING',
  title: 'MPI ACROSS NODES',
  speakerNotes: 'The beauty of MPI: your code doesn\'t change whether you run on your laptop or on a supercomputer.',
  component: function Slide62() {
    return (
      <div className="slide">
        <div className="slide-label">62 / DISTRIBUTED COMPUTING</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MPI ACROSS NODES
        </motion.h1>
        
        <div className="flex items-center justify-center space-x-4 w-full max-w-6xl mb-12">
          {[
            { node: 1, ranks: 'Ranks 0, 1' },
            { node: 2, ranks: 'Ranks 2, 3' },
            { node: 3, ranks: 'Ranks 4, 5' }
          ].map((item, i) => (
            <React.Fragment key={item.node}>
              <motion.div 
                className="glass p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2 }}
              >
                <div className="text-2xl text-cyan mb-2">Node {item.node}</div>
                <div className="text-lg text-white bg-navy-900 px-4 py-2 rounded">{item.ranks}</div>
              </motion.div>
              {i < 2 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.2 }}
                >
                  <Network className="w-12 h-12 text-secondary mx-2" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <motion.div 
          className="bg-cyan/10 border border-cyan p-6 rounded-xl max-w-4xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-3xl text-cyanGlow font-bold">
            MPI works identically whether processes are on the same machine or across 1,000 servers.
          </p>
        </motion.div>
      </div>
    );
  }
};
