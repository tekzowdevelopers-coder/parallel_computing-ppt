import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FINAL CHALLENGE',
  title: 'THE PARALLEL COMPUTING EVOLUTION',
  speakerNotes: 'You now understand both paradigms of parallel computing: shared memory and distributed memory.',
  component: function Slide92() {
    const stages = [
      { day: "DAY 1", title: "OpenMP", sub: "Threads + Shared RAM", color: "from-cyan-500 to-blue-500", border: "border-cyan-400" },
      { day: "DAY 2", title: "MPI", sub: "Processes + Message Passing", color: "from-amber-500 to-orange-500", border: "border-amber-400" },
      { day: "PRODUCTION", title: "MPI + OpenMP", sub: "Hybrid Supercomputing", color: "from-purple-500 to-pink-500", border: "border-purple-400" }
    ];

    return (
      <div className="slide">
        <div className="slide-label">92 / FINAL CHALLENGE</div>
        <motion.h1 
          className="text-6xl font-bold text-center text-white mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          THE PARALLEL COMPUTING EVOLUTION
        </motion.h1>

        <div className="flex justify-center items-stretch gap-8 max-w-7xl mx-auto h-80">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              className={`flex-1 glass-strong rounded-3xl p-8 flex flex-col justify-center items-center border-t-4 ${stage.border} relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
            >
              <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${stage.color}`}></div>
              <h4 className="text-2xl font-bold text-slate-400 mb-4 z-10">{stage.day}</h4>
              <h2 className="text-5xl font-black text-white mb-4 z-10">{stage.title}</h2>
              <p className="text-2xl text-slate-300 text-center z-10">{stage.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
};
