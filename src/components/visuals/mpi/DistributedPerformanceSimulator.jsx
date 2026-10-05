import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Line, LineChart } from 'recharts';
import { Activity, Gauge, TrendingUp } from 'lucide-react';

export default function DistributedPerformanceSimulator() {
  const [selectedProcs, setSelectedProcs] = useState(4);
  const [viewType, setViewType] = useState('chart'); // 'chart' | 'table'

  // Benchmark dataset: 100M numbers distributed sum
  const performanceData = [
    { procs: 1, time: 10.0, speedup: 1.0, efficiency: 100, idealSpeedup: 1 },
    { procs: 2, time: 5.8, speedup: 1.72, efficiency: 86.2, idealSpeedup: 2 },
    { procs: 4, time: 3.2, speedup: 3.12, efficiency: 78.1, idealSpeedup: 4 },
    { procs: 8, time: 2.1, speedup: 4.76, efficiency: 59.5, idealSpeedup: 8 },
    { procs: 16, time: 1.8, speedup: 5.56, efficiency: 34.7, idealSpeedup: 16 },
  ];

  const current = performanceData.find((d) => d.procs === selectedProcs) || performanceData[2];

  return (
    <div className="w-full max-w-4xl glass p-6 rounded-2xl border border-slate-700/60 shadow-2xl flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            HPC Scalability Analysis
          </span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            MPI Distributed Performance Simulator
          </h3>
        </div>

        {/* View toggle */}
        <div className="flex bg-black/40 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setViewType('chart')}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
              viewType === 'chart' ? 'bg-cyan-500 text-navy-900 font-bold' : 'text-slate-400'
            }`}
          >
            CHART
          </button>
          <button
            onClick={() => setViewType('table')}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
              viewType === 'table' ? 'bg-cyan-500 text-navy-900 font-bold' : 'text-slate-400'
            }`}
          >
            TABLE
          </button>
        </div>
      </div>

      {/* Process Selection Buttons */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs font-mono text-slate-400 mr-2">Select Processes:</span>
        {performanceData.map((d) => (
          <button
            key={d.procs}
            onClick={() => setSelectedProcs(d.procs)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
              selectedProcs === d.procs
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-navy-900 shadow-[0_0_15px_rgba(34,211,238,0.5)]'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            {d.procs} P
          </button>
        ))}
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-3 gap-4 w-full mb-6">
        <div className="glass p-4 rounded-xl border border-slate-700/80 bg-[#0c162d] flex flex-col items-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
            <Activity size={12} className="text-cyan-400" /> Execution Time
          </span>
          <span className="text-2xl font-mono font-extrabold text-cyan-300">
            {current.time.toFixed(1)}s
          </span>
          <span className="text-[10px] font-mono text-slate-500 mt-1">
            Baseline: 10.0s (1 proc)
          </span>
        </div>

        <div className="glass p-4 rounded-xl border border-slate-700/80 bg-[#0c162d] flex flex-col items-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
            <TrendingUp size={12} className="text-emerald-400" /> Speedup (T₁ / Tₚ)
          </span>
          <span className="text-2xl font-mono font-extrabold text-emerald-400">
            {current.speedup.toFixed(2)}×
          </span>
          <span className="text-[10px] font-mono text-slate-500 mt-1">
            Ideal: {current.idealSpeedup}×
          </span>
        </div>

        <div className="glass p-4 rounded-xl border border-slate-700/80 bg-[#0c162d] flex flex-col items-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
            <Gauge size={12} className="text-amber-400" /> Parallel Efficiency
          </span>
          <span className={`text-2xl font-mono font-extrabold ${
            current.efficiency > 70 ? 'text-emerald-400' : current.efficiency > 50 ? 'text-amber-400' : 'text-red-400'
          }`}>
            {current.efficiency.toFixed(1)}%
          </span>
          <span className="text-[10px] font-mono text-slate-500 mt-1">
            Formula: S / P × 100%
          </span>
        </div>
      </div>

      {/* Chart View */}
      {viewType === 'chart' ? (
        <div className="w-full h-56 bg-black/30 p-3 rounded-xl border border-white/5">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="procs" stroke="#64748b" tickFormatter={(v) => `${v} Procs`} fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} unit="s" />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }}
                labelStyle={{ color: '#38bdf8', fontWeight: 'bold' }}
              />
              <Bar dataKey="time" name="Exec Time (s)" fill="#06b6d4" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        /* Table View */
        <div className="w-full overflow-hidden rounded-xl border border-slate-700 bg-black/40">
          <table className="w-full text-xs font-mono text-left">
            <thead className="bg-slate-800/80 text-slate-300 border-b border-slate-700">
              <tr>
                <th className="p-3">Processes (P)</th>
                <th className="p-3">Execution Time</th>
                <th className="p-3">Actual Speedup</th>
                <th className="p-3">Ideal Speedup</th>
                <th className="p-3">Efficiency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {performanceData.map((row) => (
                <tr
                  key={row.procs}
                  className={`hover:bg-white/5 transition-colors ${
                    row.procs === selectedProcs ? 'bg-cyan-950/40 text-cyan-300 font-bold' : ''
                  }`}
                >
                  <td className="p-3">{row.procs}</td>
                  <td className="p-3">{row.time.toFixed(1)}s</td>
                  <td className="p-3">{row.speedup.toFixed(2)}×</td>
                  <td className="p-3 text-slate-500">{row.idealSpeedup}×</td>
                  <td className="p-3">{row.efficiency.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Diminishing returns note */}
      <div className="mt-4 text-xs font-mono text-slate-400 text-center">
        Notice diminishing returns at 8 & 16 processes: Communication & network latency begin overtaking compute time (Amdahl's Law).
      </div>
    </div>
  );
}
