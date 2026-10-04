import React from 'react';
import { motion } from 'framer-motion';
import { UserCog, ChefHat } from 'lucide-react';

const Slide19 = () => {
  return (
    <div className="slide">
      <div className="slide-label">04 / OPENMP</div>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-7xl font-bold text-white mb-16"
        >
          THE KITCHEN MANAGER
        </motion.h1>

        <div className="flex flex-col items-center w-full max-w-5xl relative">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="flex flex-col items-center mb-16 relative"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: 'spring' }}
              className="absolute -top-16 -right-32 bg-white text-navy-900 font-bold px-6 py-3 rounded-2xl rounded-bl-none text-2xl shadow-xl"
            >
              Split the work!
            </motion.div>
            <div className="bg-cyan-500/20 border-4 border-cyan-400 rounded-full p-8 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              <UserCog size={80} className="text-cyan-300" />
            </div>
            <span className="text-3xl font-bold text-cyan-400 mt-4">OPENMP</span>
          </motion.div>

          <div className="flex w-full justify-between items-center px-12 relative">
             <svg className="absolute top-[-60px] left-0 w-full h-[60px] -z-10" preserveAspectRatio="none">
              {[15, 38, 62, 85].map((pos, i) => (
                <motion.path
                  key={i}
                  d={`M 50% 0 L ${pos}% 100`}
                  fill="none"
                  stroke="rgba(34,211,238,0.4)"
                  strokeWidth="4"
                  strokeDasharray="10 10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.5 + (i * 0.2) }}
                />
              ))}
            </svg>

            {[0, 1, 2, 3].map((thread, i) => (
              <motion.div
                key={thread}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5 + (i * 0.2) }}
                className="flex flex-col items-center"
              >
                <div className="bg-slate-800 rounded-xl p-6 mb-4 shadow-lg border border-slate-600">
                  <ChefHat size={48} className="text-secondary" />
                </div>
                <span className="text-xl font-bold text-white bg-navy-900 px-4 py-1 rounded-full border border-slate-700">THREAD {thread}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default {
  section: 'OPENMP',
  title: 'THE KITCHEN MANAGER',
  speakerNotes: 'OpenMP is like the kitchen manager. It decides how to split work among the chefs.',
  component: Slide19
};
