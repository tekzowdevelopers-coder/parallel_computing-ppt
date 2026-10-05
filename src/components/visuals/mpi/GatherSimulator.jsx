import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Merge, RefreshCw, ArrowUp } from 'lucide-react';

export default function GatherSimulator() {
  const [gathered, setGathered] = useState(false);
  const localData = [10, 20, 30, 40];

  const handleGather = () => {
    setGathered(true);
  };

  const handleReset = () => {
    setGathered(false);
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
            MPI_Gather <span className="text-sm font-mono text-cyan-400 font-normal">(MANY → ONE)</span>
          </h3>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleGather}
            disabled={gathered}
            className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-navy-900 flex items-center gap-2 hover:brightness-110 shadow-lg disabled:opacity-50 transition-all"
          >
            <Merge size={14} />
            GATHER TO ROOT
          </button>
          {gathered && (
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

      {/* Root Gathering Array (Rank 0) at Top */}
      <div className="flex flex-col items-center mb-6">
        <div className={`glass p-5 rounded-2xl border-2 transition-all flex flex-col items-center ${
          gathered
            ? 'border-emerald-400 bg-[#0a2720] shadow-[0_0_35px_rgba(16,185,129,0.4)]'
            : 'border-slate-700 bg-[#0c1f3d]'
        }`}>
          <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 font-black px-2.5 py-0.5 rounded uppercase tracking-wider mb-2">
            ROOT (RANK 0) RECEIVE BUFFER
          </span>
          <div className="flex gap-2">
            {localData.map((val, idx) => (
              <motion.div
                key={idx}
                className={`w-14 h-12 rounded-lg flex flex-col items-center justify-center font-mono font-extrabold text-base border transition-all ${
                  gathered
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-500/60 shadow-inner'
                    : 'bg-black/40 text-slate-600 border-white/5'
                }`}
                animate={gathered ? { scale: [0.8, 1.1, 1] } : {}}
                transition={{ delay: idx * 0.08 }}
              >
                <span>{gathered ? val : '?'}</span>
                <span className="text-[9px] text-slate-500 font-normal">[{idx}]</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="h-8 flex items-center justify-center">
          <ArrowUp size={22} className={`text-emerald-400 transition-opacity ${gathered ? 'opacity-100 animate-bounce' : 'opacity-30'}`} />
        </div>
      </div>

      {/* Sending Ranks */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {localData.map((val, rank) => (
          <div
            key={rank}
            className="glass p-4 rounded-xl border border-slate-700/80 bg-[#0d162d] flex flex-col items-center"
          >
            <div className="flex items-center justify-between w-full mb-2">
              <span className="text-xs font-mono font-bold text-slate-300">RANK {rank}</span>
              <span className="text-[10px] font-mono text-cyan-400">Local Result</span>
            </div>

            <div className="w-full py-2 rounded text-center font-mono text-base font-extrabold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
              {val}
            </div>

            <span className="text-[10px] font-mono text-slate-500 mt-2">
              {gathered ? 'Transmitted → Root' : 'Ready to Send'}
            </span>
          </div>
        ))}
      </div>

      {/* Story summary */}
      <div className="mt-6 text-xs font-mono text-slate-400 text-center">
        Analogy: All 4 kitchens finish their individual dishes and bring them back to the head counter to assemble the final order.
      </div>
    </div>
  );
}
