import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, UtensilsCrossed } from 'lucide-react';

export default function ProcessVisualizer({ initialCount = 4, showSlider = true }) {
  const [processCount, setProcessCount] = useState(initialCount);

  const colors = ['#22d3ee', '#38bdf8', '#818cf8', '#a78bfa', '#f472b6', '#fb7185', '#fb923c', '#4ade80'];

  return (
    <div className="w-full max-w-4xl glass p-6 rounded-2xl border border-slate-700/60 shadow-2xl flex flex-col items-center">
      {/* Header & Controls */}
      <div className="w-full flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            MPI Environment
          </span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            Isolated Process Spaces <span className="text-xs font-mono font-normal text-slate-400">(Private Memory)</span>
          </h3>
        </div>

        {showSlider && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">Processes (-n):</span>
            {[1, 2, 4, 8].map((count) => (
              <button
                key={count}
                onClick={() => setProcessCount(count)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all font-semibold ${
                  processCount === count
                    ? 'bg-cyan-500 text-navy-900 shadow-[0_0_12px_rgba(34,211,238,0.5)]'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {count}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid of Processes */}
      <div className={`grid gap-4 w-full ${
        processCount === 1 ? 'grid-cols-1 max-w-sm' :
        processCount === 2 ? 'grid-cols-2 max-w-xl' :
        processCount === 4 ? 'grid-cols-2 md:grid-cols-4' :
        'grid-cols-2 md:grid-cols-4 lg:grid-cols-8'
      }`}>
        {Array.from({ length: processCount }).map((_, rank) => {
          const color = colors[rank % colors.length];
          return (
            <motion.div
              key={rank}
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: rank * 0.08, duration: 0.4 }}
              className="glass p-4 rounded-xl border border-slate-700/60 flex flex-col items-center relative overflow-hidden bg-[#0d162d]"
              style={{
                boxShadow: `0 0 20px ${color}15`,
              }}
            >
              {/* Rank Header */}
              <div
                className="w-full text-center py-1 rounded-md text-xs font-mono font-bold mb-3"
                style={{
                  backgroundColor: `${color}25`,
                  color: color,
                  border: `1px solid ${color}50`,
                }}
              >
                RANK {rank}
              </div>

              {/* Kitchen badge */}
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mb-3">
                <UtensilsCrossed size={12} className="text-slate-400" />
                Kitchen {String.fromCharCode(65 + rank)}
              </div>

              {/* CPU Core Representation */}
              <div className="w-full flex items-center justify-between p-2 rounded bg-black/30 border border-white/5 mb-2">
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <Cpu size={12} className="text-cyan-400" /> CPU
                </span>
                <span className="text-[10px] font-mono text-cyan-300 font-semibold">PID {2400 + rank}</span>
              </div>

              {/* Isolated Private Memory Box */}
              <div className="w-full p-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 flex flex-col gap-1 text-left">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-0.5">
                  <span className="flex items-center gap-1 text-slate-300 font-semibold">
                    <HardDrive size={10} style={{ color }} /> Private RAM
                  </span>
                  <span className="text-[9px] text-amber-400 font-mono">ISOLATED</span>
                </div>
                <div className="text-[10px] font-mono text-slate-300 bg-black/40 px-1.5 py-0.5 rounded">
                  addr: 0x{((rank + 1) * 0x1a40).toString(16)}
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-black/40 px-1.5 py-0.5 rounded flex justify-between">
                  <span>data:</span>
                  <span>{100 * (rank + 1)}</span>
                </div>
              </div>

              {/* Distinct boundary note */}
              <div className="mt-2 text-[9px] font-mono text-slate-500 text-center tracking-tight">
                No Direct RAM Access
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer takeaway */}
      <div className="mt-6 text-center text-xs font-mono text-slate-400 max-w-xl">
        Each process has its own address space. Process 0 <span className="text-red-400 font-semibold">CANNOT</span> read Process 1's memory directly. They must exchange messages.
      </div>
    </div>
  );
}
