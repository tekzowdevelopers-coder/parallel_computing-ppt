import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FIRST PROGRAM',
  title: 'TIME TO OPEN VS CODE',
  speakerNotes: 'Let\'s write our first OpenMP program. Open your editor.',
  component: function Slide24() {
    return (
      <div className="slide">
        <div className="slide-label">24 / FIRST PROGRAM</div>
        
        <motion.div 
          className="w-full max-w-5xl h-[70vh] bg-[#1e1e1e] rounded-xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* VS Code Header */}
          <div className="h-10 bg-[#252526] flex items-center px-4 border-b border-[#3c3c3c]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-slate-400 text-sm font-sans">hello.c - Visual Studio Code</div>
          </div>
          
          {/* Editor Tabs */}
          <div className="flex bg-[#252526] h-10 border-b border-[#3c3c3c]">
            <div className="flex items-center px-4 bg-[#1e1e1e] border-t-2 border-cyan-500 text-cyan-400 text-sm font-sans">
              <span className="mr-2 text-yellow-500">C</span> hello.c
            </div>
          </div>
          
          {/* Editor Body */}
          <div className="flex-1 p-8 flex items-center justify-center">
            <motion.h1 
              className="text-6xl font-bold text-white tracking-widest text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              TIME TO <span className="text-cyan-400">CODE</span>
            </motion.h1>
          </div>
          
          {/* Status Bar */}
          <div className="h-6 bg-[#007acc] flex items-center px-4 justify-between text-white text-xs font-sans">
            <div className="flex gap-4">
              <span>master*</span>
              <span>0 errors, 0 warnings</span>
            </div>
            <div className="flex gap-4">
              <span>Ln 1, Col 1</span>
              <span>UTF-8</span>
              <span>C</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
};
