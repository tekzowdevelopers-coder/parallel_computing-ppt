import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

export default {
  section: 'WHY MPI?',
  title: 'WHAT MPI IS NOT',
  speakerNotes: 'Important distinction: MPI is an API specification implemented by libraries like OpenMPI, MPICH, and MS-MPI.',
  component: function Slide11() {
    const nots = [
      'A programming language',
      'A compiler (like gcc)',
      'Hardware / CPUs',
      'An Operating System'
    ];

    return (
      <div className="slide">
        <div className="slide-label">11 / WHY MPI?</div>
        <div className="flex flex-col items-center justify-center h-full w-full px-20">
          
          <div className="grid grid-cols-2 gap-10 w-full mb-16">
            {nots.map((text, i) => (
              <motion.div 
                key={i}
                className="glass p-8 rounded-2xl flex items-center space-x-6 border-red-900/50 relative overflow-hidden"
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="absolute inset-0 bg-red-900/10 pointer-events-none" />
                <X size={48} className="text-red-500 z-10" />
                <span className="text-3xl text-slate-300 font-medium z-10 line-through decoration-red-500/50 decoration-4">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="w-full glass-strong border-green-500 p-12 rounded-3xl flex flex-col items-center text-center bg-green-950/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <CheckCircle size={80} className="text-green-400 mb-6" />
            <h2 className="text-5xl font-bold text-white mb-4">
              MPI IS A <span className="text-green-400">SPECIFICATION</span>
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl">
              It is an API standard. You install <strong>implementations</strong> of this standard, such as OpenMPI, MPICH, or MS-MPI.
            </p>
          </motion.div>

        </div>
      </div>
    );
  }
};
