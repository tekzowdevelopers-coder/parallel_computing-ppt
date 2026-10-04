import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function KitchenScene({ chefCount = 1, orders = [], showManager = false, animate = true, activeChefs = [] }) {
  const chefs = Array.from({ length: chefCount });
  
  return (
    <div className="flex flex-col items-center justify-center p-8 glass rounded-2xl relative w-full h-96">
      {showManager && (
        <motion.div 
          className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-2xl shadow-lg glow-amber">🧑‍💼</div>
          <span className="text-amber-400 font-bold mt-2">Manager</span>
        </motion.div>
      )}
      
      <div className="flex gap-8 mt-16 relative">
        {chefs.map((_, i) => (
          <motion.div 
            key={i}
            className="flex flex-col items-center"
            initial={animate ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all duration-300 ${activeChefs.includes(i) ? 'bg-cyan-500 glow-cyan scale-110' : 'bg-slate-700'}`}>
              👨‍🍳
            </div>
            <span className="text-cyan-400 font-bold mt-2">Chef {i}</span>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4 mt-12 h-20">
        <AnimatePresence>
          {orders.map((order, i) => (
            <motion.div
              key={order + i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white text-navy-900 px-4 py-2 rounded shadow-md font-bold text-sm flex items-center justify-center"
            >
              {order}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
