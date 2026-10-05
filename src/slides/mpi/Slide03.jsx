import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, MessageSquare, UtensilsCrossed } from 'lucide-react';

export default {
  section: 'WHY MPI?',
  title: 'TODAY: MPI',
  speakerNotes: 'Today we break the single-computer barrier. Each worker is an independent process with private memory.',
  component: function Slide03() {
    return (
      <div className="slide">
        <div className="slide-label">03 / WHY MPI?</div>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <motion.h1 
            className="text-6xl font-bold text-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            TODAY: <span className="text-cyan-400">MPI</span>
          </motion.h1>

          <motion.div 
            className="w-full max-w-6xl glass p-10 rounded-3xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex justify-between items-center relative">
              {/* Network Line */}
              <div className="absolute top-1/2 left-10 right-10 h-2 bg-cyan-900/50 -translate-y-1/2 z-0" />
              <motion.div 
                className="absolute top-1/2 left-20 right-20 h-2 bg-cyan-400 -translate-y-1/2 z-0 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
              />

              {/* Moving packets */}
              {[1, 2, 3].map(i => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/4 h-4 w-12 bg-cyan-300 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] -translate-y-1/2 z-10"
                  animate={{ 
                    x: ['0%', '200%', '0%'],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    delay: i * 0.8,
                    ease: "linear"
                  }}
                />
              ))}

              {[1, 2, 3].map((num) => (
                <div key={num} className="bg-navy-900 border-2 border-cyan-500/30 p-8 rounded-2xl flex flex-col items-center z-20 space-y-4">
                  <Server size={64} className="text-cyan-400" />
                  <span className="text-2xl font-bold text-white">Computer {num}</span>
                  <div className="bg-indigo-900/40 p-4 rounded-xl border border-indigo-500/30 flex items-center space-x-3">
                    <Database className="text-indigo-400" size={24} />
                    <span className="text-lg text-indigo-200">Memory {String.fromCharCode(64 + num)}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-3xl text-center font-bold tracking-widest text-cyan-200 mt-12">
              MANY PROCESSES — MESSAGE PASSING
            </h3>
          </motion.div>

          <motion.div 
            className="flex items-center space-x-6 glass-strong px-10 py-6 rounded-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <UtensilsCrossed size={48} className="text-amber-400" />
            <div className="text-left">
              <h4 className="text-2xl font-bold text-amber-200">The Kitchen Analogy</h4>
              <p className="text-xl text-slate-300">Multiple independent kitchens communicating via couriers.</p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
};
