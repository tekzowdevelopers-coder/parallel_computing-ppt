import React from 'react';
import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';

export default {
  section: 'COLLECTIVE COMMUNICATION',
  title: 'THE BROADCAST STORY',
  speakerNotes: 'Instead of whispering to each student one by one, the teacher broadcasts to everyone.',
  component: function Slide44() {
    return (
      <div className="slide">
        <div className="slide-label">44 / COLLECTIVE COMMUNICATION</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          THE <span className="text-cyan">BROADCAST</span> STORY
        </motion.h1>
        
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto gap-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            <Radio className="w-64 h-64 text-cyan" />
          </motion.div>
          
          <motion.div 
            className="glass-strong p-8 rounded-2xl border border-cyan text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">"Exam starts now!"</h2>
            <p className="text-3xl text-secondary">All 30 students hear the announcement at once.</p>
          </motion.div>
        </div>
      </div>
    );
  }
};
