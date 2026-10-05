import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Truck } from 'lucide-react';

export default {
  section: 'FINAL CHALLENGE',
  title: 'THE KITCHEN STORY RESOLVED',
  speakerNotes: 'Our restaurant analogy is complete. You now understand how both single kitchens and national restaurant chains operate.',
  component: function Slide93() {
    return (
      <div className="slide">
        <div className="slide-label">93 / FINAL CHALLENGE</div>
        <motion.h1 
          className="text-6xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          THE KITCHEN STORY RESOLVED
        </motion.h1>

        <div className="grid grid-cols-2 gap-12 max-w-6xl mx-auto h-[500px]">
          <motion.div 
            className="glass-strong p-12 rounded-3xl flex flex-col items-center justify-center border border-cyan-500/30"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <UtensilsCrossed className="w-24 h-24 text-cyan-400 mb-8" />
            <h2 className="text-5xl font-bold text-cyan-300 mb-6">OpenMP</h2>
            <p className="text-3xl text-slate-300 text-center">
              One kitchen, multiple chefs working side by side sharing the same ingredients.
            </p>
          </motion.div>

          <motion.div 
            className="glass-strong p-12 rounded-3xl flex flex-col items-center justify-center border border-amber-500/30"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Truck className="w-24 h-24 text-amber-400 mb-8" />
            <h2 className="text-5xl font-bold text-amber-300 mb-6">MPI</h2>
            <p className="text-3xl text-slate-300 text-center">
              Independent franchise kitchens coordinating massive catering via delivery couriers.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
};
