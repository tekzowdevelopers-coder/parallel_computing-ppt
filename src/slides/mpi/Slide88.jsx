import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default {
  section: 'FINAL CHALLENGE',
  title: 'THE FINAL MPI MENTAL MODEL',
  speakerNotes: 'This is your mental blueprint for every distributed problem.',
  component: function Slide88() {
    const steps = [
      "Big Problem",
      "Divide Work",
      "Isolated Processes",
      "MPI Messages",
      "Combine Results",
      "Output"
    ];

    return (
      <div className="slide">
        <div className="slide-label">88 / FINAL CHALLENGE</div>
        <motion.h1 
          className="text-6xl font-bold text-center text-white mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          THE FINAL MPI MENTAL MODEL
        </motion.h1>

        <div className="flex flex-wrap items-center justify-center gap-6 max-w-7xl mx-auto">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                className="bg-slate-800 border-2 border-cyan-500/30 rounded-2xl p-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-3xl font-bold text-cyan-300">{step}</h3>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 + 0.1 }}
                >
                  <ArrowRight className="w-12 h-12 text-slate-500" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
};
