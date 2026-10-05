import React from 'react';
import { motion } from 'framer-motion';
import { Server } from 'lucide-react';

export default {
  section: 'WHY MPI?',
  title: 'MULTIPLE COMPUTERS',
  speakerNotes: 'We now have 4 separate computers with separate RAM. How do they share work without shared memory?',
  component: function Slide06() {
    return (
      <div className="slide">
        <div className="slide-label">06 / WHY MPI?</div>
        <div className="flex flex-col items-center justify-center h-full w-full">
          
          <div className="grid grid-cols-2 gap-16 w-full max-w-5xl relative">
            
            {/* Servers */}
            {[1, 2, 3, 4].map((num, i) => (
              <motion.div
                key={num}
                className="glass p-8 rounded-3xl flex flex-col items-center space-y-4 border border-cyan-900/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="relative">
                  <Server size={100} className="text-slate-300" />
                  <motion.div 
                    className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                  />
                </div>
                <h3 className="text-3xl font-bold text-white">Computer {num}</h3>
                <div className="w-full bg-slate-800 rounded px-4 py-2 text-center text-slate-400 font-mono">
                  Isolated RAM
                </div>
              </motion.div>
            ))}

            {/* Central Question overlay */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <div className="bg-navy-900/90 backdrop-blur-md p-10 rounded-full border-4 border-amber-500 shadow-[0_0_60px_rgba(245,158,11,0.5)] transform scale-110">
                <h2 className="text-5xl font-black text-amber-400 text-center uppercase tracking-widest">
                  How do they <br/> communicate?
                </h2>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    );
  }
};
