import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Package } from 'lucide-react';

export default {
  section: 'WHY MPI?',
  title: 'THE COMMUNICATION PROBLEM',
  speakerNotes: 'When one kitchen needs data from another, they don\'t share a shelf—they send a message. That is Message Passing.',
  component: function Slide09() {
    const [step, setStep] = useState(0);

    useEffect(() => {
      const timer1 = setTimeout(() => setStep(1), 1500);
      const timer2 = setTimeout(() => setStep(2), 3000);
      const timer3 = setTimeout(() => setStep(3), 5000);
      return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
    }, []);

    return (
      <div className="slide">
        <div className="slide-label">09 / WHY MPI?</div>
        <div className="flex flex-col items-center justify-center h-full w-full">
          
          <div className="flex justify-between items-center w-full max-w-6xl relative">
            
            {/* Kitchen A */}
            <div className="glass p-10 rounded-3xl w-80 flex flex-col items-center z-10 border-red-500/30">
              <h3 className="text-4xl font-bold text-red-400 mb-4">Kitchen A</h3>
              {step >= 1 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white text-black p-4 rounded-2xl rounded-bl-none mb-6 font-bold shadow-lg relative"
                >
                  "I need more flour!"
                </motion.div>
              )}
            </div>

            {/* Courier Path */}
            <div className="flex-1 mx-8 relative h-32 flex items-center justify-center">
              <div className="absolute w-full border-t-4 border-dashed border-slate-600 top-1/2" />
              
              {step >= 2 && (
                <motion.div 
                  className="absolute z-20 flex flex-col items-center"
                  initial={{ left: "10%" }}
                  animate={{ left: "80%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <Package size={48} className="text-cyan-400 mb-2 drop-shadow-lg" />
                  <span className="bg-cyan-900 text-cyan-100 px-3 py-1 rounded text-sm font-bold border border-cyan-500">
                    DELIVERY
                  </span>
                </motion.div>
              )}
            </div>

            {/* Kitchen B */}
            <div className="glass p-10 rounded-3xl w-80 flex flex-col items-center z-10 border-blue-500/30">
              <h3 className="text-4xl font-bold text-blue-400 mb-4">Kitchen B</h3>
              <div className="h-20" /> {/* Spacer */}
            </div>
            
          </div>

          {step >= 3 && (
            <motion.div 
              className="mt-20 glass-strong p-8 border-cyan-400 rounded-2xl text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <MessageSquare size={60} className="text-cyan-400 mx-auto mb-6" />
              <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                MESSAGE PASSING
              </h2>
            </motion.div>
          )}

        </div>
      </div>
    );
  }
};
