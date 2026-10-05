import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default {
  section: 'MESSAGE PASSING',
  title: 'POINT-TO-POINT COMMUNICATION',
  speakerNotes: 'Point-to-point communication connects exactly one sender to one receiver.',
  component: function Slide33() {
    return (
      <div className="slide">
        <div className="slide-label">33 / MESSAGE PASSING</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          POINT-TO-POINT
        </motion.h1>
        
        <div className="flex flex-col items-center gap-16 w-full max-w-4xl mx-auto">
          <div className="flex items-center justify-between w-full px-16">
            <motion.div 
              className="text-4xl font-mono glass p-8 rounded-xl border-cyan border"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Rank 0
            </motion.div>
            
            <motion.div 
              className="flex-1 flex justify-center"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArrowRight className="w-48 h-24 text-cyan" />
            </motion.div>
            
            <motion.div 
              className="text-4xl font-mono glass p-8 rounded-xl border-green border"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Rank 1
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 w-full mt-12">
            <motion.div 
              className="glass-strong p-8 rounded-2xl text-center border-l-4 border-l-cyan"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <code className="text-4xl text-cyanGlow">MPI_Send()</code>
            </motion.div>
            <motion.div 
              className="glass-strong p-8 rounded-2xl text-center border-l-4 border-l-green"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <code className="text-4xl text-green">MPI_Recv()</code>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
};
