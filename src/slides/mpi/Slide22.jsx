import React from 'react';
import { motion } from 'framer-motion';
import { PowerOff } from 'lucide-react';

export default {
  section: 'MPI FUNDAMENTALS',
  title: 'MPI_Finalize()',
  speakerNotes: 'MPI_Finalize shuts down the MPI environment. After calling it, no MPI routines may be called.',
  component: function Slide22() {
    return (
      <div className="slide">
        <div className="slide-label">22 / MPI FUNDAMENTALS</div>
        <div className="flex flex-col items-center justify-center h-full w-full px-16">
          
          <motion.div
            className="w-full glass p-12 rounded-3xl border-4 border-red-500 bg-[#0d1117] text-center mb-16 shadow-[0_0_50px_rgba(239,68,68,0.2)]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <pre className="text-6xl font-mono text-red-400 inline-block">
              MPI_Finalize();
            </pre>
          </motion.div>

          <div className="grid grid-cols-2 gap-12 w-full">
            <motion.div 
              className="bg-navy-900/80 p-8 rounded-2xl border border-slate-700"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">What it does</h3>
              <ul className="text-2xl text-slate-300 space-y-4 list-disc list-inside">
                <li>Cleans up all MPI state</li>
                <li>Tears down communication buffers</li>
                <li>Disconnects from the network</li>
                <li className="text-red-400 font-bold mt-4 list-none">NO MPI calls allowed after this point!</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-amber-950/30 p-8 rounded-2xl border border-amber-500/50 flex flex-col items-center justify-center text-center"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <PowerOff size={64} className="text-amber-400 mb-6" />
              <h3 className="text-3xl font-bold text-amber-300 mb-2">Kitchen Analogy</h3>
              <p className="text-2xl text-amber-100/80">
                Service closed, stations scrubbed down, walkie-talkies turned off.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    );
  }
};
