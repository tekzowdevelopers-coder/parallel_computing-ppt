import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default {
  section: 'PERFORMANCE',
  title: 'Thread Experiment',
  speakerNotes: 'Let\'s look at real performance data. Notice how speedup isn\'t linear.',
  component: function Slide47() {
    const data = [
      { threads: '1 Thread', time: 10.0, speedup: 1.0 },
      { threads: '2 Threads', time: 5.2, speedup: 1.9 },
      { threads: '4 Threads', time: 2.8, speedup: 3.6 },
      { threads: '8 Threads', time: 2.5, speedup: 4.0 },
    ];

    return (
      <div className="slide">
        <div className="slide-label">47 / PERFORMANCE</div>
        
        <div className="flex flex-col h-full w-full pt-16">
          <motion.h1 
            className="text-6xl font-bold text-white mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            THREAD EXPERIMENT
          </motion.h1>

          <motion.div 
            className="flex-1 w-full max-w-6xl mx-auto glass p-8 rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="threads" stroke="#94a3b8" fontSize={24} tickMargin={15} />
                <YAxis stroke="#94a3b8" fontSize={20} label={{ value: 'Time (seconds)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 20 }} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '20px' }}
                />
                <Bar dataKey="time" fill="#06b6d4" radius={[8, 8, 0, 0]} animationDuration={2000} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-center text-3xl text-amber-400 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            Diminishing returns at higher thread counts!
          </motion.div>
        </div>
      </div>
    );
  }
};
