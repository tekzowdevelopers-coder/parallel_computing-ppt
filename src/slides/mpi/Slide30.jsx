import React from 'react';
import { motion } from 'framer-motion';
import Terminal from '../../components/visuals/Terminal';

export default {
  section: 'FIRST MPI PROGRAM',
  title: 'OUTPUT ORDER IS RANDOM!',
  speakerNotes: 'Notice rank 2 printed before rank 1! Why? Because they are separate processes scheduled independently.',
  component: function Slide30() {
    return (
      <div className="slide">
        <div className="slide-label">30 / FIRST MPI PROGRAM</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          OUTPUT ORDER IS <span className="text-red">RANDOM!</span>
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Terminal 
            command="mpiexec -n 4 ./hello_mpi"
            output={[
              "Hello from process 0 of 4",
              "Hello from process 2 of 4",
              "Hello from process 1 of 4",
              "Hello from process 3 of 4"
            ]}
          />
        </motion.div>
        
        <motion.div
          className="mt-12 p-8 glass border-red border-2 text-center rounded-xl max-w-4xl mx-auto bg-red/10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h2 className="text-4xl font-bold text-red">WHY IS THE ORDER NOT 0, 1, 2, 3?</h2>
        </motion.div>
      </div>
    );
  }
};
