import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../components/visuals/CodeEditor';

export default {
  section: 'FIRST MPI PROGRAM',
  title: 'THE MPI HEADER',
  speakerNotes: 'Always include mpi.h to get access to all MPI functions and data types.',
  component: function Slide26() {
    return (
      <div className="slide">
        <div className="slide-label">26 / FIRST MPI PROGRAM</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          THE MPI <span className="text-cyan">HEADER</span>
        </motion.h1>
        
        <div className="flex flex-col items-center justify-center gap-8 w-full max-w-5xl mx-auto">
          <motion.div 
            className="w-full relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <CodeEditor 
              filename="hello_mpi.c"
              language="c"
              code={`#include <stdio.h>\n#include <mpi.h>`}
            />
            
            <motion.div 
              className="absolute -right-8 top-1/2 -translate-y-1/2 translate-x-full glass-strong p-6 rounded-xl border border-cyan/30 text-cyanGlow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-2 text-cyan">mpi.h</h3>
              <p className="text-white">Provides MPI prototypes, macros, and types</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }
};
