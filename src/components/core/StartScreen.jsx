import { motion } from 'framer-motion';
import { Play, Cpu, Zap } from 'lucide-react';

export default function StartScreen({ onStart }) {
  return (
    <div className="w-screen h-screen bg-navy-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="particles-bg">
        {Array.from({ length: 40 }).map((_, i) => (
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
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
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
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Day label */}
        <motion.div
          className="text-xs font-mono tracking-[0.4em] text-cyan-400/60 uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Workshop — Day 1
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Parallel Computing
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-4xl font-light mb-8"
          style={{ color: '#22d3ee' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          with OpenMP
        </motion.h2>

        {/* Tech badges */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {['C', 'GCC', 'OpenMP'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono text-cyan-300/70 border border-cyan-400/20"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Start button */}
        <motion.button
          onClick={onStart}
          className="group relative px-10 py-4 rounded-2xl font-semibold text-lg text-white overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34,211,238,0.4)' }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center gap-3">
            <Play size={20} fill="white" />
            START WORKSHOP
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Keyboard hint */}
        <motion.p
          className="mt-6 text-xs text-slate-500 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Press <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">→</kbd> to navigate
          {' · '}
          <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">F</kbd> fullscreen
          {' · '}
          <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">P</kbd> presenter
        </motion.p>
      </motion.div>

      {/* Bottom icons */}
      <motion.div
        className="absolute bottom-12 flex items-center gap-8 text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <Cpu size={24} />
        <Zap size={24} />
        <div className="text-xs font-mono tracking-wider">THINK PARALLEL</div>
        <Zap size={24} />
        <Cpu size={24} />
      </motion.div>
    </div>
  );
}
