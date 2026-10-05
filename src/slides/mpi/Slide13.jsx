import React from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Cpu, ArrowRight } from 'lucide-react';

export default {
  section: 'MPI FUNDAMENTALS',
  title: 'WHAT IS A PROCESS?',
  speakerNotes: 'Unlike threads which share memory, processes are completely isolated from each other by the operating system.',
  component: function Slide13() {
    return (
      <div className="slide">
        <div className="slide-label">13 / MPI FUNDAMENTALS</div>
        <div className="flex flex-col items-center justify-center h-full w-full px-20">
          
          <div className="flex items-center justify-between w-full max-w-6xl mb-16">
            
            <motion.div 
              className="flex flex-col items-center space-y-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <HardDrive size={80} className="text-slate-400" />
              <div className="glass px-6 py-3 rounded-lg text-2xl font-mono text-slate-300">Program (Disk)</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-cyan-400 font-bold tracking-widest text-sm">LOADED INTO RAM</span>
                <ArrowRight size={60} className="text-cyan-500" />
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center space-y-4"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Cpu size={80} className="text-cyan-400" />
              <div className="glass px-6 py-3 border-cyan-500 rounded-lg text-2xl font-bold font-mono text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                PROCESS
              </div>
            </motion.div>

          </div>

          <motion.div 
            className="w-full glass p-10 rounded-3xl flex items-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="w-1/3 border-r border-slate-700 pr-10">
              <h3 className="text-3xl font-bold text-white mb-4">Definition</h3>
              <p className="text-xl text-slate-400 italic">
                "A running instance of a program with its own isolated address space."
              </p>
            </div>
            
            <div className="w-2/3 pl-10">
              <h4 className="text-2xl font-bold text-cyan-300 mb-6 text-center">Private Address Space</h4>
              <div className="flex flex-col space-y-2 font-mono text-center">
                <div className="bg-indigo-900/50 py-3 rounded border border-indigo-500/30 text-indigo-200">Stack</div>
                <div className="bg-indigo-900/50 py-3 rounded border border-indigo-500/30 text-indigo-200 mt-2">Heap</div>
                <div className="bg-indigo-900/50 py-3 rounded border border-indigo-500/30 text-indigo-200 mt-2">Data / BSS</div>
                <div className="bg-indigo-900/50 py-3 rounded border border-indigo-500/30 text-indigo-200 mt-2">Text (Code)</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    );
  }
};
