import React from 'react';
import { motion } from 'framer-motion';
import { Users, Flame } from 'lucide-react';

export default {
  section: "AMDAHL'S LAW",
  title: 'The Bottleneck',
  speakerNotes: 'Even with unlimited chefs, if there\'s only one oven, everyone must wait their turn.',
  component: function Slide49() {
    return (
      <div className="slide">
        <div className="slide-label">49 / AMDAHL'S LAW</div>
        
        <div className="flex flex-col h-full w-full justify-center items-center space-y-16">
          <motion.h1 
            className="text-6xl font-bold text-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            THE BOTTLENECK
          </motion.h1>

          <div className="flex items-center space-x-16 bg-navy-800 p-12 rounded-3xl border border-slate-700 w-full max-w-5xl justify-center relative">
            <motion.div 
              className="flex flex-col space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex space-x-4">
                {[1,2,3,4].map(i => (
                  <motion.div 
                    key={i}
                    animate={{ x: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                  >
                    <Users size={48} className="text-cyan-400" />
                  </motion.div>
                ))}
              </div>
              <div className="text-2xl text-center font-bold text-slate-300">4 CHEFS</div>
            </motion.div>

            <motion.div 
              className="text-4xl text-amber-500 font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              BUT
            </motion.div>

            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
            >
              <Flame size={80} className="text-red-500 mb-2" />
              <div className="text-2xl text-center font-bold text-white">1 OVEN</div>
            </motion.div>
          </div>

          <motion.div 
            className="flex flex-col items-center space-y-4 text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            <div className="text-cyan-400">Parallel Work → Faster</div>
            <div className="text-amber-500">Shared Bottleneck → Limits Speedup</div>
          </motion.div>
        </div>
      </div>
    );
  }
};
