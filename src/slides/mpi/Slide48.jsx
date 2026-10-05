import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default {
  section: 'COLLECTIVE COMMUNICATION',
  title: 'THE HPC WORKFLOW',
  speakerNotes: 'This three-step pattern powers weather models, simulations, and data pipelines across the world.',
  component: function Slide48() {
    return (
      <div className="slide">
        <div className="slide-label">48 / COLLECTIVE COMMUNICATION</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          THE <span className="text-cyan">HPC</span> WORKFLOW
        </motion.h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-6xl mx-auto mb-16">
          <motion.div 
            className="glass p-8 rounded-2xl border-2 border-cyan flex-1 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-cyan mb-4">1. SCATTER</h2>
            <p className="text-2xl text-white">data to all nodes</p>
          </motion.div>
          
          <ArrowRight className="w-16 h-16 text-secondary hidden md:block" />
          
          <motion.div 
            className="glass p-8 rounded-2xl border-2 border-amber flex-1 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-amber mb-4">2. COMPUTE</h2>
            <p className="text-2xl text-white">locally in parallel</p>
          </motion.div>
          
          <ArrowRight className="w-16 h-16 text-secondary hidden md:block" />
          
          <motion.div 
            className="glass p-8 rounded-2xl border-2 border-green flex-1 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-4xl font-bold text-green mb-4">3. GATHER</h2>
            <p className="text-2xl text-white">results back to master</p>
          </motion.div>
        </div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-4xl text-secondary italic">The backbone of scientific parallel workflows.</p>
        </motion.div>
      </div>
    );
  }
};
