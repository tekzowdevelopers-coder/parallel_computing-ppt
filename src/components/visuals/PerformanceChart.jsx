import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function PerformanceChart({ data = [], showSpeedup = false, interactive = false }) {
  const defaultData = [
    { threads: '1 (Seq)', time: 100, speedup: 1 },
    { threads: '2', time: 52, speedup: 1.9 },
    { threads: '4', time: 27, speedup: 3.7 },
    { threads: '8', time: 15, speedup: 6.6 },
  ];

  const chartData = data.length > 0 ? data : defaultData;

  return (
    <div className="w-full h-96 glass p-6 rounded-2xl">
      <h3 className="text-2xl font-bold text-center text-white mb-6">
        {showSpeedup ? 'Speedup vs Threads' : 'Execution Time vs Threads'}
      </h3>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis dataKey="threads" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }}
            itemStyle={{ color: '#22d3ee' }}
          />
          <Bar 
            dataKey={showSpeedup ? "speedup" : "time"} 
            fill={showSpeedup ? "#10b981" : "#06b6d4"} 
            radius={[4, 4, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
