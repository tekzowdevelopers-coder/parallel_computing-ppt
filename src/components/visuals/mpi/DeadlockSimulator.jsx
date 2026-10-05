import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Lock, Unlock, RefreshCw, ArrowRight, ArrowLeft } from 'lucide-react';

export default function DeadlockSimulator() {
  const [mode, setMode] = useState('deadlocked'); // 'deadlocked' | 'resolved'
  const [isRunning, setIsRunning] = useState(false);
  const [executed, setExecuted] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setExecuted(false);
    setTimeout(() => {
      setIsRunning(false);
      setExecuted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsRunning(false);
    setExecuted(false);
  };

  return (
    <div className="w-full max-w-4xl glass p-6 rounded-2xl border border-slate-700/60 shadow-2xl flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">
            Concurrency Hazard
          </span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            MPI Deadlock Simulator
          </h3>
        </div>

        {/* Toggle Mode */}
        <div className="flex items-center gap-3">
          <div className="flex bg-black/40 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => {
                setMode('deadlocked');
                handleReset();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                mode === 'deadlocked'
                  ? 'bg-red-500 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Lock size={12} />
              CIRCULAR WAIT
            </button>
            <button
              onClick={() => {
                setMode('resolved');
                handleReset();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                mode === 'resolved'
                  ? 'bg-emerald-500 text-navy-900 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Unlock size={12} />
              FIXED (ORDERED)
            </button>
          </div>

          <button
            onClick={handleRun}
            disabled={isRunning}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              mode === 'deadlocked'
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-emerald-500 hover:bg-emerald-400 text-navy-900'
            }`}
          >
            {isRunning ? 'EXECUTING...' : 'RUN SCENARIO'}
          </button>
        </div>
      </div>

      {/* Main Dual Process Display */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-4 relative">
        {/* Process 0 */}
        <div className={`glass p-6 rounded-2xl border transition-all flex flex-col items-center ${
          executed && mode === 'deadlocked'
            ? 'border-red-500 bg-red-950/40 shadow-[0_0_30px_rgba(239,68,68,0.4)]'
            : executed && mode === 'resolved'
            ? 'border-emerald-500 bg-emerald-950/30'
            : 'border-slate-700 bg-[#0d162d]'
        }`}>
          <div className="flex items-center justify-between w-full mb-3">
            <span className="text-xs font-mono font-bold text-white px-2.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/40">
              PROCESS 0
            </span>
            <span className="text-xs font-mono text-slate-400">Kitchen A</span>
          </div>

          <div className="w-full bg-black/60 rounded-xl p-4 font-mono text-xs text-left mb-4 border border-white/5 space-y-1">
            <div className="text-slate-500">// Code for Rank 0</div>
            {mode === 'deadlocked' ? (
              <>
                <div className="text-amber-300 font-semibold">MPI_Recv(..., from: 1); // BLOCKING</div>
                <div className="text-slate-500">MPI_Send(..., to: 1);</div>
              </>
            ) : (
              <>
                <div className="text-cyan-300 font-semibold">MPI_Send(..., to: 1); // SEND FIRST</div>
                <div className="text-emerald-300 font-semibold">MPI_Recv(..., from: 1);</div>
              </>
            )}
          </div>

          <div className="text-xs font-mono text-center">
            {executed && mode === 'deadlocked' ? (
              <span className="text-red-400 font-bold flex items-center gap-1.5">
                <Lock size={14} /> BLOCKED: Waiting for Rank 1 message
              </span>
            ) : executed && mode === 'resolved' ? (
              <span className="text-emerald-300 font-bold flex items-center gap-1.5">
                <Unlock size={14} /> COMPLETED: Sent and received
              </span>
            ) : (
              <span className="text-slate-500">Ready to execute</span>
            )}
          </div>
        </div>

        {/* Process 1 */}
        <div className={`glass p-6 rounded-2xl border transition-all flex flex-col items-center ${
          executed && mode === 'deadlocked'
            ? 'border-red-500 bg-red-950/40 shadow-[0_0_30px_rgba(239,68,68,0.4)]'
            : executed && mode === 'resolved'
            ? 'border-emerald-500 bg-emerald-950/30'
            : 'border-slate-700 bg-[#0d162d]'
        }`}>
          <div className="flex items-center justify-between w-full mb-3">
            <span className="text-xs font-mono font-bold text-white px-2.5 py-0.5 rounded bg-blue-950 border border-blue-500/40">
              PROCESS 1
            </span>
            <span className="text-xs font-mono text-slate-400">Kitchen B</span>
          </div>

          <div className="w-full bg-black/60 rounded-xl p-4 font-mono text-xs text-left mb-4 border border-white/5 space-y-1">
            <div className="text-slate-500">// Code for Rank 1</div>
            {mode === 'deadlocked' ? (
              <>
                <div className="text-amber-300 font-semibold">MPI_Recv(..., from: 0); // BLOCKING</div>
                <div className="text-slate-500">MPI_Send(..., to: 0);</div>
              </>
            ) : (
              <>
                <div className="text-emerald-300 font-semibold">MPI_Recv(..., from: 0); // RECEIVE FIRST</div>
                <div className="text-cyan-300 font-semibold">MPI_Send(..., to: 0);</div>
              </>
            )}
          </div>

          <div className="text-xs font-mono text-center">
            {executed && mode === 'deadlocked' ? (
              <span className="text-red-400 font-bold flex items-center gap-1.5">
                <Lock size={14} /> BLOCKED: Waiting for Rank 0 message
              </span>
            ) : executed && mode === 'resolved' ? (
              <span className="text-emerald-300 font-bold flex items-center gap-1.5">
                <Unlock size={14} /> COMPLETED: Received and replied
              </span>
            ) : (
              <span className="text-slate-500">Ready to execute</span>
            )}
          </div>
        </div>
      </div>

      {/* Deadlock Banner */}
      {executed && mode === 'deadlocked' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full p-4 rounded-xl bg-red-950/80 border-2 border-red-500 flex items-center justify-between shadow-[0_0_30px_rgba(239,68,68,0.5)]"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle size={24} className="text-red-400 animate-pulse" />
            <div>
              <div className="text-sm font-bold text-red-200">DEADLOCK DETECTED! (Circular Wait)</div>
              <div className="text-xs text-red-300/80 font-mono">
                Both processes are in a blocking receive waiting for the other to send. Program hangs forever.
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setMode('resolved');
              handleRun();
            }}
            className="px-3 py-1.5 rounded-lg bg-emerald-500 text-navy-900 text-xs font-mono font-bold hover:bg-emerald-400"
          >
            FIX COMMUNICATION ORDER
          </button>
        </motion.div>
      )}

      {/* Resolved Banner */}
      {executed && mode === 'resolved' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/80 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Unlock size={24} className="text-emerald-400" />
            <div>
              <div className="text-sm font-bold text-emerald-200">PROPER COMMUNICATION ORDERING</div>
              <div className="text-xs text-emerald-300/80 font-mono">
                Rank 0 sends first while Rank 1 receives first. No circular dependency exists!
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Story summary */}
      <div className="mt-4 text-xs font-mono text-slate-400 text-center">
        Analogy: Kitchen A refuses to cook until Kitchen B delivers boxes, but Kitchen B refuses to deliver boxes until Kitchen A cooks. Both wait forever.
      </div>
    </div>
  );
}
