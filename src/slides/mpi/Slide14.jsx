import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2, Cpu } from 'lucide-react';

export default {
  section: 'MPI FUNDAMENTALS',
  title: 'MPI USES PROCESSES',
  speakerNotes: 'MPI typically runs in SPMD mode: the exact same binary is started multiple times as independent processes.',
  component: function Slide14() {
    return (
      <div className="slide">
        <div className="slide-label">14 / MPI FUNDAMENTALS</div>
        <div className="flex flex-col items-center justify-center h-full w-full">
          
          <motion.div 
            className="flex flex-col items-center z-10"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="glass px-8 py-6 rounded-2xl flex flex-col items-center border-cyan-500 bg-cyan-950/30">
              <FileCode2 size={64} className="text-cyan-400 mb-2" />
              <span className="text-2xl font-mono font-bold text-cyan-200">my_mpi_program.exe</span>
            </div>
          </motion.div>

          {/* Branching lines */}
          <div className="relative w-full max-w-4xl h-24 my-4 flex justify-center">
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              {[10, 36, 63, 90].map((x, i) => (
                <motion.path 
                  key={i}
                  d={`M 50% 0 L ${x}% 100%`} 
                  stroke="#06b6d4" 
                  strokeWidth="3" 
                  strokeDasharray="5 5"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ delay: 0.5 + (i * 0.2), duration: 0.8 }}
                />
              ))}
            </svg>
          </div>

          <div className="flex justify-between w-full max-w-5xl z-10">
            {[0, 1, 2, 3].map((p, i) => (
              <motion.div 
                key={p}
                className="glass p-6 rounded-2xl flex flex-col items-center w-48 border-t-4 border-t-cyan-400 bg-navy-900"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 + (i * 0.2) }}
              >
                <Cpu size={40} className="text-cyan-300 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Process {p}</h3>
                <span className="text-xs text-slate-400 font-mono text-center">Independent RAM</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 glass-strong px-12 py-6 rounded-full border-cyan-500/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 tracking-widest">
              SPMD MODEL
            </h2>
            <p className="text-center text-cyan-100 mt-2 font-mono">Single Program, Multiple Data</p>
          </motion.div>

        </div>
      </div>
    );
  }
};
