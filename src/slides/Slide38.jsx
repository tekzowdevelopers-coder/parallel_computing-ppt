import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'PARALLEL FOR',
  title: 'SEQUENTIAL LOOP',
  speakerNotes: 'A standard for loop processes iterations one at a time.',
  component: function Slide38() {
    return (
      <div className="slide-left">
        <div className="slide-label">38 / PARALLEL FOR</div>
        <motion.h1 
          className="text-6xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          SEQUENTIAL LOOP
        </motion.h1>
        
        <div className="flex gap-16 w-full max-w-6xl items-center">
          <motion.div 
            className="flex-1 bg-[#1e1e1e] rounded-xl border border-slate-700 shadow-2xl p-8 font-mono text-2xl leading-loose"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div><span className="text-blue-400">for</span><span className="text-slate-300">(</span><span className="text-blue-400">int</span> <span className="text-slate-300">i = 0; i &lt; 20; i++)</span></div>
            <div className="text-slate-300">{"{"}</div>
            <div className="text-green-300 ml-8">process(i);</div>
            <div className="text-slate-300">{"}"}</div>
          </motion.div>
          
          <div className="flex-[1.5] relative h-64 flex flex-col items-center justify-center glass rounded-2xl p-8">
            <div className="w-full h-16 border-2 border-dashed border-slate-600 rounded-full flex items-center px-4 relative overflow-hidden">
              <motion.div 
                className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold"
                animate={{ x: [0, 400] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              >
                <i>i</i>
              </motion.div>
              
              <div className="absolute right-4 w-20 h-20 text-6xl flex items-center justify-center">
                👨‍🍳
              </div>
            </div>
            <p className="mt-8 text-2xl text-slate-400 text-center">One iteration at a time.</p>
          </div>
        </div>
      </div>
    );
  }
};
