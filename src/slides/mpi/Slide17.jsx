import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'MPI FUNDAMENTALS',
  title: 'WHY RANK MATTERS',
  speakerNotes: 'Since every process runs the same code, we use if(rank==0) to assign different roles to different processes.',
  component: function Slide17() {
    return (
      <div className="slide">
        <div className="slide-label">17 / MPI FUNDAMENTALS</div>
        <div className="flex flex-col items-center justify-center h-full w-full px-10">
          
          <h2 className="text-5xl font-bold text-white mb-12">If everyone runs the same code...</h2>
          
          <div className="flex w-full space-x-12">
            
            {/* Code */}
            <motion.div 
              className="flex-1 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-[#0d1117]"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <div className="bg-slate-800 px-4 py-2 font-mono text-sm text-slate-400 border-b border-slate-700">
                main.c
              </div>
              <pre className="p-8 text-2xl font-mono leading-relaxed text-slate-300">
                <code className="text-pink-400">if</code> (rank == <span className="text-purple-400">0</span>) {'{\n'}
                <span className="text-green-400 ml-8">// Coordinator / Manager</span>
                <br/>
                <span className="text-cyan-300 ml-8">distribute_work();</span>
                <br/>
                {'}'} <code className="text-pink-400">else</code> {'{\n'}
                <span className="text-green-400 ml-8">// Worker Process</span>
                <br/>
                <span className="text-cyan-300 ml-8">receive_and_compute();</span>
                <br/>
                {'}'}
              </pre>
            </motion.div>

            {/* Visual */}
            <div className="flex-1 flex flex-col justify-center relative">
              <motion.div 
                className="bg-amber-900/30 border-2 border-amber-500 p-6 rounded-2xl text-center z-10 w-64 mx-auto mb-16"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-black text-amber-400">Rank 0</h3>
                <p className="text-amber-200/70 text-lg">Manager</p>
              </motion.div>

              <div className="flex justify-between w-full z-10">
                {[1, 2, 3].map((r, i) => (
                  <motion.div 
                    key={r}
                    className="bg-cyan-900/30 border-2 border-cyan-500 p-4 rounded-xl text-center w-32"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 + (i * 0.2) }}
                  >
                    <h3 className="text-xl font-bold text-cyan-400">Rank {r}</h3>
                    <p className="text-cyan-200/70 text-sm">Worker</p>
                  </motion.div>
                ))}
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                {[15, 50, 85].map((x, i) => (
                  <motion.path 
                    key={i}
                    d={`M 50% 25% L ${x}% 70%`} 
                    stroke="#f59e0b" 
                    strokeWidth="3" 
                    strokeDasharray="5 5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ delay: 1.5 + (i * 0.2) }}
                  />
                ))}
              </svg>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
};
