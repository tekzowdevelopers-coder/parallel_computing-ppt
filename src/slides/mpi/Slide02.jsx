import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, UtensilsCrossed } from 'lucide-react';

export default {
  section: 'WHY MPI?',
  title: 'YESTERDAY: OPENMP',
  speakerNotes: 'Recall Day 1. Threads share the exact same address space. Great for one computer, but limited to one computer.',
  component: function Slide02() {
    return (
      <div className="slide">
        <div className="slide-label">02 / WHY MPI?</div>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <motion.h1 
            className="text-6xl font-bold text-white text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            YESTERDAY: <span className="text-cyan-400">OPENMP</span>
          </motion.h1>

          <div className="grid grid-cols-2 gap-16 w-full max-w-6xl mt-12">
            <motion.div 
              className="glass p-12 rounded-3xl flex flex-col items-center space-y-8 relative overflow-hidden"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-3xl text-cyan-200 font-mono">COMPUTER SYSTEM</h3>
              <div className="flex justify-center space-x-6 w-full">
                {[0, 1, 2].map(t => (
                  <div key={t} className="bg-cyan-900/50 p-6 rounded-xl flex flex-col items-center border border-cyan-500/30">
                    <Cpu size={48} className="text-cyan-400 mb-2" />
                    <span className="text-xl font-bold">T{t}</span>
                  </div>
                ))}
              </div>
              <div className="w-full h-32 bg-green-900/30 border-2 border-green-500/50 rounded-xl flex items-center justify-center relative">
                <Database className="text-green-400 mr-4" size={40} />
                <span className="text-3xl font-bold text-green-300">SHARED MEMORY</span>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full -top-32" style={{ zIndex: -1 }}>
                  <path d="M 100,0 L 250,128" stroke="#10b981" strokeWidth="4" strokeDasharray="8 8" className="opacity-50" />
                  <path d="M 250,0 L 250,128" stroke="#10b981" strokeWidth="4" strokeDasharray="8 8" className="opacity-50" />
                  <path d="M 400,0 L 250,128" stroke="#10b981" strokeWidth="4" strokeDasharray="8 8" className="opacity-50" />
                </svg>
              </div>
              <p className="text-2xl text-center font-bold tracking-widest text-cyan-100 mt-4">MANY THREADS — SHARED MEMORY</p>
            </motion.div>

            <motion.div 
              className="glass p-12 rounded-3xl flex flex-col items-center justify-center space-y-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <UtensilsCrossed size={80} className="text-amber-400" />
              <h3 className="text-3xl text-amber-200 font-mono text-center">THE KITCHEN</h3>
              <p className="text-2xl text-center text-slate-300">
                One kitchen, multiple chefs sharing the exact same counter and ingredients.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
};
