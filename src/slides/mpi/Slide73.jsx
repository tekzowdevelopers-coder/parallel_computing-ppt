import React from 'react';
import { motion } from 'framer-motion';
import { Network, Cpu, Server } from 'lucide-react';
import MPIHybridScene from '../../components/visuals/mpi/MPIHybridScene';

export default {
  section: 'MPI + OPENMP',
  title: 'HYBRID CLUSTER ARCHITECTURE',
  speakerNotes: 'Look at the hierarchy: Network links nodes via MPI. Inside each node, cores share memory via OpenMP.',
  component: function Slide73() {
    return (
      <div className="slide">
        <div className="slide-label">73 / MPI + OPENMP</div>
        
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-4">
            HYBRID CLUSTER ARCHITECTURE
          </h1>
          <p className="text-3xl text-slate-300">
            MPI across Nodes, OpenMP inside Nodes
          </p>
        </motion.div>

        <motion.div 
          className="w-full h-[600px] flex items-center justify-center bg-slate-900/50 rounded-2xl border border-slate-700 p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <MPIHybridScene />
        </motion.div>
      </div>
    );
  }
};
