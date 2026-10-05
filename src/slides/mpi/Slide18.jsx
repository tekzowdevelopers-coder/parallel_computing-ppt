import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default {
  section: 'MPI FUNDAMENTALS',
  title: 'MPI_COMM_WORLD',
  speakerNotes: 'MPI_COMM_WORLD is the universal communicator created when MPI starts. It includes every launched process.',
  component: function Slide18() {
    return (
      <div className="slide">
        <div className="slide-label">18 / MPI FUNDAMENTALS</div>
        <div className="flex flex-col items-center justify-center h-full w-full">
          
          <motion.div 
            className="flex items-center space-x-6 mb-8"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Globe size={64} className="text-blue-400" />
            <h1 className="text-7xl font-mono font-bold text-white tracking-tighter">
              MPI_COMM_WORLD
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-2xl text-slate-400 mb-16 text-center max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            The default communicator containing <strong>all processes</strong> launched at startup.
          </motion.p>

          <div className="relative w-[800px] h-[300px] flex items-center justify-center">
            
            {/* The Ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-blue-500/50 bg-blue-900/10 shadow-[0_0_50px_rgba(59,130,246,0.2)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
            
            {/* The Label */}
            <div className="absolute -top-6 bg-navy-900 px-6 font-mono text-xl text-blue-300 border border-blue-500/50 rounded-full z-10">
              Communicator
            </div>

            <div className="flex space-x-12 z-10">
              {[0, 1, 2, 3].map((r, i) => (
                <motion.div 
                  key={r}
                  className="w-24 h-24 rounded-full bg-cyan-900 border-2 border-cyan-400 flex items-center justify-center text-2xl font-bold text-white shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5 + (i * 0.2) }}
                >
                  R{r}
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    );
  }
};
