import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Split, RefreshCw, ArrowDown } from 'lucide-react';

export default function ScatterSimulator() {
  const [scattered, setScattered] = useState(false);
  const masterData = [10, 20, 30, 40];

  const handleScatter = () => {
    setScattered(true);
  };

  const handleReset = () => {
    setScattered(false);
  };

  return (
    <div className="w-full max-w-4xl glass p-6 rounded-2xl border border-slate-700/60 shadow-2xl flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Collective Communication
          </span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            MPI_Scatter <span className="text-sm font-mono text-cyan-400 font-normal">(ONE → MANY PORTIONS)</span>
          </h3>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleScatter}
            disabled={scattered}
            className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-navy-900 flex items-center gap-2 hover:brightness-110 shadow-lg disabled:opacity-50 transition-all"
          >
            <Split size={14} />
            SCATTER ARRAY
          </button>
          {scattered && (
            <button
              onClick={handleReset}
              className="px-3 py-2 rounded-xl text-xs font-mono bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10 flex items-center gap-1.5"
            >
              <RefreshCw size={12} />
              RESET
            </button>
          )}
        </div>
      </div>

      {/* Master Array on Root (Rank 0) */}
      <div className="flex flex-col items-center mb-8">
        <div className="glass p-5 rounded-2xl border-2 border-cyan-400 bg-[#0c1f3d] flex flex-col items-center shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-300 font-black px-2.5 py-0.5 rounded uppercase tracking-wider mb-2">
            ROOT (RANK 0) SEND BUFFER
          </span>
          <div className="flex gap-2">
            {masterData.map((val, idx) => (
              <motion.div
                key={idx}
                className="w-14 h-12 rounded-lg bg-cyan-950/80 border border-cyan-400/50 flex flex-col items-center justify-center font-mono font-extrabold text-cyan-300 text-base"
                animate={scattered ? { opacity: 0.3, scale: 0.9 } : { opacity: 1, scale: 1 }}
              >
                <span>{val}</span>
                <span className="text-[9px] text-cyan-400/60 font-normal">idx {idx}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="h-8 flex items-center justify-center">
          <ArrowDown size={22} className={`text-cyan-400 transition-opacity ${scattered ? 'opacity-100 animate-bounce' : 'opacity-30'}`} />
        </div>
      </div>

      {/* Receiving Process Slots */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {masterData.map((val, rank) => (
          <motion.div
            key={rank}
            className={`glass p-4 rounded-xl border flex flex-col items-center transition-all ${
              scattered
                ? 'border-emerald-500/80 bg-[#0a2320] shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                : 'border-slate-800 bg-[#0a0f1e]/60'
            }`}
            animate={scattered ? { scale: [1, 1.05, 1], y: [0, -4, 0] } : {}}
            transition={{ delay: rank * 0.1, duration: 0.3 }}
          >
            <div className="flex items-center justify-between w-full mb-2">
              <span className="text-xs font-mono font-bold text-slate-300">RANK {rank}</span>
              <span className="text-[10px] font-mono text-slate-500">Slice [{rank}]</span>
            </div>

            <div className={`w-full py-2.5 rounded text-center font-mono text-base font-extrabold border transition-all ${
              scattered
                ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50 shadow-inner'
                : 'bg-black/30 text-slate-600 border-white/5'
            }`}>
              {scattered ? val : '?'}
            </div>

            <span className="text-[10px] font-mono text-slate-400 mt-2">
              {scattered ? 'Portion Received' : 'Waiting for Chunk'}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Story summary */}
      <div className="mt-6 text-xs font-mono text-slate-400 text-center">
        Analogy: The kitchen manager divides 1000 orders into 4 batches of 250 and gives each chef exactly their own piece.
      </div>
    </div>
  );
}
