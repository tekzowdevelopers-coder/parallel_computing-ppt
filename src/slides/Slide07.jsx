import React from 'react';
import { motion } from 'framer-motion';
import { Box, Split, Users, CheckCircle } from 'lucide-react';

const Slide07 = () => {
  return (
    <div className="slide">
      <div className="slide-label">01 / OPENING</div>
      <div className="flex flex-col items-center py-12 h-full w-full space-y-16">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-7xl font-bold text-white text-center"
        >
          WHAT IS PARALLEL COMPUTING?
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass p-12 rounded-3xl max-w-5xl text-center border-l-4 border-cyan-500 shadow-xl"
        >
          <p className="text-4xl leading-tight text-white font-medium">
            "Parallel computing <span className="text-cyan-400">divides</span> a problem into smaller pieces so multiple processing units can work on them <span className="text-green-400 font-bold">concurrently</span>."
          </p>
        </motion.div>

        <div className="flex items-center justify-between w-full max-w-6xl mt-16">
          {[
            { icon: Box, label: 'BIG PROBLEM', color: 'text-amber-400' },
            { icon: Split, label: 'DIVIDE', color: 'text-secondary' },
            { icon: Box, label: 'TASKS', color: 'text-cyan-400', multiple: true },
            { icon: Users, label: 'MULTIPLE WORKERS', color: 'text-purple-400' },
            { icon: CheckCircle, label: 'RESULT', color: 'text-green-400' }
          ].map((step, i) => (
            <React.Fragment key={i}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + (i * 0.4) }}
                className="flex flex-col items-center space-y-4"
              >
                {step.multiple ? (
                  <div className="flex gap-2">
                    <step.icon size={48} className={step.color} />
                    <step.icon size={48} className={step.color} />
                  </div>
                ) : (
                  <step.icon size={80} className={step.color} />
                )}
                <span className="text-xl font-bold text-white">{step.label}</span>
              </motion.div>
              {i < 4 && (
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 64, opacity: 1 }}
                  transition={{ delay: 1.2 + (i * 0.4), duration: 0.5 }}
                  className="h-1 bg-gradient-to-r from-secondary to-cyan-500"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default {
  section: 'OPENING',
  title: 'WHAT IS PARALLEL COMPUTING?',
  speakerNotes: 'Here is the formal definition. The key word is concurrently — at the same time.',
  component: Slide07
};
