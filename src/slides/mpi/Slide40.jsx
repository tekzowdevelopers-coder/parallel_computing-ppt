import React from 'react';
import { motion } from 'framer-motion';
import MessageAnimation from '../../components/visuals/mpi/MessageAnimation';

export default {
  section: 'MESSAGE PASSING',
  title: 'SEND & RECEIVE IN ACTION',
  speakerNotes: 'Watch the message payload and headers travel across the network line between processes.',
  component: function Slide40() {
    return (
      <div className="slide">
        <div className="slide-label">40 / MESSAGE PASSING</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          SEND & RECEIVE <span className="text-cyan">IN ACTION</span>
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <MessageAnimation />
        </motion.div>
      </div>
    );
  }
};
