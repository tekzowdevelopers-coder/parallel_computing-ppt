import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FIRST MPI PROGRAM',
  title: 'INDEPENDENT SCHEDULING',
  speakerNotes: 'The OS schedules each process asynchronously. Never assume rank 0 finishes before rank 3.',
  component: function Slide31() {
    return (
      <div className="slide">
        <div className="slide-label">31 / FIRST MPI PROGRAM</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          INDEPENDENT <span className="text-cyan">SCHEDULING</span>
        </motion.h1>
        
        <div className="flex flex-col items-center justify-center gap-16 mt-8">
          <div className="w-full max-w-5xl h-64 relative border-b-4 border-dashed border-secondary/50">
            {[0, 1, 2, 3].map((rank, i) => (
              <motion.div
                key={rank}
                className="absolute bottom-0 w-24 h-24 bg-cyan rounded-full flex items-center justify-center text-navy-900 font-bold text-3xl"
                style={{ left: '0%' }}
                animate={{ 
                  left: '100%',
                  opacity: [1, 1, 0]
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                P{rank}
              </motion.div>
            ))}
            <div className="absolute right-0 bottom-[-3rem] text-3xl font-bold text-white">stdout</div>
          </div>
          
          <motion.div 
            className="text-center p-8 glass-strong rounded-2xl border border-amber/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-4xl text-amber">MPI provides NO guaranteed output ordering between independent processes.</h2>
          </motion.div>
        </div>
      </div>
    );
  }
};
