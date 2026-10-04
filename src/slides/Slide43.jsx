import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';

export default {
  section: 'RACE CONDITIONS',
  title: 'Synchronization',
  speakerNotes: 'Synchronization ensures threads access shared resources safely. We\'ll cover these in depth on Day 2.',
  component: function Slide43() {
    const keywords = [
      { text: "critical", color: "text-red-400" },
      { text: "atomic", color: "text-amber-400" },
      { text: "barrier", color: "text-blue-400" },
      { text: "reduction", color: "text-green-400" }
    ];

    return (
      <div className="slide">
        <div className="slide-label">43 / RACE CONDITIONS</div>
        
        <div className="flex flex-col h-full w-full justify-center items-center space-y-16">
          <motion.h1 
            className="text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            SYNCHRONIZATION
          </motion.h1>

          <div className="flex items-center justify-center space-x-12 w-full">
            <motion.div 
              className="glass p-8 rounded-2xl flex flex-col items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-3xl text-cyan-300 font-bold mb-4">KITCHEN</h3>
              <div className="text-2xl font-mono bg-navy-900/50 p-4 rounded-xl">ONE AT A TIME</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArrowRight size={64} className="text-slate-400" />
            </motion.div>

            <motion.div 
              className="glass p-8 rounded-2xl flex flex-col items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h3 className="text-3xl text-cyan-400 font-bold mb-4">OPENMP</h3>
              <div className="flex items-center space-x-3 text-2xl font-mono bg-navy-900/50 p-4 rounded-xl">
                <Lock className="text-amber-400" />
                <span>SYNCHRONIZATION</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-2 gap-8 w-full max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 2.0 } }
            }}
          >
            {keywords.map((kw, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={`glass p-6 text-center text-4xl font-mono font-bold ${kw.color}`}
              >
                #pragma omp {kw.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
};
