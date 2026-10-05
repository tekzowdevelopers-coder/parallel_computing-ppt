import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, UserX } from 'lucide-react';

export default {
  section: 'WHY MPI?',
  title: 'THE BIG PROBLEM',
  speakerNotes: 'What happens when a computation is simply too vast for one CPU or one computer\'s RAM?',
  component: function Slide04() {
    return (
      <div className="slide">
        <div className="slide-label">04 / WHY MPI?</div>
        <div className="flex flex-col items-center justify-center h-full">
          
          <motion.div 
            className="text-center space-y-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 tracking-tighter"
              animate={{ 
                textShadow: ["0px 0px 0px rgba(239,68,68,0)", "0px 0px 40px rgba(239,68,68,0.8)", "0px 0px 0px rgba(239,68,68,0)"] 
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              1 BILLION <br/> CALCULATIONS
            </motion.h1>

            <div className="flex flex-col items-center space-y-8 relative">
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 10 }}
                transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse" }}
              >
                <UserX size={120} className="text-red-400" />
              </motion.div>
              
              <div className="glass-strong border-red-500/30 p-8 rounded-3xl max-w-2xl relative">
                <AlertCircle className="absolute -top-6 -left-6 text-red-500 bg-navy-900 rounded-full" size={48} />
                <p className="text-3xl text-slate-200 text-center">
                  What happens when a computation is simply too vast for one CPU or one computer's RAM?
                </p>
              </div>

              {/* Endless queue visualization */}
              <div className="flex space-x-2 mt-8 opacity-50">
                {[...Array(10)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="w-16 h-16 bg-red-900/40 rounded border border-red-500/50"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    );
  }
};
