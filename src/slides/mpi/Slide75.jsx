import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database } from 'lucide-react';

export default {
  section: 'MPI + OPENMP',
  title: 'THE BIG TAKEAWAY',
  speakerNotes: 'Memorize this distinction: OpenMP shares memory; MPI shares messages.',
  component: function Slide75() {
    return (
      <div className="slide">
        <div className="slide-label">75 / MPI + OPENMP</div>
        
        <div className="flex flex-col items-center justify-center h-full space-y-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full flex items-center justify-around"
          >
            <div className="flex flex-col items-center">
              <h2 className="text-6xl font-bold text-cyan-400 mb-8">OPENMP</h2>
              <div className="text-8xl font-black text-white flex items-center space-x-6">
                <span>&rarr;</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">SHARE MEMORY</span>
              </div>
            </div>
            
            <div className="w-px h-64 bg-slate-700"></div>

            <div className="flex flex-col items-center">
              <h2 className="text-6xl font-bold text-amber-400 mb-8">MPI</h2>
              <div className="text-8xl font-black text-white flex items-center space-x-6">
                <span>&rarr;</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">SHARE MESSAGES</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="px-16 py-8 glass-strong rounded-full border-2 border-cyan-500/30"
          >
            <p className="text-4xl font-medium text-slate-200">
              OpenMP coordinates <span className="text-cyan-400 font-bold">threads</span>. MPI coordinates <span className="text-amber-400 font-bold">processes</span>.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
};
