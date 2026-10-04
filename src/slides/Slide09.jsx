import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const Slide09 = () => {
  return (
    <div className="slide">
      <div className="slide-label">02 / CPU</div>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-bold text-white mb-24 tracking-widest"
        >
          MEET THE CPU
        </motion.h1>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-96 h-96 border-8 border-slate-700 bg-slate-900 rounded-3xl p-4 relative grid grid-cols-2 grid-rows-2 gap-4 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* CPU Pins effect */}
            <div className="absolute -inset-4 border-2 border-dashed border-slate-600 rounded-[2rem] -z-10 opacity-30"></div>
            
            {[0, 1, 2, 3].map((core) => (
              <motion.div
                key={core}
                initial={{ backgroundColor: 'rgba(30, 41, 59, 1)' }}
                animate={{ 
                  backgroundColor: ['rgba(30, 41, 59, 1)', 'rgba(8, 145, 178, 0.4)'],
                  boxShadow: ['0 0 0px rgba(6, 182, 212, 0)', '0 0 20px rgba(6, 182, 212, 0.6)']
                }}
                transition={{ delay: 1.5 + (core * 0.5), duration: 0.5, fillMode: 'forwards' }}
                className="rounded-xl border-2 border-slate-700 flex items-center justify-center relative overflow-hidden"
              >
                <Cpu size={48} className="text-slate-500 absolute opacity-20" />
                <span className="text-2xl font-mono font-bold text-white z-10">CORE {core}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default {
  section: 'CPU',
  title: 'MEET THE CPU',
  speakerNotes: 'Modern processors contain multiple processing cores. Let\'s look inside.',
  component: Slide09
};
