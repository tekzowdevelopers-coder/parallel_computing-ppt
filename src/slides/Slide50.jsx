import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'PRACTICAL LAB',
  title: 'Your Turn',
  speakerNotes: 'Time to practice. You\'ll complete four lab exercises.',
  component: function Slide50() {
    const tasks = [
      { id: 1, title: "Hello OpenMP" },
      { id: 2, title: "Thread Information" },
      { id: 3, title: "Parallel Loop" },
      { id: 4, title: "Sum 1→1,000,000" }
    ];

    return (
      <div className="slide">
        <div className="slide-label">50 / PRACTICAL LAB</div>
        
        <div className="flex flex-col h-full w-full justify-center items-center">
          <motion.h1 
            className="text-[8rem] font-bold text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)] mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1.2 }}
          >
            YOUR TURN
          </motion.h1>

          <motion.div 
            className="grid grid-cols-2 gap-8 w-full max-w-5xl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.4, delayChildren: 1.5 } }
            }}
          >
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="glass p-8 rounded-2xl flex items-center space-x-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-900/50 flex justify-center items-center text-3xl font-bold text-cyan-300 border border-cyan-700">
                  {task.id}
                </div>
                <div className="text-3xl font-bold text-white">{task.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
};
