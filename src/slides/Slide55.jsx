import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'PRACTICAL LAB',
  title: 'Performance Challenge',
  speakerNotes: 'Record your results for different thread counts. Do you see linear speedup?',
  component: function Slide55() {
    const rows = [
      { t: "1 Thread", time: "", speedup: "1.0x" },
      { t: "2 Threads", time: "", speedup: "" },
      { t: "4 Threads", time: "", speedup: "" },
      { t: "8 Threads", time: "", speedup: "" }
    ];

    return (
      <div className="slide">
        <div className="slide-label">55 / PRACTICAL LAB</div>
        
        <div className="flex flex-col h-full w-full justify-center items-center">
          <motion.h1 
            className="text-6xl font-bold text-amber-400 mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            PERFORMANCE CHALLENGE
          </motion.h1>

          <motion.table 
            className="w-full max-w-5xl text-3xl text-left border-collapse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <thead>
              <tr className="border-b-4 border-slate-700">
                <th className="py-6 px-8 text-white font-bold">Configuration</th>
                <th className="py-6 px-8 text-white font-bold">Execution Time</th>
                <th className="py-6 px-8 text-white font-bold">Speedup</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr 
                  key={i} 
                  className="border-b border-slate-800 bg-slate-900/40"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (i * 0.2) }}
                >
                  <td className="py-6 px-8 font-mono text-cyan-300">{row.t}</td>
                  <td className="py-6 px-8">
                    <div className="h-10 w-32 bg-slate-800 rounded animate-pulse opacity-50"></div>
                  </td>
                  <td className="py-6 px-8 text-green-400 font-mono font-bold">
                    {row.speedup ? row.speedup : <div className="h-10 w-24 bg-slate-800 rounded animate-pulse opacity-50"></div>}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    );
  }
};
