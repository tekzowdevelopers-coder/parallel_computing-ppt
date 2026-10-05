import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FINAL CHALLENGE',
  title: 'MPI IN ONE SENTENCE',
  speakerNotes: 'If someone asks you in an interview what MPI is, give them this exact definition.',
  component: function Slide91() {
    return (
      <div className="slide">
        <div className="slide-label">91 / FINAL CHALLENGE</div>
        
        <div className="flex items-center justify-center h-full">
          <motion.div 
            className="max-w-6xl glass-strong p-16 rounded-[3rem] border border-amber-500/30 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-9xl text-amber-500/20 absolute top-8 left-8 font-serif leading-none">"</span>
            <p className="text-5xl leading-tight font-medium text-slate-200 text-center relative z-10 py-8 px-12">
              MPI is a <span className="text-cyan-400 font-bold">standardized portable programming interface</span> that enables <span className="text-amber-400 font-bold">independent processes</span> with <span className="text-green-400 font-bold">private memories</span> to communicate and coordinate their work using <span className="text-white font-bold underline decoration-amber-500">explicit message passing</span>.
            </p>
            <span className="text-9xl text-amber-500/20 absolute bottom-0 right-12 font-serif leading-none">"</span>
          </motion.div>
        </div>
      </div>
    );
  }
};
