import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'MESSAGE PASSING',
  title: 'MPI DATATYPES',
  speakerNotes: 'MPI uses its own type constants so it can handle differences in data representation between heterogeneous machines.',
  component: function Slide38() {
    const types = [
      { c: "int", mpi: "MPI_INT" },
      { c: "float", mpi: "MPI_FLOAT" },
      { c: "double", mpi: "MPI_DOUBLE" },
      { c: "char", mpi: "MPI_CHAR" }
    ];
    return (
      <div className="slide">
        <div className="slide-label">38 / MESSAGE PASSING</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MPI <span className="text-cyan">DATATYPES</span>
        </motion.h1>
        
        <div className="max-w-4xl mx-auto w-full glass p-12 rounded-3xl">
          <div className="flex flex-col gap-6">
            {types.map((t, i) => (
              <motion.div 
                key={t.c}
                className="flex items-center justify-between text-4xl font-mono border-b border-secondary/20 pb-6 last:border-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * i }}
              >
                <span className="text-white">{t.c}</span>
                <span className="text-secondary">→</span>
                <span className="text-cyanGlow">{t.mpi}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
