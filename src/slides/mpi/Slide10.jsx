import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Network } from 'lucide-react';

export default {
  section: 'WHY MPI?',
  title: 'WHAT IS MPI?',
  speakerNotes: 'MPI stands for Message Passing Interface. It is the gold standard for high-performance distributed computing.',
  component: function Slide10() {
    return (
      <div className="slide">
        <div className="slide-label">10 / WHY MPI?</div>
        <div className="flex flex-col items-center justify-center h-full space-y-16">
          
          <motion.div 
            className="flex items-center space-x-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-600">
              MPI
            </h1>
            <ArrowRight size={80} className="text-slate-500" />
            <div className="flex flex-col text-left">
              <span className="text-6xl font-bold text-cyan-400">Message</span>
              <span className="text-6xl font-bold text-cyan-300">Passing</span>
              <span className="text-6xl font-bold text-cyan-200">Interface</span>
            </div>
          </motion.div>

          <motion.div 
            className="glass p-12 rounded-3xl max-w-5xl border-l-8 border-l-cyan-500 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Network className="absolute -right-10 -bottom-10 text-cyan-900/30" size={250} />
            <p className="text-4xl text-slate-200 leading-relaxed font-light italic relative z-10">
              "A <strong className="text-cyan-300">standardized</strong> and <strong className="text-cyan-300">portable</strong> message-passing system designed to function on parallel computing architectures."
            </p>
          </motion.div>

        </div>
      </div>
    );
  }
};
