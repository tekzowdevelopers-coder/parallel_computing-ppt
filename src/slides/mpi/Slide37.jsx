import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default {
  section: 'MESSAGE PASSING',
  title: 'MESSAGE TAGS',
  speakerNotes: 'Tags allow processes to classify different categories of messages so they don\'t get mixed up.',
  component: function Slide37() {
    const tags = [
      { id: 10, label: "Sensor Readings", color: "text-cyan" },
      { id: 20, label: "Calculation Results", color: "text-green" },
      { id: 99, label: "Shutdown Signal", color: "text-red" }
    ];
    
    return (
      <div className="slide">
        <div className="slide-label">37 / MESSAGE PASSING</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MESSAGE <span className="text-amber">TAGS</span>
        </motion.h1>
        
        <div className="flex justify-center gap-12 w-full max-w-5xl mx-auto">
          {tags.map((tag, i) => (
            <motion.div
              key={tag.id}
              className="flex flex-col items-center gap-6 glass p-8 rounded-xl flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 * i }}
            >
              <div className="relative">
                <Mail className={`w-32 h-32 ${tag.color}`} />
                <div className="absolute -top-4 -right-4 bg-amber text-navy-900 font-bold w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                  {tag.id}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-white">{tag.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
};
