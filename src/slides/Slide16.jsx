import React from 'react';
import { motion } from 'framer-motion';
import { Database, ArrowUp } from 'lucide-react';

const Slide16 = () => {
  return (
    <div className="slide">
      <div className="slide-label">03 / PROCESS & THREAD</div>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-20 tracking-wider"
        >
          THREADS SHARE MEMORY
        </motion.h1>

        <div className="flex flex-col items-center w-full max-w-4xl relative">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="glass-strong border-2 border-amber-500 rounded-3xl p-8 w-full mb-24 shadow-[0_0_40px_rgba(245,158,11,0.2)] flex justify-between items-center z-10"
          >
            <div className="flex items-center space-x-4">
              <Database size={48} className="text-amber-500" />
              <h2 className="text-4xl font-bold text-amber-500">SHARED MEMORY</h2>
            </div>
            <div className="flex space-x-4">
              <span className="bg-navy-900 px-4 py-2 rounded font-mono text-cyan-300 border border-cyan-900">Arrays</span>
              <span className="bg-navy-900 px-4 py-2 rounded font-mono text-green-300 border border-green-900">Variables</span>
              <span className="bg-navy-900 px-4 py-2 rounded font-mono text-purple-300 border border-purple-900">Data</span>
            </div>
          </motion.div>

          <div className="flex justify-center w-full space-x-24 relative">
            {[0, 1, 2].map((thread) => (
              <motion.div key={thread} className="flex flex-col items-center relative">
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 100 }}
                  transition={{ delay: 1.5 + (thread * 0.3), duration: 0.8 }}
                  className="absolute bottom-full mb-4 w-1 bg-gradient-to-t from-cyan-500 to-amber-500 flex justify-center"
                >
                  <motion.div 
                    animate={{ y: [0, -100] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 + (thread * 0.3) }}
                    className="text-amber-400 absolute -top-4"
                  >
                    <ArrowUp size={24} />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + (thread * 0.3) }}
                  className="bg-slate-800 border-2 border-cyan-500 px-6 py-4 rounded-xl shadow-lg z-10"
                >
                  <span className="text-2xl font-bold text-white">THREAD {thread}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default {
  section: 'PROCESS & THREAD',
  title: 'THREADS SHARE MEMORY',
  speakerNotes: 'All threads within a process share the same memory space. This is powerful but also dangerous.',
  component: Slide16
};
