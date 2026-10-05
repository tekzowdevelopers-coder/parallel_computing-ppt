import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, RefreshCw, ArrowDown, Sigma } from 'lucide-react';

export default function ReduceSimulator() {
  const [reduced, setReduced] = useState(false);
  const [op, setOp] = useState('MPI_SUM'); // 'MPI_SUM' | 'MPI_MAX' | 'MPI_MIN' | 'MPI_PROD'
  const localValues = [10, 20, 30, 40];

  const getResult = () => {
    switch (op) {
      case 'MPI_SUM':
        return localValues.reduce((a, b) => a + b, 0); // 100
      case 'MPI_MAX':
        return Math.max(...localValues); // 40
      case 'MPI_MIN':
        return Math.min(...localValues); // 10
      case 'MPI_PROD':
        return localValues.reduce((a, b) => a * b, 1); // 240000
      default:
        return 100;
    }
  };

  const handleReduce = () => {
    setReduced(true);
  };

  const handleReset = () => {
    setReduced(false);
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
            MPI_Reduce <span className="text-sm font-mono text-cyan-400 font-normal">(MANY → ONE COMBINED)</span>
          </h3>
        </div>

        {/* Operation Selector & Trigger */}
        <div className="flex items-center gap-3">
          <div className="flex bg-black/40 p-1 rounded-xl border border-white/10">
            {['MPI_SUM', 'MPI_MAX', 'MPI_MIN', 'MPI_PROD'].map((name) => (
              <button
                key={name}
                onClick={() => {
                  setOp(name);
                  setReduced(false);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  op === name
                    ? 'bg-cyan-500 text-navy-900 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {name.replace('MPI_', '')}
              </button>
            ))}
          </div>

          <button
            onClick={handleReduce}
            disabled={reduced}
            className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-navy-900 flex items-center gap-2 hover:brightness-110 shadow-lg disabled:opacity-50 transition-all"
          >
            <Sigma size={14} />
            REDUCE
          </button>

          {reduced && (
            <button
              onClick={handleReset}
              className="p-2 rounded-xl text-xs font-mono bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              title="Reset"
            >
              <RefreshCw size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Input Process Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-6">
        {localValues.map((val, rank) => (
          <div
            key={rank}
            className="glass p-4 rounded-xl border border-slate-700/80 bg-[#0d162d] flex flex-col items-center"
          >
            <div className="flex items-center justify-between w-full mb-1">
              <span className="text-xs font-mono font-bold text-slate-300">RANK {rank}</span>
              <span className="text-[10px] font-mono text-slate-500">Node {rank}</span>
            </div>
            <div className="w-full py-2 rounded text-center font-mono text-base font-extrabold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
              {val}
            </div>
            <span className="text-[10px] font-mono text-slate-400 mt-2">Local Value</span>
          </div>
        ))}
      </div>

      {/* Reduction Flow Arrows */}
      <div className="h-8 flex items-center justify-center gap-3 text-cyan-400">
        <ArrowDown size={20} className={reduced ? 'animate-bounce' : 'opacity-30'} />
        <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest bg-cyan-950/80 px-3 py-0.5 rounded-full border border-cyan-500/30">
          OPERATOR: {op}
        </span>
        <ArrowDown size={20} className={reduced ? 'animate-bounce' : 'opacity-30'} />
      </div>

      {/* Reduced Combined Output Result on Root */}
      <div className="mt-6 flex flex-col items-center">
        <motion.div
          className={`glass p-6 rounded-2xl border-2 transition-all flex flex-col items-center min-w-[280px] ${
            reduced
              ? 'border-emerald-400 bg-[#092b21] shadow-[0_0_40px_rgba(16,185,129,0.5)]'
              : 'border-slate-800 bg-[#0a1122]'
          }`}
          animate={reduced ? { scale: [0.9, 1.08, 1] } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 font-black px-3 py-0.5 rounded uppercase tracking-wider mb-2">
            REDUCED RESULT ON ROOT (RANK 0)
          </span>

          <div className="text-4xl font-mono font-extrabold text-emerald-300 my-1">
            {reduced ? getResult().toLocaleString() : '...'}
          </div>

          <div className="text-xs font-mono text-slate-400 mt-1">
            {reduced
              ? op === 'MPI_SUM' ? '10 + 20 + 30 + 40 = 100' :
                op === 'MPI_MAX' ? 'max(10, 20, 30, 40) = 40' :
                op === 'MPI_MIN' ? 'min(10, 20, 30, 40) = 10' :
                '10 × 20 × 30 × 40 = 240,000'
              : 'Click REDUCE to perform operation'}
          </div>
        </motion.div>
      </div>

      {/* Difference note between Reduce and Allreduce */}
      <div className="mt-6 text-xs font-mono text-slate-400 text-center">
        <span className="text-cyan-300 font-semibold">Note:</span> With <code className="text-white">MPI_Reduce</code> only root receives the result. With <code className="text-white">MPI_Allreduce</code> every process gets the answer.
      </div>
    </div>
  );
}
