import React from 'react';
import { motion } from 'framer-motion';
import { Split } from 'lucide-react';

export default {
  section: 'COLLECTIVE COMMUNICATION',
  title: 'THE SCATTER STORY',
  speakerNotes: 'Scatter is the fundamental work-sharing mechanism in distributed computing.',
  component: function Slide46() {
    return (
      <div className="slide">
        <div className="slide-label">46 / COLLECTIVE COMMUNICATION</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          THE <span className="text-cyan">SCATTER</span> STORY
        </motion.h1>
        
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto gap-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            <Split className="w-64 h-64 text-cyan" />
          </motion.div>
          
          <motion.div 
            className="glass-strong p-8 rounded-2xl border border-cyan text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-4xl text-white">Kitchen manager with 1000 order tickets dividing them into 4 piles of 250 and passing one pile to Chef 0, Chef 1, Chef 2, Chef 3.</p>
          </motion.div>
        </div>
      </div>
    );
  }
};
