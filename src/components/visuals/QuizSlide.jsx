import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function QuizSlide({ question, options = [], correctIndex, revealed: controlledRevealed }) {
  const [internalRevealed, setInternalRevealed] = useState(false);
  const isRevealed = controlledRevealed !== undefined ? controlledRevealed : internalRevealed;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-5xl mx-auto cursor-pointer" onClick={() => setInternalRevealed(true)}>
      <motion.h2 
        className="text-5xl font-bold text-white text-center mb-16 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {question}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {options.map((option, i) => {
          const isCorrect = i === correctIndex;
          let styleClass = 'glass hover:bg-slate-800/80';
          
          if (isRevealed) {
            styleClass = isCorrect ? 'glass glow-green bg-green-900/20 border-green-500/50' : 'glass opacity-40 grayscale';
          }

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl flex items-center gap-6 transition-all duration-500 ${styleClass}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${isRevealed && isCorrect ? 'bg-green-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
                {option.label || String.fromCharCode(65 + i)}
              </div>
              <span className="text-2xl text-slate-200">{option.text}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
