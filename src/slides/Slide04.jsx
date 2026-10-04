import React from 'react';
import { motion } from 'framer-motion';
import { User, ArrowDown } from 'lucide-react';

const Slide04 = () => {
  return (
    <div className="slide">
      <div className="slide-label">01 / OPENING</div>
      <div className="flex flex-col items-center justify-center h-full space-y-12">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-white tracking-wider text-center"
        >
          SEQUENTIAL COMPUTING
        </motion.h1>

        <div className="flex flex-col items-center justify-center space-y-6 flex-1 w-full max-w-2xl mt-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <User size={80} className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          </motion.div>

          {[1, 2, 3, 4].map((task, i) => (
            <React.Fragment key={task}>
              <motion.div
                initial={{ opacity: 0.2, scale: 0.9 }}
                animate={{ 
                  opacity: [0.2, 1, 0.2], 
                  scale: [0.9, 1.05, 0.9],
                  borderColor: ['rgba(34,211,238,0.2)', 'rgba(34,211,238,1)', 'rgba(34,211,238,0.2)']
                }}
                transition={{ 
                  duration: 2, 
                  delay: i * 2,
                  repeat: Infinity,
                  repeatDelay: 6
                }}
                className="w-full glass py-6 px-12 rounded-xl text-center text-3xl font-bold text-white border-2"
              >
                TASK {task}
              </motion.div>
              {i < 3 && (
                <motion.div
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ 
                    duration: 2, 
                    delay: (i * 2) + 1,
                    repeat: Infinity,
                    repeatDelay: 6
                  }}
                >
                  <ArrowDown size={32} className="text-cyan-400" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-5xl font-bold text-amber-500 tracking-widest mt-12"
        >
          ONE AT A TIME
        </motion.div>
      </div>
    </div>
  );
};

export default {
  section: 'OPENING',
  title: 'SEQUENTIAL COMPUTING',
  speakerNotes: 'This is sequential computing. One task after another. The chef handles everything alone.',
  component: Slide04
};
