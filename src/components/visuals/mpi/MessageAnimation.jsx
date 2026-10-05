import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function MessageAnimation({ interactive = true }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'delivered'
  const [dataVal, setDataVal] = useState(100);
  const [tagVal, setTagVal] = useState(10);

  const handleSend = () => {
    if (status === 'sending') return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('delivered');
    }, 1400);
  };

  const handleReset = () => {
    setStatus('idle');
  };

  return (
    <div className="w-full max-w-4xl glass p-6 rounded-2xl border border-slate-700/60 shadow-2xl flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Point-to-Point Communication
          </span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            MPI_Send <ArrowRight size={18} className="text-cyan-400" /> MPI_Recv
          </h3>
        </div>

        {interactive && (
          <div className="flex gap-2">
            <button
              onClick={handleSend}
              disabled={status === 'sending'}
              className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-navy-900 flex items-center gap-2 hover:brightness-110 shadow-lg disabled:opacity-50 transition-all"
            >
              <Send size={14} />
              {status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
            </button>
            {status !== 'idle' && (
              <button
                onClick={handleReset}
                className="px-3 py-2 rounded-xl text-xs font-mono bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              >
                RESET
              </button>
            )}
          </div>
        )}
      </div>

      {/* Main Communication Runway */}
      <div className="w-full flex items-center justify-between relative px-8 py-10 min-h-[220px]">
        {/* Network Cable Line */}
        <div className="absolute left-24 right-24 top-1/2 -translate-y-1/2 h-1 bg-slate-800 rounded-full overflow-hidden">
          {status === 'sending' && (
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          )}
        </div>

        {/* Sender: Process 0 */}
        <div className="z-10 flex flex-col items-center">
          <div className="w-32 glass p-4 rounded-xl border border-cyan-500/50 bg-[#0d1833] flex flex-col items-center shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 font-bold mb-2">
              SENDER (SRC: 0)
            </span>
            <div className="text-sm font-mono font-bold text-white mb-2">RANK 0</div>
            <div className="w-full bg-black/40 rounded p-1.5 text-center text-xs font-mono text-cyan-300 border border-cyan-500/20">
              data = {dataVal}
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-400 mt-2">Kitchen A</span>
        </div>

        {/* Animated Flying Message Envelope */}
        <div className="absolute left-32 right-32 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
          <AnimatePresence>
            {status === 'sending' && (
              <motion.div
                initial={{ x: -160, opacity: 0, scale: 0.8 }}
                animate={{ x: 160, opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                className="glass-strong p-3.5 rounded-xl border border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.6)] bg-navy-800/90 flex flex-col items-center"
              >
                <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-mono font-bold mb-1">
                  <Mail size={14} className="text-cyan-400" />
                  MPI_MESSAGE
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10px] font-mono text-slate-300">
                  <div>src: <span className="text-cyan-400">0</span></div>
                  <div>dest: <span className="text-cyan-400">1</span></div>
                  <div>tag: <span className="text-amber-400">{tagVal}</span></div>
                  <div>type: <span className="text-purple-400">MPI_INT</span></div>
                </div>
                <div className="mt-1 px-2 py-0.5 rounded bg-cyan-950 text-cyan-200 text-xs font-mono font-bold">
                  payload: {dataVal}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Receiver: Process 1 */}
        <div className="z-10 flex flex-col items-center">
          <div className={`w-32 glass p-4 rounded-xl border transition-all flex flex-col items-center ${
            status === 'delivered'
              ? 'border-emerald-500/80 bg-[#0c2422] shadow-[0_0_25px_rgba(16,185,129,0.3)]'
              : 'border-slate-700 bg-[#0d162d]'
          }`}>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 font-bold mb-2">
              RECEIVER (DEST: 1)
            </span>
            <div className="text-sm font-mono font-bold text-white mb-2">RANK 1</div>
            <div className={`w-full rounded p-1.5 text-center text-xs font-mono border transition-all ${
              status === 'delivered'
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40 font-bold'
                : 'bg-black/40 text-slate-500 border-white/5'
            }`}>
              {status === 'delivered' ? `data = ${dataVal}` : 'data = ? (waiting)'}
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-400 mt-2">Kitchen B</span>
        </div>
      </div>

      {/* Envelope Parameter Callout Breakdown */}
      <div className="w-full mt-4 p-4 rounded-xl bg-black/40 border border-slate-700/60 grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-slate-400">BUFFER</span>
          <span className="text-xs font-mono font-bold text-cyan-300">&data ({dataVal})</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-slate-400">COUNT</span>
          <span className="text-xs font-mono font-bold text-slate-200">1</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-slate-400">DATATYPE</span>
          <span className="text-xs font-mono font-bold text-purple-300">MPI_INT</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-slate-400">DEST / SRC</span>
          <span className="text-xs font-mono font-bold text-cyan-400">0 → 1</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-slate-400">TAG</span>
          <span className="text-xs font-mono font-bold text-amber-300">{tagVal}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-slate-400">COMMUNICATOR</span>
          <span className="text-xs font-mono font-bold text-emerald-400">MPI_COMM_WORLD</span>
        </div>
      </div>
    </div>
  );
}
