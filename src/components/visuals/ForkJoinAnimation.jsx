import React from 'react';
import { motion } from 'framer-motion';

export default function ForkJoinAnimation({ stage = 'main', threadCount = 4, interactive = false, onFork, onJoin }) {
  const isParallel = stage === 'fork' || stage === 'parallel';
  const isComplete = stage === 'join' || stage === 'complete';

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto py-12">
      <div className="relative w-full h-64 flex justify-center items-center">
        <motion.div 
          className="absolute left-0 w-1/4 h-2 bg-cyan-500 glow-cyan rounded-full origin-left"
          animate={{ scaleX: stage !== 'main' ? 1 : 0.5 }}
        />

        <div className="absolute left-1/4 right-1/4 h-full flex flex-col justify-between py-4">
          {Array.from({ length: threadCount }).map((_, i) => (
            <div key={i} className="flex-1 flex items-center relative">
              <motion.div
                className="w-full h-2 bg-green-500 glow-green rounded-full origin-left"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: isParallel || isComplete ? 1 : 0,
                  opacity: isParallel || isComplete ? 1 : 0
                }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            </div>
          ))}
        </div>

        <motion.div
          className="absolute right-0 w-1/4 h-2 bg-cyan-500 glow-cyan rounded-full origin-left"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: isComplete ? 1 : 0,
            opacity: isComplete ? 1 : 0
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {interactive && (
        <div className="flex gap-8 mt-8">
          <button 
            onClick={onFork}
            disabled={stage !== 'main'}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white rounded-lg font-bold text-xl transition-colors"
          >
            FORK
          </button>
          <button 
            onClick={onJoin}
            disabled={stage !== 'parallel'}
            className="px-6 py-3 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white rounded-lg font-bold text-xl transition-colors"
          >
            JOIN
          </button>
        </div>
      )}
    </div>
  );
}
