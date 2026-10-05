import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, User } from 'lucide-react';

export default {
  section: 'MPI FUNDAMENTALS',
  title: 'MPI_Comm_rank()',
  speakerNotes: 'MPI_Comm_rank gives each process its individual identity number from 0 to size-1.',
  component: function Slide24() {
    return (
      <div className="slide">
        <div className="slide-label">24 / MPI FUNDAMENTALS</div>
        <div className="flex flex-col items-center justify-center h-full w-full px-16">
          
          <motion.div
            className="w-full glass p-10 rounded-3xl border border-amber-500/50 bg-[#0d1117] mb-12 flex items-center justify-between"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <pre className="text-4xl font-mono text-amber-300">
              MPI_Comm_rank(MPI_COMM_WORLD, &rank);
            </pre>
            <div className="bg-amber-900/50 p-4 rounded-xl text-amber-100 font-mono text-2xl border border-amber-500/30">
              rank = ?
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center space-x-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <HelpCircle size={48} className="text-cyan-400" />
            <h2 className="text-5xl font-bold text-white">Who am I? What is my rank?</h2>
          </motion.div>

          <div className="flex justify-center space-x-8 w-full">
            {[0, 1, 2, 3].map((r, i) => (
              <motion.div 
                key={r}
                className="bg-slate-900 border-2 border-slate-700 p-6 rounded-2xl w-48 flex flex-col items-center text-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 + (i * 0.1) }}
              >
                <User size={40} className="text-slate-500 mb-4" />
                <div className="text-xl text-slate-400 mb-2">Process {r} runs</div>
                <div className="bg-black/50 p-3 rounded-lg border border-slate-800 w-full">
                  <span className="font-mono text-amber-400 font-bold text-2xl">rank={r}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    );
  }
};
