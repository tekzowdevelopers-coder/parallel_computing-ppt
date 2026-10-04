import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, FileText } from 'lucide-react';

const Slide03 = () => {
  return (
    <div className="slide">
      <div className="slide-label">01 / OPENING</div>
      <div className="flex flex-col items-center justify-center h-full space-y-12 w-full">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-red-500 tracking-wider text-center drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]"
        >
          THE KITCHEN PROBLEM
        </motion.h1>

        <div className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl font-bold text-white mb-8"
          >
            100 ORDERS
          </motion.div>
          
          <div className="flex gap-2 flex-wrap justify-center w-full">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <FileText size={32} className="text-secondary opacity-50" />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="mt-16 flex flex-col items-center"
          >
            <ChefHat size={100} className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] mb-4" />
            <span className="text-2xl text-cyan-300 font-mono">1 CHEF</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default {
  section: 'OPENING',
  title: 'THE KITCHEN PROBLEM',
  speakerNotes: 'Imagine a restaurant with 100 orders and only one chef. What happens?',
  component: Slide03
};
