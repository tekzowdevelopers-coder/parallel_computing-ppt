import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default {
  section: 'MESSAGE PASSING',
  title: 'THE CORE IDEA: MESSAGE PASSING',
  speakerNotes: 'Because memory is private, data exchange is explicit through messages.',
  component: function Slide32() {
    return (
      <div className="slide">
        <div className="slide-label">32 / MESSAGE PASSING</div>
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          THE CORE IDEA
        </motion.h1>
        
        <div className="flex items-center justify-center gap-8 my-16">
          <motion.div className="w-48 h-48 glass flex items-center justify-center rounded-2xl border-cyan border-2 text-4xl font-bold text-cyan">
            Process A
          </motion.div>
          
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ x: [0, 100, 200] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              <Mail className="w-16 h-16 text-amber" />
            </motion.div>
            <ArrowRight className="w-24 h-8 text-secondary" />
          </div>
          
          <motion.div className="w-48 h-48 glass flex items-center justify-center rounded-2xl border-green border-2 text-4xl font-bold text-green">
            Process B
          </motion.div>
        </div>
        
        <motion.h2 
          className="text-5xl text-center text-white mt-16 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          DATA MUST BE <span className="text-amber">EXPLICITLY SENT AND RECEIVED</span>
        </motion.h2>
      </div>
    );
  }
};
