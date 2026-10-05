import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'COLLECTIVE COMMUNICATION',
  title: 'WHY COLLECTIVE COMMUNICATION?',
  speakerNotes: 'Point-to-point is great for two processes. But what if you want to notify 10,000 processes? You need collectives.',
  component: function Slide41() {
    return (
      <div className="slide">
        <div className="slide-label">41 / COLLECTIVE COMMUNICATION</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          WHY <span className="text-cyan">COLLECTIVES?</span>
        </motion.h1>
        
        <div className="flex flex-col items-center justify-center gap-12 w-full max-w-5xl mx-auto">
          <motion.div 
            className="flex items-center gap-12 glass p-12 rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center">
              <h2 className="text-5xl font-bold text-red mb-4">100 SENDS</h2>
              <p className="text-secondary text-2xl">Tedious, error-prone, slow</p>
            </div>
            <div className="text-7xl text-white font-bold">VS</div>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-green mb-4">1 COLLECTIVE</h2>
              <p className="text-secondary text-2xl">Optimized, clean, fast</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center p-8 glass-strong rounded-xl border-l-4 border-cyan w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-white mb-2">Definition</h3>
            <p className="text-3xl text-cyanGlow">Communication operations involving ALL processes in a communicator.</p>
          </motion.div>
        </div>
      </div>
    );
  }
};
