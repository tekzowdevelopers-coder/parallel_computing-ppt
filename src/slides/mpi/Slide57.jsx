import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'SYNCHRONIZATION & DEADLOCK',
  title: '4 COMMON DEADLOCK CAUSES',
  speakerNotes: 'Keep communication symmetric or use non-blocking calls to prevent deadlocks.',
  component: function Slide57() {
    return (
      <div className="slide">
        <div className="slide-label">57 / SYNCHRONIZATION & DEADLOCK</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          4 COMMON DEADLOCK CAUSES
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-2 gap-8 w-full max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {[
            { num: 1, text: "Both processes call MPI_Recv first" },
            { num: 2, text: "Message tag or source rank mismatch" },
            { num: 3, text: "Message count mismatch" },
            { num: 4, text: "Circular dependency across 3+ processes" }
          ].map(item => (
            <motion.div 
              key={item.num}
              className="glass p-8 rounded-xl border-l-4 border-red flex items-center space-x-6"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="text-5xl font-bold text-red/50">{item.num}</div>
              <div className="text-2xl text-white">{item.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
};
