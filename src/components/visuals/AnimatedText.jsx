import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedText({ text, animation = 'fade', delay = 0, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div;
  
  const variants = {
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay } } },
    slide: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } } },
    scale: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay } } }
  };

  if (animation === 'typewriter') {
    return (
      <MotionTag className={className}>
        {text.split('').map((char, index) => (
          <motion.span
            key={`${index}-${char}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.05, delay: delay + index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={variants[animation]}
      initial="hidden"
      animate="visible"
    >
      {text}
    </MotionTag>
  );
}
