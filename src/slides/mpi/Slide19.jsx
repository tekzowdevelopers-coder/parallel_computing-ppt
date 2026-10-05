import React from 'react';
import { motion } from 'framer-motion';
import { Users, Radio } from 'lucide-react';

export default {
  section: 'MPI FUNDAMENTALS',
  title: 'WHAT IS A COMMUNICATOR?',
  speakerNotes: 'A communicator defines who can talk to whom, and ensures messages from different libraries don\'t cross wires.',
  component: function Slide19() {
    return (
      <div className="slide">
        <div className="slide-label">19 / MPI FUNDAMENTALS</div>
        <div className="flex flex-col items-center justify-center h-full w-full px-16">
          
          <h2 className="text-6xl font-bold text-white mb-16 text-center">A Communicator defines:</h2>

          <div className="grid grid-cols-2 gap-12 w-full max-w-6xl">
            
            <motion.div 
              className="glass p-10 rounded-3xl flex flex-col items-center text-center border-t-4 border-t-cyan-500"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Users size={80} className="text-cyan-400 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">1. Group Membership</h3>
              <p className="text-xl text-slate-300">
                A specific group of processes that are allowed to communicate with each other.
              </p>
            </motion.div>

            <motion.div 
              className="glass p-10 rounded-3xl flex flex-col items-center text-center border-t-4 border-t-purple-500"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Radio size={80} className="text-purple-400 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">2. Communication Context</h3>
              <p className="text-xl text-slate-300">
                A safe "channel" so messages don't collide with messages from other libraries.
              </p>
            </motion.div>

          </div>

          <motion.div 
            className="mt-16 bg-amber-950/40 border border-amber-500/50 px-10 py-6 rounded-2xl flex items-center space-x-6 max-w-4xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Radio className="text-amber-400" size={48} />
            <div>
              <h4 className="text-2xl font-bold text-amber-300">Kitchen Analogy</h4>
              <p className="text-xl text-amber-100/70 mt-1">A dedicated walkie-talkie frequency just for your specific team.</p>
            </div>
          </motion.div>

        </div>
      </div>
    );
  }
};
