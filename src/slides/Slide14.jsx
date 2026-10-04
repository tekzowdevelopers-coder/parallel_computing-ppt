import React from 'react';
import { motion } from 'framer-motion';

const Slide14 = () => {
  return (
    <div className="slide">
      <div className="slide-label">03 / PROCESS & THREAD</div>
      <div className="flex flex-col items-center justify-center h-full w-full py-12">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-20 tracking-wider text-center"
        >
          WHAT IS A THREAD?
        </motion.h1>

        <div className="w-full max-w-5xl glass-strong border-4 border-cyan-500/50 rounded-[3rem] p-12 relative flex flex-col items-center shadow-[0_0_50px_rgba(6,182,212,0.15)]">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-8 bg-navy-900 border-2 border-cyan-500 px-8 py-2 rounded-full text-3xl font-mono font-bold text-cyan-300"
          >
            PROCESS (Container)
          </motion.div>

          <div className="w-full grid grid-cols-4 gap-8 mt-12">
            {[0, 1, 2, 3].map((thread) => (
              <motion.div
                key={thread}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1 + (thread * 0.3), type: 'spring', bounce: 0.4 }}
                className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-2 border-green-400/50 rounded-2xl h-64 flex flex-col items-center justify-center shadow-lg relative overflow-hidden"
              >
                {/* Wavy line animation for thread */}
                <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                  <motion.path 
                    d="M0,128 Q32,64 64,128 T128,128 T192,128 T256,128" 
                    fill="none" 
                    stroke="rgba(74, 222, 128, 1)" 
                    strokeWidth="4"
                    animate={{ x: [-128, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
                
                <span className="text-2xl font-bold text-white z-10 mb-2">THREAD</span>
                <span className="text-6xl font-mono font-black text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)] z-10">{thread}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-16 text-3xl text-secondary max-w-3xl text-center"
        >
          A thread is a lightweight unit of execution within a process. One process can have many threads.
        </motion.p>
      </div>
    </div>
  );
};

export default {
  section: 'PROCESS & THREAD',
  title: 'WHAT IS A THREAD?',
  speakerNotes: 'A thread is a lightweight unit of execution within a process. One process can have many threads.',
  component: Slide14
};
