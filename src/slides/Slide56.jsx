import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleQuestion } from 'lucide-react';

export default {
  section: 'PRACTICAL LAB',
  title: 'Discussion',
  speakerNotes: 'Let\'s discuss what you observed. These are fundamental questions in parallel computing.',
  component: function Slide56() {
    const questions = [
      "1. Why did the output order change?",
      "2. Does more threads always mean faster?",
      "3. Why do threads need synchronization?",
      "4. Which workloads are good candidates for parallelization?"
    ];

    return (
      <div className="slide-left">
        <div className="slide-label">56 / PRACTICAL LAB</div>
        
        <div className="flex flex-col h-full w-full justify-center">
          <motion.div 
            className="flex items-center space-x-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <MessageCircleQuestion size={64} className="text-cyan-400" />
            <h1 className="text-7xl font-bold text-white">DISCUSSION</h1>
          </motion.div>

          <div className="space-y-8 max-w-5xl">
            {questions.map((q, i) => (
              <motion.div 
                key={i}
                className="glass p-8 rounded-2xl text-4xl text-slate-200"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.5) }}
              >
                {q}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
