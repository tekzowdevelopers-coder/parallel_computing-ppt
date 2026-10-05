import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default {
  section: 'WHY MPI?',
  title: 'WHAT IF ONE COMPUTER IS NOT ENOUGH?',
  speakerNotes: 'When a single machine runs out of cores or memory, our only option is clustering multiple machines together.',
  component: function Slide05() {
    const [reveal, setReveal] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setReveal(true), 2500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="slide">
        <div className="slide-label">05 / WHY MPI?</div>
        <div className="flex flex-col items-center justify-center h-full">
          
          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-white text-center max-w-5xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: reveal ? -100 : 0 }}
            transition={{ duration: 1 }}
          >
            WHAT IF ONE COMPUTER IS <span className="text-cyan-400">NOT ENOUGH?</span>
          </motion.h1>

          <AnimatePresence>
            {reveal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
                className="absolute"
              >
                <div className="glass p-12 rounded-3xl border-2 border-cyan-400 shadow-[0_0_50px_rgba(6,182,212,0.3)] bg-cyan-950/40">
                  <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 tracking-wider text-center">
                    USE MULTIPLE <br/> COMPUTERS
                  </h2>
                  <p className="text-3xl text-cyan-200 text-center mt-6 font-mono tracking-widest">
                    ( CLUSTERS )
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    );
  }
};
