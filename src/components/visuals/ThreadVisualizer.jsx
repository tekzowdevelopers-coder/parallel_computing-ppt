import React from 'react';
import { motion } from 'framer-motion';

export default function ThreadVisualizer({ threadCount = 4, tasks = [], assignment = {}, animate = true, showLabels = true }) {
  const colors = ['bg-cyan-500', 'bg-green-500', 'bg-red-500', 'bg-amber-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'];

  return (
    <div className="flex flex-col gap-4 w-full">
      {Array.from({ length: threadCount }).map((_, threadIndex) => {
        const threadTasks = assignment[threadIndex] || [];
        const color = colors[threadIndex % colors.length];

        return (
          <div key={threadIndex} className="flex items-center gap-4">
            {showLabels && (
              <div className="w-24 font-mono text-slate-400 font-bold text-right">
                Thread {threadIndex}
              </div>
            )}
            <div className="flex-1 bg-slate-800/50 rounded-lg h-16 flex items-center px-4 gap-2 relative overflow-hidden border border-slate-700/50">
              <div className="absolute inset-y-0 left-0 w-1 bg-slate-700" />
              {threadTasks.map((taskId, i) => {
                const task = tasks.find(t => t.id === taskId);
                return (
                  <motion.div
                    key={taskId}
                    initial={animate ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`${color} px-4 py-2 rounded-md text-navy-900 font-bold text-sm shadow-md`}
                  >
                    {task ? task.label : taskId}
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
