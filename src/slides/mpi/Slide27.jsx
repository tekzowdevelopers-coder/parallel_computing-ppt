import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../components/visuals/CodeEditor';

export default {
  section: 'FIRST MPI PROGRAM',
  title: 'COMPLETE HELLO MPI',
  speakerNotes: 'Notice the symmetry: Init at the top, Finalize at the bottom, query rank and size in between.',
  component: function Slide27() {
    const code = `#include <stdio.h>
#include <mpi.h>

int main(int argc, char *argv[]) {
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    printf("Hello from process %d of %d\\n", rank, size);

    MPI_Finalize();
    return 0;
}`;
    return (
      <div className="slide">
        <div className="slide-label">27 / FIRST MPI PROGRAM</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          COMPLETE <span className="text-cyan">HELLO MPI</span>
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <CodeEditor 
            filename="hello_mpi.c"
            language="c"
            code={code}
          />
        </motion.div>
      </div>
    );
  }
};
