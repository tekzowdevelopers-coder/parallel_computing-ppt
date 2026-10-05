import React from 'react';
import { motion } from 'framer-motion';
import { Server, Network, Cpu } from 'lucide-react';

export default {
  section: 'FINAL CHALLENGE',
  title: 'COMPLETE MPI ARCHITECTURAL MAP',
  speakerNotes: 'Here is the complete map of everything we covered today in Day 2.',
  component: function Slide90() {
    return (
      <div className="slide">
        <div className="slide-label">90 / FINAL CHALLENGE</div>
        <motion.h1 
          className="text-6xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          COMPLETE MPI ARCHITECTURAL MAP
        </motion.h1>

        <div className="flex flex-col items-center max-w-5xl mx-auto relative">
          
          <motion.div 
            className="bg-slate-800 border-2 border-amber-500 p-6 rounded-2xl w-96 text-center z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-amber-400 mb-2">MPI</h2>
            <p className="text-xl text-slate-300">Message Passing Interface</p>
          </motion.div>

          <div className="w-px h-16 bg-slate-600"></div>
          <div className="w-[600px] h-px bg-slate-600"></div>
          
          <div className="flex w-[700px] justify-between relative mt-0">
            <div className="w-px h-16 bg-slate-600 absolute left-0"></div>
            <div className="w-px h-16 bg-slate-600 absolute right-0"></div>
            
            {/* Left Branch */}
            <motion.div 
              className="bg-slate-800/80 border border-cyan-500/50 p-6 rounded-2xl w-72 text-center mt-16"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center justify-center gap-2"><Cpu /> Processes</h3>
              <ul className="text-lg text-slate-300 text-left space-y-2">
                <li>• Rank (ID)</li>
                <li>• Comm World (Group)</li>
                <li>• Private Memory</li>
              </ul>
            </motion.div>

            {/* Right Branch */}
            <motion.div 
              className="bg-slate-800/80 border border-green-500/50 p-6 rounded-2xl w-72 text-center mt-16"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center justify-center gap-2"><Network /> Communication</h3>
              <ul className="text-lg text-slate-300 text-left space-y-2">
                <li>• Point-to-Point (Send/Recv)</li>
                <li>• Collectives (Bcast, Reduce)</li>
                <li>• Synchronization (Barrier)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
};
