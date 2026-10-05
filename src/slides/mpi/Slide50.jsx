import React from 'react';
import { motion } from 'framer-motion';
import { Sigma } from 'lucide-react';

export default {
  section: 'COLLECTIVE COMMUNICATION',
  title: 'REDUCTION OPERATIONS',
  speakerNotes: 'You can sum, find max/min, or multiply across all distributed processes in one call.',
  component: function Slide50() {
    return (
      <div className="slide">
        <div className="slide-label">50 / COLLECTIVE COMMUNICATION</div>
        <motion.h1 
          className="text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          REDUCTION OPERATIONS
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-2 gap-8 w-full max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {[{ op: 'MPI_SUM', desc: 'Sum of elements' },
            { op: 'MPI_MAX', desc: 'Maximum value' },
            { op: 'MPI_MIN', desc: 'Minimum value' },
            { op: 'MPI_PROD', desc: 'Product of elements' }].map((item, i) => (
              <motion.div key={i} className="glass p-6 rounded-xl flex items-center space-x-6" variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <Sigma className="w-12 h-12 text-cyan" />
                <div>
                  <h3 className="text-3xl font-mono text-cyanGlow">{item.op}</h3>
                  <p className="text-xl text-secondary">{item.desc}</p>
                </div>
              </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-3xl text-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Example: <span className="font-mono text-white">[10, 20, 30, 40]</span> → <span className="font-mono text-cyanGlow">MPI_SUM = 100</span>
        </motion.div>
      </div>
    );
  }
};
