import React from 'react';
import { motion } from 'framer-motion';

const Slide20 = () => {
  return (
    <div className="slide">
      <div className="slide-label">05 / FORK-JOIN</div>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-24 tracking-wider"
        >
          FORK-JOIN MODEL
        </motion.h1>

        <div className="w-full max-w-5xl h-96 relative flex items-center">
          
          {/* Main Thread Start */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "20%" }}
            transition={{ duration: 1 }}
            className="h-4 bg-cyan-400 absolute left-0 rounded-l-full z-10"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute left-[5%] top-1/2 -mt-16 text-2xl font-bold text-cyan-300"
          >
            MAIN THREAD
          </motion.div>

          {/* Fork Point */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="w-8 h-8 rounded-full bg-white absolute left-[20%] -ml-4 z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute left-[20%] -ml-8 top-1/2 mt-8 text-2xl font-bold text-white"
          >
            FORK
          </motion.div>

          {/* Parallel Threads */}
          {[ -120, -40, 40, 120 ].map((offset, i) => (
            <motion.div key={i} className="absolute left-[20%] w-[60%] h-full flex items-center">
              <svg className="w-full h-full absolute overflow-visible">
                <motion.path
                  d={`M 0,0 C 50,0 50,${offset} 100,${offset} L ${600 /* approx width */},${offset} C 650,${offset} 650,0 700,0`}
                  fill="none"
                  stroke="rgba(74, 222, 128, 1)"
                  strokeWidth="6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 2 + (i * 0.2), duration: 2 }}
                />
              </svg>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="absolute left-1/2 top-1/2 text-xl font-bold text-green-300 bg-navy-900 px-2 rounded"
                style={{ marginTop: offset - 14, marginLeft: -40 }}
              >
                THREAD {i}
              </motion.div>
            </motion.div>
          ))}

          {/* Join Point */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 4.5, type: "spring" }}
            className="w-8 h-8 rounded-full bg-white absolute right-[20%] -mr-4 z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5 }}
            className="absolute right-[20%] -mr-8 top-1/2 mt-8 text-2xl font-bold text-white"
          >
            JOIN
          </motion.div>

          {/* Main Thread End */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "20%" }}
            transition={{ delay: 5, duration: 1 }}
            className="h-4 bg-cyan-400 absolute right-0 rounded-r-full z-10"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6 }}
            className="absolute right-[5%] top-1/2 -mt-16 text-2xl font-bold text-cyan-300"
          >
            MAIN THREAD
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default {
  section: 'FORK-JOIN',
  title: 'FORK-JOIN MODEL',
  speakerNotes: 'The fork-join model is the foundation of OpenMP. The main thread forks into a team, they work, then join back.',
  component: Slide20
};
