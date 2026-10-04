import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

const Slide06 = () => {
  return (
    <div className="slide">
      <div className="slide-label">01 / OPENING</div>
      <div className="flex flex-col items-center h-full w-full py-12">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl font-bold text-white mb-12"
        >
          PARALLEL KITCHEN
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white bg-navy-800 border-2 border-cyan-500/50 px-12 py-4 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.2)] mb-16 z-10 relative"
        >
          100 ORDERS
        </motion.div>

        <div className="flex justify-between w-full max-w-6xl relative px-8 mt-8">
          {/* Animated branching lines */}
          <svg className="absolute top-[-100px] left-0 w-full h-[120px] -z-10" preserveAspectRatio="none">
            {[20, 40, 60, 80].map((pos, i) => (
              <motion.path
                key={i}
                d={`M 50% 0 C 50% 50, ${pos}% 50, ${pos}% 100`}
                fill="none"
                stroke="rgba(34,211,238,0.4)"
                strokeWidth="4"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
              />
            ))}
          </svg>

          {[
            { id: 1, range: '1-25' },
            { id: 2, range: '26-50' },
            { id: 3, range: '51-75' },
            { id: 4, range: '76-100' }
          ].map((chef, i) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + (i * 0.2) }}
              className="flex flex-col items-center glass p-8 rounded-2xl w-64 border-t-4 border-cyan-500"
            >
              <div className="text-3xl font-bold text-cyan-300 mb-6">ORDERS<br/>{chef.range}</div>
              <ChefHat size={64} className="text-white mb-4" />
              <div className="text-xl font-mono text-secondary">CHEF {chef.id}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5, type: 'spring' }}
          className="mt-auto mb-8 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.6)]"
        >
          WORK HAPPENS AT THE SAME TIME
        </motion.div>
      </div>
    </div>
  );
};

export default {
  section: 'OPENING',
  title: 'PARALLEL KITCHEN',
  speakerNotes: 'With four chefs, we divide the 100 orders into groups. Each chef works independently.',
  component: Slide06
};
