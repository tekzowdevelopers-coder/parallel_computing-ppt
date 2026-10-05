import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle } from 'lucide-react';

export default {
  section: 'MPI FUNDAMENTALS',
  title: 'MPI PROGRAM LIFECYCLE',
  speakerNotes: 'Every MPI program follows this strict lifecycle: initialize first, do work and exchange messages, then finalize cleanly.',
  component: function Slide20() {
    const steps = [
      { id: 1, text: 'START PROGRAM', type: 'normal' },
      { id: 2, text: 'MPI_Init()', type: 'code' },
      { id: 3, text: 'Get Rank & Size', type: 'normal' },
      { id: 4, text: 'Compute & Message Pass', type: 'highlight' },
      { id: 5, text: 'MPI_Finalize()', type: 'code' },
      { id: 6, text: 'END PROGRAM', type: 'normal' },
    ];

    return (
      <div className="slide">
        <div className="slide-label">20 / MPI FUNDAMENTALS</div>
        <div className="flex flex-col items-center justify-center h-full w-full">
          
          <div className="flex flex-col items-center relative w-full max-w-3xl">
            
            {/* The central line */}
            <motion.div 
              className="absolute top-0 bottom-0 w-2 bg-cyan-900/50 rounded"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 2 }}
            />

            {steps.map((step, i) => (
              <motion.div 
                key={step.id}
                className={`relative flex items-center justify-center w-full my-4 py-4 px-8 rounded-xl border-2 z-10 font-bold text-2xl
                  ${step.type === 'normal' ? 'bg-slate-900 border-slate-700 text-slate-300' : ''}
                  ${step.type === 'code' ? 'bg-cyan-950 border-cyan-500 font-mono text-cyan-300' : ''}
                  ${step.type === 'highlight' ? 'bg-amber-950 border-amber-500 text-amber-300 py-8 text-3xl shadow-[0_0_30px_rgba(245,158,11,0.2)]' : ''}
                `}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.4 }}
              >
                {step.id === 1 && <Play className="absolute left-6 text-slate-500" />}
                {step.id === 6 && <CheckCircle className="absolute left-6 text-slate-500" />}
                
                {step.text}
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    );
  }
};
