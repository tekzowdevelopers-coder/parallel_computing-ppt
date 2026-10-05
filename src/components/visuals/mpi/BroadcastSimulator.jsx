import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, RefreshCw, ArrowDown } from 'lucide-react';

export default function BroadcastSimulator() {
  const [broadcasted, setBroadcasted] = useState(false);
  const [value, setValue] = useState(100);

  const handleBroadcast = () => {
    setBroadcasted(true);
  };

  const handleReset = () => {
    setBroadcasted(false);
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
            MPI_Bcast <span className="text-sm font-mono text-cyan-400 font-normal">(ONE → ALL)</span>
          </h3>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleBroadcast}
            disabled={broadcasted}
            className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-navy-900 flex items-center gap-2 hover:brightness-110 shadow-lg disabled:opacity-50 transition-all"
          >
            <Radio size={14} />
            BROADCAST VALUE
          </button>
          {broadcasted && (
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

      {/* Root Node (Rank 0) */}
      <div className="flex flex-col items-center relative mb-8">
        <div className="glass p-5 rounded-2xl border-2 border-cyan-400 bg-[#0c1f3d] flex flex-col items-center shadow-[0_0_30px_rgba(34,211,238,0.4)] w-48">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 font-black mb-1 tracking-wider">
            ROOT PROCESS
          </span>
          <span className="text-base font-mono font-bold text-white mb-2">RANK 0</span>
          <div className="w-full py-2 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-center font-mono font-extrabold text-cyan-300 text-lg shadow-inner">
            {value}
          </div>
        </div>

        {/* Downward broadcast rays */}
        <div className="h-10 flex items-center justify-center relative w-full">
          <ArrowDown size={24} className={`text-cyan-400 transition-opacity ${broadcasted ? 'opacity-100 animate-bounce' : 'opacity-30'}`} />
        </div>
      </div>

      {/* Target Nodes Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {[0, 1, 2, 3].map((rank) => (
          <motion.div
            key={rank}
            className={`glass p-4 rounded-xl border flex flex-col items-center transition-all ${
              broadcasted
                ? 'border-emerald-500/80 bg-[#0a2320] shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                : rank === 0
                ? 'border-cyan-500/40 bg-[#0d162d]'
                : 'border-slate-800 bg-[#0a0f1e]/60'
            }`}
            animate={broadcasted && rank !== 0 ? { scale: [1, 1.05, 1] } : {}}
            transition={{ delay: rank * 0.1, duration: 0.3 }}
          >
            <div className="flex items-center justify-between w-full mb-2">
              <span className="text-xs font-mono font-bold text-slate-300">RANK {rank}</span>
              <span className="text-[10px] font-mono text-slate-500">Kitchen {String.fromCharCode(65 + rank)}</span>
            </div>

            <div className={`w-full py-2 rounded text-center font-mono text-sm font-bold border transition-all ${
              broadcasted
                ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50'
                : rank === 0
                ? 'bg-cyan-950/40 text-cyan-300 border-cyan-500/20'
                : 'bg-black/30 text-slate-600 border-white/5'
            }`}>
              {broadcasted ? `buffer = ${value}` : rank === 0 ? `buffer = ${value}` : 'buffer = ?'}
            </div>

            <span className="text-[10px] font-mono text-slate-500 mt-2">
              {broadcasted ? 'Synchronized' : rank === 0 ? 'Source Data' : 'Awaiting Bcast'}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Story summary */}
      <div className="mt-6 text-xs font-mono text-slate-400 text-center">
        Analogy: Teacher announcing to the entire room. Every process ends up with an identical copy of the root's data.
      </div>
    </div>
  );
}
