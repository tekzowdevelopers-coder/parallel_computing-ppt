import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'WHY MPI?',
  title: 'MPI SUPPORTED LANGUAGES',
  speakerNotes: 'MPI is supported in C, Fortran, and Python. We will write standard C with mpi.h.',
  component: function Slide12() {
    const langs = [
      { name: 'C / C++', active: true },
      { name: 'Fortran', active: false },
      { name: 'Python (mpi4py)', active: false },
      { name: 'R', active: false }
    ];

    return (
      <div className="slide">
        <div className="slide-label">12 / WHY MPI?</div>
        <div className="flex flex-col items-center justify-center h-full w-full">
          
          <h2 className="text-5xl font-bold text-white mb-20">Officially Supported Languages</h2>
          
          <div className="flex space-x-8 mb-24">
            {langs.map((lang, i) => (
              <motion.div
                key={lang.name}
                className={`px-10 py-8 rounded-3xl text-3xl font-bold border-4 flex items-center justify-center
                  ${lang.active 
                    ? 'bg-cyan-900 border-cyan-400 text-white shadow-[0_0_30px_rgba(6,182,212,0.5)] scale-110 z-10' 
                    : 'bg-slate-900 border-slate-700 text-slate-500 opacity-60'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: lang.active ? 1 : 0.6, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                {lang.name}
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-4xl text-slate-300">We will use standard C</h3>
            <div className="bg-black/50 p-6 rounded-xl border border-slate-800 font-mono text-3xl text-cyan-300 inline-block">
              #include &lt;mpi.h&gt;
            </div>
          </motion.div>

        </div>
      </div>
    );
  }
};
