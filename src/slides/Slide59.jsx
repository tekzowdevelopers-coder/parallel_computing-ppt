import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'WRAP-UP',
  title: 'Think Like a Parallel Programmer',
  speakerNotes: 'Before parallelizing, always ask: is this problem divisible? Are the pieces independent?',
  component: function Slide59() {
    const flow = ["DIVIDE", "DISTRIBUTE", "EXECUTE", "SYNCHRONIZE", "COMBINE"];

    return (
      <div className="slide">
        <div className="slide-label">59 / WRAP-UP</div>
        
        <div className="flex flex-col h-full w-full justify-center items-center space-y-16">
          <motion.h1 
            className="text-7xl font-bold text-cyan-400 text-center leading-tight max-w-5xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            THINK LIKE A PARALLEL PROGRAMMER
          </motion.h1>

          <motion.div 
            className="text-4xl text-white italic bg-slate-800/50 p-8 rounded-2xl border-l-4 border-amber-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            "Can this problem be divided into independent pieces?"
          </motion.div>

          <motion.div 
            className="flex items-center space-x-6 w-full max-w-6xl justify-center pt-12"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3, delayChildren: 2.5 } }
            }}
          >
            {flow.map((step, i) => (
              <React.Fragment key={i}>
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-navy-900 border border-cyan-500/50 text-cyan-300 font-bold px-6 py-4 rounded-xl text-2xl shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                >
                  {step}
                </motion.div>
                {i < flow.length - 1 && (
                  <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-slate-500 font-bold text-2xl">→</motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
};
