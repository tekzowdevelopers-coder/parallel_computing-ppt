import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FIRST PROGRAM',
  title: 'RUN IT',
  speakerNotes: 'Compile with -fopenmp flag. Run it. Notice the output order.',
  component: function Slide30() {
    const lines = [
      { text: "$ gcc -fopenmp hello.c -o hello", delay: 0.5, typing: true },
      { text: "$ ./hello", delay: 2, typing: true },
      { text: "Hello from thread 0", delay: 3, typing: false },
      { text: "Hello from thread 2", delay: 3.1, typing: false },
      { text: "Hello from thread 1", delay: 3.2, typing: false },
      { text: "Hello from thread 3", delay: 3.3, typing: false }
    ];

    return (
      <div className="slide">
        <div className="slide-label">30 / FIRST PROGRAM</div>
        <motion.h1 
          className="text-6xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          RUN IT
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-4xl bg-black rounded-xl border border-slate-700 shadow-2xl p-8 font-mono text-2xl leading-loose"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-2 mb-6">
            <div className="w-4 h-4 rounded-full bg-slate-700"></div>
            <div className="w-4 h-4 rounded-full bg-slate-700"></div>
            <div className="w-4 h-4 rounded-full bg-slate-700"></div>
          </div>
          
          <div className="text-green-400">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: line.delay }}
                className={`${line.text.startsWith('$') ? 'text-cyan-400' : 'text-slate-300'}`}
              >
                {line.text}
              </motion.div>
            ))}
            <motion.div 
              className="w-4 h-8 bg-slate-400 mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              style={{ display: 'inline-block' }}
            />
          </div>
        </motion.div>
      </div>
    );
  }
};
