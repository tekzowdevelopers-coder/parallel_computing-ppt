import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'PARALLEL FOR',
  title: 'PARALLEL LOOP',
  speakerNotes: 'Add one line and the loop iterations are automatically distributed among threads.',
  component: function Slide39() {
    return (
      <div className="slide-left">
        <div className="slide-label">39 / PARALLEL FOR</div>
        <motion.h1 
          className="text-6xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          PARALLEL LOOP
        </motion.h1>
        
        <div className="flex gap-12 w-full max-w-6xl items-center">
          <motion.div 
            className="flex-[1.2] bg-[#1e1e1e] rounded-xl border border-slate-700 shadow-2xl p-8 font-mono text-2xl leading-loose"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="text-cyan-400 font-bold bg-slate-800/80 -mx-4 px-4 py-2 rounded border-l-4 border-cyan-400 shadow-cyan mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              #pragma omp parallel for
            </motion.div>
            <div><span className="text-blue-400">for</span><span className="text-slate-300">(</span><span className="text-blue-400">int</span> <span className="text-slate-300">i = 0; i &lt; 20; i++)</span></div>
            <div className="text-slate-300">{"{"}</div>
            <div className="text-green-300 ml-8">process(i);</div>
            <div className="text-slate-300">{"}"}</div>
          </motion.div>
          
          <div className="flex-[1] flex flex-col gap-4">
            {[
              { t: 0, range: "0-4" },
              { t: 1, range: "5-9" },
              { t: 2, range: "10-14" },
              { t: 3, range: "15-19" }
            ].map((thread, idx) => (
              <motion.div 
                key={thread.t}
                className="glass p-4 flex items-center justify-between"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + idx * 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                  T{thread.t}
                </div>
                <div className="text-2xl font-mono text-amber-400">
                  {thread.range}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
