import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, HardDrive, Network } from 'lucide-react';

export default {
  section: 'DISTRIBUTED COMPUTING',
  title: 'WHAT IS A CLUSTER NODE?',
  speakerNotes: 'A node is an individual standalone computer within a cluster.',
  component: function Slide61() {
    return (
      <div className="slide">
        <div className="slide-label">61 / DISTRIBUTED COMPUTING</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          WHAT IS A CLUSTER NODE?
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-4xl glass p-8 rounded-xl relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center space-y-4 bg-navy-900 p-6 rounded border border-muted">
              <Cpu className="w-16 h-16 text-cyan" />
              <div className="text-xl text-white">2 Multi-core CPUs</div>
            </div>
            <div className="flex flex-col items-center space-y-4 bg-navy-900 p-6 rounded border border-muted">
              <HardDrive className="w-16 h-16 text-green" />
              <div className="text-xl text-white">Local RAM</div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="flex flex-col items-center space-y-4 bg-navy-900 p-6 rounded border border-muted w-1/2">
              <Network className="w-16 h-16 text-amber" />
              <div className="text-xl text-white text-center">Network Interface Card (NIC)</div>
            </div>
          </div>
          
          <div className="absolute top-4 right-4 text-secondary text-lg">Motherboard</div>
        </motion.div>
      </div>
    );
  }
};
