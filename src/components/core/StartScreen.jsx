import { motion } from 'framer-motion';
import { Play, Cpu, Network, Zap, Layers, Sparkles } from 'lucide-react';

export default function StartScreen({ onSelectModule }) {
  return (
    <div className="w-screen h-screen bg-navy-900 flex flex-col items-center justify-center relative overflow-hidden select-none">
      {/* Animated background particles */}
      <div className="particles-bg">
        {Array.from({ length: 45 }).map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
            animate={{
              y: [0, -35, 0],
              opacity: [0.1, 0.45, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Workshop Series Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-[0.3em] text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 uppercase mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Sparkles size={14} className="text-cyan-400" />
          Interactive Parallel Computing Workshop
        </motion.div>

        {/* Master Heading */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Parallel Computing Series
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          From single-machine multi-threading to multi-node distributed clusters. Select a module to begin:
        </motion.p>

        {/* Module Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10 text-left">
          {/* Module 1: OpenMP */}
          <motion.div
            className="group relative p-8 rounded-2xl glass border border-slate-700/60 hover:border-cyan-500/60 transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-2xl bg-[#0e172a]/70"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ y: -6, boxShadow: '0 0 35px rgba(6,182,212,0.25)' }}
            onClick={() => onSelectModule('openmp')}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-950/80 border border-cyan-500/30">
                  DAY 1
                </span>
                <span className="text-xs font-mono text-slate-500">60 SLIDES</span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <Cpu size={28} className="text-cyan-400" />
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  OpenMP
                </h3>
              </div>

              <p className="text-sm text-slate-400 mb-5 leading-relaxed font-light">
                Shared-memory parallelism. CPU cores, threads, fork-join model, race conditions, and work-sharing loops in one kitchen.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Threads', 'Shared Memory', 'Fork-Join', 'Pragma OMP', 'Mutex/Lock'].map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 bg-slate-800 text-slate-200 group-hover:bg-cyan-500 group-hover:text-navy-900 transition-all">
              <Play size={16} fill="currentColor" />
              START DAY 1
            </button>
          </motion.div>

          {/* Module 2: MPI */}
          <motion.div
            className="group relative p-8 rounded-2xl glass border border-cyan-500/40 hover:border-cyan-400 transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-2xl bg-[#0f1d3a]/80"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ y: -6, boxShadow: '0 0 45px rgba(34,211,238,0.35)' }}
            onClick={() => onSelectModule('mpi')}
          >
            {/* New Module Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-blue-600 text-navy-900 text-[10px] font-mono font-black uppercase px-4 py-1 rounded-bl-xl tracking-wider">
              NEW MODULE
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-900/60 border border-cyan-400/40">
                  DAY 2
                </span>
                <span className="text-xs font-mono text-cyan-300/80 font-medium">95 SLIDES</span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <Network size={28} className="text-cyan-300" />
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  MPI Distributed
                </h3>
              </div>

              <p className="text-sm text-slate-300 mb-5 leading-relaxed font-light">
                Distributed-memory computing. Communicating processes, point-to-point messages, collectives (Broadcast, Scatter, Gather, Reduce), and hybrid HPC.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Processes', 'Message Passing', 'Communicator', 'Collectives', 'Hybrid HPC'].map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950/40 text-cyan-200 border border-cyan-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-navy-900 hover:brightness-110 shadow-lg transition-all">
              <Play size={16} fill="currentColor" />
              START DAY 2 (MPI)
            </button>
          </motion.div>
        </div>

        {/* Keyboard hints */}
        <motion.p
          className="text-xs text-slate-500 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Navigation: <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">→</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">Space</kbd> next
          {' · '}
          <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">←</kbd> prev
          {' · '}
          <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">F</kbd> fullscreen
          {' · '}
          <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">P</kbd> presenter mode
        </motion.p>
      </motion.div>

      {/* Bottom decorative bar */}
      <motion.div
        className="absolute bottom-6 flex items-center gap-6 text-slate-600 text-xs font-mono tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <span className="flex items-center gap-1.5"><Cpu size={14} /> OpenMP Multi-Threading</span>
        <span>•</span>
        <span className="flex items-center gap-1.5"><Network size={14} /> MPI Distributed Clusters</span>
        <span>•</span>
        <span className="flex items-center gap-1.5"><Layers size={14} /> Hybrid Computing</span>
      </motion.div>
    </div>
  );
}
