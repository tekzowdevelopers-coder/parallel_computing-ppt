import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', glow = false, glowColor = 'cyan', onClick, animate = true }) {
  let glowClass = '';
  if (glow) {
    if (glowColor === 'cyan') glowClass = 'glow-cyan';
    else if (glowColor === 'green') glowClass = 'glow-green';
    else if (glowColor === 'red') glowClass = 'glow-red';
  }

  const baseClass = `glass ${glowClass} ${className} ${onClick ? 'cursor-pointer' : ''}`;

  if (animate) {
    return (
      <motion.div
        className={baseClass}
        onClick={onClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={baseClass} onClick={onClick}>
      {children}
    </div>
  );
}
