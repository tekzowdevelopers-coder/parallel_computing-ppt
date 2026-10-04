import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const Slide12 = () => {
  return (
    <div className="slide">
      <div className="slide-label">02 / CPU</div>
      <div className="flex flex-col items-center justify-center h-full w-full pt-8">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-wider"
        >
          SEQUENTIAL VS PARALLEL
        </motion.h1>

        <div className="flex w-full max-w-7xl h-[500px] space-x-12">
          {/* Sequential Column */}
          <div className="flex-1 glass p-8 rounded-3xl flex flex-col border-t-4 border-amber-500 relative">
            <h2 className="text-4xl font-bold text-amber-500 mb-8 text-center">SEQUENTIAL</h2>
            <div className="flex flex-col space-y-4 flex-1">
              {[0, 1, 2, 3].map((task) => (
                <div key={task} className="w-full h-16 bg-slate-800 rounded-lg overflow-hidden border border-slate-700 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1 + (task * 2), duration: 2, ease: "linear" }}
                    className="h-full bg-amber-500/50"
                  />
                  <div className="absolute inset-0 flex items-center px-6">
                    <span className="text-xl font-bold text-white">TASK {task + 1}</span>
                  </div>
                </div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 9 }}
              className="absolute bottom-8 right-8 flex items-center text-amber-400 text-2xl font-mono font-bold"
            >
              <Clock className="mr-2" /> 8.0s
            </motion.div>
          </div>

          {/* Parallel Column */}
          <div className="flex-1 glass p-8 rounded-3xl flex flex-col border-t-4 border-cyan-500 relative">
            <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">PARALLEL</h2>
            <div className="flex flex-col space-y-4 flex-1">
              {[0, 1, 2, 3].map((task) => (
                <div key={task} className="w-full h-16 bg-slate-800 rounded-lg overflow-hidden border border-slate-700 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 2, ease: "linear" }}
                    className="h-full bg-cyan-500/60"
                  />
                  <div className="absolute inset-0 flex items-center px-6">
                    <span className="text-xl font-bold text-white">TASK {task + 1}</span>
                  </div>
                </div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="absolute bottom-8 right-8 flex items-center text-cyan-300 text-2xl font-mono font-bold"
            >
              <Clock className="mr-2" /> 2.0s
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  section: 'CPU',
  title: 'SEQUENTIAL VS PARALLEL',
  speakerNotes: 'Watch the difference. Same workload, but parallel finishes much sooner.',
  component: Slide12
};
