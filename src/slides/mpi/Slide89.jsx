import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FINAL CHALLENGE',
  title: '8 CORE MPI CONCEPTS TO REMEMBER',
  speakerNotes: 'If you master these 8 concepts, you can build any distributed system.',
  component: function Slide89() {
    const concepts = [
      "Process", "Rank", "Communicator", "Message",
      "Send/Recv", "Collectives", "Synchronization", "Hybrid"
    ];

    return (
      <div className="slide">
        <div className="slide-label">89 / FINAL CHALLENGE</div>
        <motion.h1 
          className="text-6xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          8 CORE MPI CONCEPTS TO REMEMBER
        </motion.h1>

        <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
          {concepts.map((concept, i) => (
            <motion.div
              key={i}
              className="glass-strong rounded-3xl p-8 flex items-center justify-center border-t border-l border-white/10 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-amber-500/10 z-0"></div>
              <h3 className="text-3xl font-bold text-white z-10 text-center">{concept}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
};
