import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default {
  section: 'PRACTICAL LAB',
  title: 'Lab 1: Hello OpenMP',
  speakerNotes: 'Start with the basics. Create the hello world program we just saw.',
  component: function Slide51() {
    const steps = [
      "Create hello.c",
      "Include OpenMP <omp.h>",
      "Create parallel region",
      "Print thread ID",
      "Compile & Run"
    ];

    return (
      <div className="slide-left">
        <div className="slide-label">51 / PRACTICAL LAB</div>
        
        <div className="flex flex-col h-full w-full">
          <motion.h1 
            className="text-6xl font-bold text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            LAB 1: HELLO OPENMP
          </motion.h1>

          <div className="flex gap-12 h-full">
            <motion.div 
              className="flex-1 glass p-10 rounded-3xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-cyan-400 mb-8">Instructions</h2>
              <ol className="space-y-6">
                {steps.map((step, i) => (
                  <motion.li 
                    key={i}
                    className="text-3xl text-slate-200 flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.2) }}
                  >
                    <span className="text-cyan-500 font-bold">{i+1}.</span>
                    <span>{step}</span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>

            <motion.div 
              className="flex-1 flex flex-col justify-end"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              <div className="bg-navy-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-slate-800 px-4 py-2 flex items-center space-x-2">
                  <Terminal size={20} className="text-slate-400" />
                  <span className="text-slate-400 font-mono text-sm">Terminal</span>
                </div>
                <div className="p-6 font-mono text-xl space-y-4">
                  <div className="text-slate-300">
                    <span className="text-green-400">$</span> gcc -fopenmp hello.c -o hello
                  </div>
                  <div className="text-slate-300">
                    <span className="text-green-400">$</span> ./hello
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
};
