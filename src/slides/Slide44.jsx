import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'PERFORMANCE',
  title: 'Is Parallel Always Faster?',
  speakerNotes: 'Parallel execution is not free. Creating threads, synchronizing, and managing memory all add overhead.',
  component: function Slide44() {
    const overheads = [
      "THREAD CREATION",
      "SYNCHRONIZATION",
      "MEMORY ACCESS",
      "SCHEDULING"
    ];

    return (
      <div className="slide">
        <div className="slide-label">44 / PERFORMANCE</div>
        
        <div className="flex flex-col h-full w-full justify-center items-center">
          <motion.h1 
            className="text-[12rem] font-bold text-red-500 leading-none drop-shadow-[0_0_30px_rgba(239,68,68,0.4)]"
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
          >
            NO.
          </motion.h1>

          <motion.div 
            className="grid grid-cols-2 gap-8 mt-24 w-full max-w-5xl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3, delayChildren: 1.5 } }
            }}
          >
            {overheads.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="glass p-8 rounded-2xl flex justify-center items-center border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-500/10 to-transparent"
              >
                <span className="text-3xl font-bold tracking-wider text-slate-200">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
};
