import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../components/visuals/CodeEditor';

export default {
  section: 'FIRST MPI PROGRAM',
  title: 'TIME TO CODE: HELLO MPI',
  speakerNotes: 'Let\'s inspect our first MPI program in C and see how the boilerplate works.',
  component: function Slide25() {
    return (
      <div className="slide">
        <div className="slide-label">25 / FIRST MPI PROGRAM</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          TIME TO CODE: <span className="text-cyan">HELLO MPI</span>
        </motion.h1>
        <motion.div 
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <CodeEditor 
            filename="hello_mpi.c"
            language="c"
            code={`/* Get ready for MPI */\n`}
          />
        </motion.div>
      </div>
    );
  }
};
