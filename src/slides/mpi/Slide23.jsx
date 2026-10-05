import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export default {
  section: 'MPI FUNDAMENTALS',
  title: 'MPI_Comm_size()',
  speakerNotes: 'MPI_Comm_size tells you the total number of processes in the communicator.',
  component: function Slide23() {
    return (
      <div className="slide">
        <div className="slide-label">23 / MPI FUNDAMENTALS</div>
        <div className="flex flex-col items-center justify-center h-full w-full px-16">
          
          <motion.div
            className="w-full glass p-10 rounded-3xl border border-cyan-500/50 bg-[#0d1117] mb-12 flex items-center justify-between"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <pre className="text-4xl font-mono text-cyan-300">
              MPI_Comm_size(MPI_COMM_WORLD, &size);
            </pre>
            <div className="bg-cyan-900/50 p-4 rounded-xl text-cyan-100 font-mono text-2xl border border-cyan-500/30">
              size = ?
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center space-x-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <HelpCircle size={48} className="text-amber-400" />
            <h2 className="text-5xl font-bold text-white">How many total processes are running?</h2>
          </motion.div>

          <motion.div 
            className="w-full max-w-4xl bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex justify-between items-center border-b border-slate-700 pb-6 mb-6">
              <div className="font-mono text-2xl text-green-400">$ mpiexec -n 4 ./my_prog</div>
              <div className="text-3xl font-bold text-white">size = 4</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-mono text-2xl text-green-400">$ mpiexec -n 128 ./my_prog</div>
              <div className="text-3xl font-bold text-white">size = 128</div>
            </div>
          </motion.div>

        </div>
      </div>
    );
  }
};
