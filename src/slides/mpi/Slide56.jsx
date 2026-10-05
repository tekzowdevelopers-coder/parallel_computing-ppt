import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'SYNCHRONIZATION & DEADLOCK',
  title: 'THE KITCHEN DEADLOCK STORY',
  speakerNotes: 'Neither party can make progress because each is waiting for the other.',
  component: function Slide56() {
    return (
      <div className="slide">
        <div className="slide-label">56 / SYNCHRONIZATION & DEADLOCK</div>
        <motion.h1 
          className="text-6xl font-bold mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          THE KITCHEN DEADLOCK
        </motion.h1>
        
        <div className="flex w-full max-w-5xl space-x-12 items-center">
          <motion.div 
            className="flex-1 glass p-8 rounded-xl text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl text-amber mb-6">Kitchen A</h2>
            <p className="text-2xl text-white italic">"I won't ship food until Kitchen B sends the boxes."</p>
          </motion.div>
          
          <motion.div 
            className="text-6xl text-red font-bold"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            ↔
          </motion.div>
          
          <motion.div 
            className="flex-1 glass p-8 rounded-xl text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-4xl text-amber mb-6">Kitchen B</h2>
            <p className="text-2xl text-white italic">"I won't ship boxes until Kitchen A sends the food."</p>
          </motion.div>
        </div>
        
        <motion.p 
          className="mt-16 text-4xl text-red font-bold uppercase tracking-widest text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          BOTH KITCHENS IDLE FOREVER
        </motion.p>
      </div>
    );
  }
};
