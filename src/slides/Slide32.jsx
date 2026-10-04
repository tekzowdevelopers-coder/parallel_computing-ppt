import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FIRST PROGRAM',
  title: 'THREAD SCHEDULING',
  speakerNotes: 'The OS decides when each thread runs. Thread execution order is non-deterministic.',
  component: function Slide32() {
    return (
      <div className="slide-left">
        <div className="slide-label">32 / FIRST PROGRAM</div>
        <motion.h1 
          className="text-6xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          THREAD SCHEDULING
        </motion.h1>
        
        <div className="w-full max-w-5xl flex flex-col gap-12">
          {/* Race Track */}
          <div className="w-full bg-slate-800 rounded-xl p-8 border border-slate-700 relative overflow-hidden">
            {/* Finish line */}
            <div className="absolute right-12 top-0 bottom-0 w-4 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#fff_20px)] opacity-50 z-0"></div>
            
            <div className="flex flex-col gap-6 relative z-10">
              {[
                { id: 0, duration: 2, delay: 0.5 },
                { id: 1, duration: 1.5, delay: 0.8 },
                { id: 2, duration: 1.2, delay: 0.6 },
                { id: 3, duration: 2.5, delay: 0.4 }
              ].map(t => (
                <div key={t.id} className="w-full h-12 bg-slate-900 rounded-full flex items-center px-4 relative">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                    initial={{ x: 0 }}
                    animate={{ x: 'calc(100% - 2.5rem - 3rem)' }} 
                    transition={{ delay: 1 + t.delay, duration: t.duration, ease: "easeInOut" }}
                  >
                    T{t.id}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-8 w-full">
            <motion.div 
              className="flex-1 glass p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4 }}
            >
              <h3 className="text-3xl text-red-400 font-bold mb-4 line-through decoration-red-500 decoration-4">
                0, 1, 2, 3
              </h3>
              <p className="text-xl text-slate-400">Order is NOT guaranteed</p>
            </motion.div>
            
            <motion.div 
              className="flex-[2] glass-strong p-8 flex items-center justify-center border-l-4 border-amber-500"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.5 }}
            >
              <p className="text-3xl text-white leading-relaxed">
                The operating system <span className="text-amber-400 font-bold">schedules</span> threads independently based on available CPU cores.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
};
