import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Slide18 = () => {
  const steps = [
    { text: 'YOUR C PROGRAM', color: 'text-white border-slate-500' },
    { text: 'OPENMP', color: 'text-cyan-400 border-cyan-500 bg-cyan-900/20' },
    { text: 'CREATE THREADS', color: 'text-green-400 border-green-500' },
    { text: 'DIVIDE WORK', color: 'text-amber-400 border-amber-500' },
    { text: 'RUN IN PARALLEL', color: 'text-purple-400 border-purple-500 bg-purple-900/20' }
  ];

  return (
    <div className="slide">
      <div className="slide-label">04 / OPENMP</div>
      <div className="flex flex-col items-center py-12 h-full w-full">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-7xl font-bold text-white mb-12"
        >
          WHAT DOES OPENMP DO?
        </motion.h1>

        <div className="flex flex-col items-center w-full max-w-2xl mt-8">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5 + (i * 1.5), duration: 0.5 }}
                className={`w-full py-6 rounded-2xl text-center text-3xl font-bold border-2 ${step.color} shadow-lg backdrop-blur-md`}
              >
                {step.text}
              </motion.div>
              
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 40 }}
                  transition={{ delay: 1.5 + (i * 1.5), duration: 0.5 }}
                  className="flex justify-center items-center my-2 text-secondary"
                >
                  <ArrowDown size={32} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default {
  section: 'OPENMP',
  title: 'WHAT DOES OPENMP DO?',
  speakerNotes: 'OpenMP takes your existing C program and handles thread creation and work distribution automatically.',
  component: Slide18
};
