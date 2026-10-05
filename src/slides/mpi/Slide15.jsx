import React from 'react';
import { motion } from 'framer-motion';
import { Hash } from 'lucide-react';

export default {
  section: 'MPI FUNDAMENTALS',
  title: 'RANK',
  speakerNotes: 'Rank is the unique identifier of a process within a communication group. Rank 0 is often the root or coordinator.',
  component: function Slide15() {
    return (
      <div className="slide">
        <div className="slide-label">15 / MPI FUNDAMENTALS</div>
        <div className="flex flex-col items-center justify-center h-full w-full">
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="mb-16 flex items-center space-x-6"
          >
            <Hash size={100} className="text-cyan-400" />
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-tighter">
              RANK
            </h1>
          </motion.div>

          <div className="flex space-x-8 w-full max-w-6xl justify-center mb-16">
            {[0, 1, 2, 3].map((r, i) => (
              <motion.div
                key={r}
                className={`w-56 h-40 rounded-3xl flex flex-col items-center justify-center border-4 relative overflow-hidden
                  ${r === 0 ? 'bg-amber-900/30 border-amber-500' : 'bg-cyan-900/20 border-cyan-800'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
              >
                {r === 0 && (
                  <div className="absolute top-0 w-full bg-amber-500 text-black text-xs font-bold text-center py-1 tracking-widest">
                    COORDINATOR
                  </div>
                )}
                <span className="text-2xl text-slate-400 mb-2 font-mono">Process {r}</span>
                <span className={`text-5xl font-black ${r === 0 ? 'text-amber-400' : 'text-cyan-400'}`}>
                  Rank {r}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="glass px-10 py-6 rounded-2xl border-l-8 border-l-cyan-500 max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="text-3xl text-slate-200">
              Always starts at <strong className="text-cyan-400">0</strong>, goes up to <strong className="text-cyan-400">Size - 1</strong>.
            </p>
          </motion.div>

        </div>
      </div>
    );
  }
};
