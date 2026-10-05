import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'MPI + OPENMP',
  title: 'OPENMP VS MPI COMPARISON',
  speakerNotes: 'OpenMP coordinates threads within a box. MPI coordinates boxes across the room.',
  component: function Slide74() {
    const rowVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    };

    const rows = [
      { feature: 'Unit of Execution', omp: 'Threads', mpi: 'Processes' },
      { feature: 'Memory Model', omp: 'Shared RAM', mpi: 'Private Address Spaces' },
      { feature: 'Communication', omp: 'Implicit (Variables)', mpi: 'Explicit (Messages)' },
      { feature: 'Scalability', omp: 'Single Machine', mpi: 'Tens of thousands of Nodes' },
      { feature: 'Target Hardware', omp: 'Multi-core CPUs', mpi: 'Clusters & Supercomputers' }
    ];

    return (
      <div className="slide">
        <div className="slide-label">74 / MPI + OPENMP</div>
        
        <motion.h1 
          className="text-6xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          OPENMP VS MPI COMPARISON
        </motion.h1>

        <motion.div 
          className="w-full max-w-6xl mx-auto glass-strong rounded-3xl overflow-hidden"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800/80 border-b border-slate-700">
                <th className="p-6 text-3xl text-slate-400 font-medium">Feature</th>
                <th className="p-6 text-3xl text-cyan-400 font-bold border-l border-slate-700">OpenMP</th>
                <th className="p-6 text-3xl text-amber-400 font-bold border-l border-slate-700">MPI</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr 
                  key={i} 
                  variants={rowVariants}
                  className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors"
                >
                  <td className="p-6 text-2xl text-slate-300 font-medium">{row.feature}</td>
                  <td className="p-6 text-2xl text-cyan-100 border-l border-slate-800">{row.omp}</td>
                  <td className="p-6 text-2xl text-amber-100 border-l border-slate-800">{row.mpi}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    );
  }
};
