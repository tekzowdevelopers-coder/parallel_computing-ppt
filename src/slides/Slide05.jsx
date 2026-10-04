import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

const Slide05 = () => {
  return (
    <div className="slide flex flex-col items-center justify-center">
      <div className="slide-label">01 / OPENING</div>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-center leading-tight mb-20 drop-shadow-2xl"
      >
        WHAT IF WE ADD<br/>MORE WORKERS?
      </motion.h1>

      <div className="h-48 flex items-center justify-center relative w-full">
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute flex flex-col items-center"
        >
          <ChefHat size={120} className="text-secondary" />
          <span className="text-3xl mt-4 font-bold text-secondary">1 CHEF</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1, type: "spring" }}
          className="absolute flex gap-12"
        >
          {[1, 2, 3, 4].map((i) => (
            <motion.div key={i} className="flex flex-col items-center"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ delay: 3 + (i * 0.1), duration: 2, repeat: Infinity }}
            >
              <ChefHat size={100} className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute -bottom-16 text-4xl font-bold text-cyan-300"
        >
          4 CHEFS
        </motion.div>
      </div>
    </div>
  );
};

export default {
  section: 'OPENING',
  title: 'WHAT IF WE ADD MORE WORKERS?',
  speakerNotes: 'This is the fundamental question of parallel computing.',
  component: Slide05
};
