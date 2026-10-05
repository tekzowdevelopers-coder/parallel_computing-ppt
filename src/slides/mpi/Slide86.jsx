import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FINAL CHALLENGE',
  title: 'BENCHMARK RESULTS TABLE',
  speakerNotes: 'Notice the efficiency metric: at 8 processes, efficiency drops below 60% due to message overhead.',
  component: function Slide86() {
    const results = [
      { p: 1, time: '1.20s', speedup: '1.00x', eff: '100%' },
      { p: 2, time: '0.62s', speedup: '1.93x', eff: '96.5%' },
      { p: 4, time: '0.35s', speedup: '3.42x', eff: '85.5%' },
      { p: 8, time: '0.26s', speedup: '4.61x', eff: '57.6%' }
    ];

    return (
      <div className="slide">
        <div className="slide-label">86 / FINAL CHALLENGE</div>
        <motion.h1 
          className="text-6xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          BENCHMARK RESULTS
        </motion.h1>

        <motion.div 
          className="w-full max-w-6xl mx-auto glass-strong rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-slate-800/80 border-b border-slate-700">
                <th className="p-6 text-3xl text-slate-400 font-medium">Processes (p)</th>
                <th className="p-6 text-3xl text-slate-400 font-medium border-l border-slate-700">Time (s)</th>
                <th className="p-6 text-3xl text-cyan-400 font-bold border-l border-slate-700">Speedup</th>
                <th className="p-6 text-3xl text-amber-400 font-bold border-l border-slate-700">Efficiency</th>
              </tr>
            </thead>
            <tbody>
              {results.map((row, i) => (
                <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="p-6 text-3xl text-slate-200 font-bold">{row.p}</td>
                  <td className="p-6 text-3xl text-slate-300 border-l border-slate-800">{row.time}</td>
                  <td className="p-6 text-3xl text-cyan-300 font-bold border-l border-slate-800">{row.speedup}</td>
                  <td className={`p-6 text-3xl font-bold border-l border-slate-800 ${i === 3 ? 'text-red-400' : 'text-amber-300'}`}>
                    {row.eff}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    );
  }
};
