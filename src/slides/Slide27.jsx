import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FIRST PROGRAM',
  title: 'HELLO OPENMP',
  speakerNotes: 'This is the complete program. Each thread will print its own ID.',
  component: function Slide27() {
    const codeLines = [
      { text: "#include <stdio.h>", color: "text-pink-400" },
      { text: "#include <omp.h>", color: "text-cyan-400" },
      { text: "", color: "" },
      { text: "int main()", color: "text-blue-400" },
      { text: "{", color: "text-slate-300" },
      { text: "    #pragma omp parallel", color: "text-cyan-300 font-bold shadow-cyan" },
      { text: "    {", color: "text-slate-300" },
      { text: '        printf("Hello from thread %d\\n",', color: "text-green-300" },
      { text: "               omp_get_thread_num());", color: "text-amber-300" },
      { text: "    }", color: "text-slate-300" },
      { text: "", color: "" },
      { text: "    return 0;", color: "text-purple-400" },
      { text: "}", color: "text-slate-300" }
    ];

    return (
      <div className="slide">
        <div className="slide-label">27 / FIRST PROGRAM</div>
        <motion.h1 
          className="text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          HELLO OPENMP
        </motion.h1>
        
        <motion.div 
          className="w-full max-w-4xl bg-[#1e1e1e] rounded-xl border border-slate-700 shadow-2xl overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex bg-[#252526] h-10 border-b border-[#3c3c3c]">
            <div className="flex items-center px-4 bg-[#1e1e1e] border-t-2 border-cyan-500 text-cyan-400 text-sm font-sans">
              hello.c
            </div>
          </div>
          
          <div className="p-8 text-2xl font-mono leading-loose">
            {codeLines.map((line, index) => (
              <motion.div 
                key={index}
                className="flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.15 }}
              >
                <div className="w-12 text-slate-600 text-right pr-4 select-none">{index + 1}</div>
                <div className={`${line.color} whitespace-pre`}>
                  {line.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }
};
