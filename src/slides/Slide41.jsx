import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Users, Flame } from 'lucide-react';

export default {
  section: 'RACE CONDITIONS',
  title: 'Shared Resource',
  speakerNotes: 'What happens when multiple chefs need the same oven? This is the shared resource problem.',
  component: function Slide41() {
    return (
      <div className="slide-left">
        <div className="slide-label">41 / RACE CONDITIONS</div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center h-full w-full space-y-16"
        >
          <motion.h1 
            className="text-7xl font-bold text-amber-500 text-center drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            SHARED RESOURCE
          </motion.h1>

          <div className="flex items-center justify-center space-x-12 relative w-full max-w-4xl">
            <motion.div 
              className="flex flex-col space-y-6"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.div key={i} className="flex items-center space-x-4 bg-navy-800 p-4 rounded-xl border border-cyan-500/30">
                  <Users size={32} className="text-cyan-400" />
                  <span className="text-2xl font-bold text-white">Chef {i}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute left-1/2 -translate-x-1/2 bg-amber-500/20 p-6 rounded-full"
            >
              <AlertTriangle size={64} className="text-amber-500 animate-pulse" />
            </motion.div>

            <motion.div
              className="bg-navy-800 p-12 rounded-3xl border-4 border-amber-500/50 flex flex-col items-center shadow-[0_0_30px_rgba(245,158,11,0.2)]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Flame size={80} className="text-amber-500 mb-4" />
              <span className="text-4xl font-bold text-white tracking-widest">OVEN</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }
};
