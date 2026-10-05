import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../components/visuals/CodeEditor';

export default {
  section: 'MESSAGE PASSING',
  title: 'FIRST SEND & RECEIVE CODE',
  speakerNotes: 'Rank 0 sends data to rank 1. Rank 1 waits for the message from rank 0.',
  component: function Slide39() {
    return (
      <div className="slide">
        <div className="slide-label">39 / MESSAGE PASSING</div>
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          SEND & RECEIVE <span className="text-cyan">CODE</span>
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-cyan mb-4">Sender (Rank 0)</h3>
            <CodeEditor 
              filename="sender.c"
              language="c"
              code={`int data = 100;\nMPI_Send(&data, 1, MPI_INT, 1, 0, MPI_COMM_WORLD);`}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-green mb-4">Receiver (Rank 1)</h3>
            <CodeEditor 
              filename="receiver.c"
              language="c"
              code={`int data;\nMPI_Recv(&data, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);`}
            />
          </motion.div>
        </div>
      </div>
    );
  }
};
