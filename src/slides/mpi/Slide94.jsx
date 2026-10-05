import React from 'react';
import { motion } from 'framer-motion';

export default {
  section: 'FINAL CHALLENGE',
  title: '3 CRITICAL QUESTIONS BEFORE PARALLELIZING',
  speakerNotes: 'Always ask these 3 questions before writing a single line of parallel code.',
  component: function Slide94() {
    const questions = [
      "Can this problem be divided into independent parts?",
      "How much data must workers exchange?",
      "Does compute time exceed communication overhead?"
    ];

    return (
      <div className="slide">
        <div className="slide-label">94 / FINAL CHALLENGE</div>
        <motion.h1 
          className="text-6xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          3 CRITICAL QUESTIONS
        </motion.h1>

        <div className="space-y-8 max-w-5xl mx-auto">
          {questions.map((q, i) => (
            <motion.div
              key={i}
              className="glass-strong p-8 rounded-2xl border-l-8 border-cyan-500 flex items-center space-x-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.3 }}
            >
              <span className="text-6xl font-black text-slate-600/50">{i + 1}</span>
              <p className="text-4xl font-medium text-slate-200">{q}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
};
