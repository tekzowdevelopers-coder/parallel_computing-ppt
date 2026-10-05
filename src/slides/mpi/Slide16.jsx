import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, ArrowRight } from 'lucide-react';

export default {
  section: 'MPI FUNDAMENTALS',
  title: 'RANK = IDENTITY',
  speakerNotes: 'Just as each branch kitchen has a branch number, each MPI process has a Rank.',
  component: function Slide16() {
    const mappings = [
      { k: 'Kitchen A', r: 'Rank 0' },
      { k: 'Kitchen B', r: 'Rank 1' },
      { k: 'Kitchen C', r: 'Rank 2' },
      { k: 'Kitchen D', r: 'Rank 3' }
    ];

    return (
      <div className="slide">
        <div className="slide-label">16 / MPI FUNDAMENTALS</div>
        <div className="flex flex-col items-center justify-center h-full w-full">
          
          <h2 className="text-6xl font-bold text-white mb-20">Identity in the Kitchen</h2>

          <div className="grid grid-cols-1 gap-6 w-full max-w-3xl">
            {mappings.map((m, i) => (
              <motion.div 
                key={m.k}
                className="flex items-center justify-between glass px-12 py-6 rounded-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="flex items-center space-x-4 w-1/3">
                  <UtensilsCrossed className="text-amber-400" size={32} />
                  <span className="text-3xl font-bold text-slate-200">{m.k}</span>
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + (i * 0.2) }}
                >
                  <ArrowRight size={40} className="text-slate-500" />
                </motion.div>

                <div className="w-1/3 text-right">
                  <span className="text-4xl font-black text-cyan-400 font-mono tracking-widest">{m.r}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    );
  }
};
