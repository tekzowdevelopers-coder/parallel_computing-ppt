import React from 'react';
import { motion } from 'framer-motion';
import { Network, Server, Cpu, HardDrive } from 'lucide-react';

export default function MPIHybridScene() {
  const nodes = [
    { id: 1, name: 'NODE 1', rank: 0, threads: [0, 1, 2, 3] },
    { id: 2, name: 'NODE 2', rank: 1, threads: [0, 1, 2, 3] },
    { id: 3, name: 'NODE 3', rank: 2, threads: [0, 1, 2, 3] },
  ];

  return (
    <div className="w-full max-w-4xl glass p-6 rounded-2xl border border-slate-700/60 shadow-2xl flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Advanced HPC Architecture
          </span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            Hybrid Computing: MPI + OpenMP
          </h3>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/80 text-purple-300 border border-purple-500/30">
          DISTRIBUTED + SHARED
        </span>
      </div>

      {/* Cluster Network Interconnect Top Bar */}
      <div className="w-full flex items-center justify-center relative mb-6">
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
        <div className="absolute bg-[#0f172a] px-4 py-1 rounded-full border border-cyan-400/50 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
          <Network size={14} className="text-cyan-400" />
          MPI NETWORK INTERCONNECT (InfiniBand / Ethernet)
        </div>
      </div>

      {/* Cluster Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {nodes.map((node, nodeIdx) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: nodeIdx * 0.15, duration: 0.5 }}
            className="glass p-5 rounded-2xl border border-slate-700/80 bg-[#0d172e] flex flex-col items-center shadow-xl relative overflow-hidden"
          >
            {/* Node identifier */}
            <div className="flex items-center justify-between w-full mb-3">
              <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                <Server size={14} className="text-cyan-400" /> {node.name}
              </span>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30 font-semibold">
                MPI RANK {node.rank}
              </span>
            </div>

            {/* Shared Node RAM Box */}
            <div className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 mb-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                <HardDrive size={13} className="text-emerald-400" /> Node RAM
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                SHARED BY THREADS
              </span>
            </div>

            {/* OpenMP Threads Container */}
            <div className="w-full p-3 rounded-xl bg-black/40 border border-purple-500/20">
              <div className="text-[10px] font-mono text-purple-300 uppercase tracking-wider mb-2 font-bold flex items-center justify-between">
                <span>OpenMP Team</span>
                <span className="text-slate-500">4 Cores</span>
              </div>

              <div className="grid grid-cols-4 gap-1.5">
                {node.threads.map((t) => (
                  <div
                    key={t}
                    className="p-1.5 rounded-lg bg-purple-950/40 border border-purple-500/30 text-center flex flex-col items-center justify-center"
                  >
                    <Cpu size={12} className="text-purple-400 mb-0.5" />
                    <span className="text-[9px] font-mono font-bold text-purple-200">T{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Role caption */}
            <div className="mt-3 text-[10px] font-mono text-slate-400 text-center">
              MPI communicates between nodes; OpenMP parallelizes inside the node.
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Matrix */}
      <div className="mt-6 w-full p-3.5 rounded-xl bg-black/40 border border-slate-800 flex items-center justify-around text-xs font-mono">
        <div className="text-center">
          <span className="text-slate-500 block text-[10px]">ACROSS COMPUTERS</span>
          <span className="text-cyan-300 font-bold">MPI (Message Passing)</span>
        </div>
        <span className="text-slate-600 font-bold">+</span>
        <div className="text-center">
          <span className="text-slate-500 block text-[10px]">WITHIN EACH COMPUTER</span>
          <span className="text-purple-300 font-bold">OpenMP (Shared Threads)</span>
        </div>
        <span className="text-slate-600 font-bold">=</span>
        <div className="text-center">
          <span className="text-slate-500 block text-[10px]">ULTIMATE SUPERCOMPUTING</span>
          <span className="text-emerald-300 font-bold">Hybrid HPC</span>
        </div>
      </div>
    </div>
  );
}
