import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'MESSAGE PASSING',
  title: 'MPI_SEND PARAMETERS',
  speakerNotes: 'Every send requires 6 questions answered: What, How many, What type, Who receives it, What tag, and Which communicator.',
  component: function Slide34() {
    const params = [
      { name: "Buffer", desc: "What data?" },
      { name: "Count", desc: "How many items?" },
      { name: "Type", desc: "What datatype?" },
      { name: "Dest", desc: "Who receives it?" },
      { name: "Tag", desc: "Message ID?" },
      { name: "Comm", desc: "Which universe?" }
    ];
    return (
      <div className="slide">
        <div className="slide-label">34 / MESSAGE PASSING</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MPI_SEND <span className="text-cyan">PARAMETERS</span>
        </motion.h1>
        
        <motion.div 
          className="text-5xl font-mono text-center mb-16 bg-navy-900/50 p-6 rounded-xl border border-secondary/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="text-cyan">MPI_Send</span>(...)
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {params.map((param, i) => (
            <motion.div
              key={param.name}
              className="glass p-6 rounded-xl border-l-4 border-cyan"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <h3 className="text-3xl font-bold text-white mb-2">{param.name}</h3>
              <p className="text-cyanGlow text-xl">{param.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
};
