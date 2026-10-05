import React from 'react';
import { motion } from 'framer-motion';
import { Pizza, Coffee, IceCream, Utensils } from 'lucide-react';

export default {
  section: 'WHY MPI?',
  title: 'MULTIPLE KITCHENS',
  speakerNotes: 'Each kitchen is self-contained. Kitchen A has its own pantry and cannot reach into Kitchen B\'s shelves.',
  component: function Slide08() {
    const kitchens = [
      { id: 'A', name: 'Pizza Station', icon: Pizza, color: 'text-red-400', border: 'border-red-500/30', bg: 'bg-red-950/20' },
      { id: 'B', name: 'Burger Grill', icon: Utensils, color: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-950/20' },
      { id: 'C', name: 'Desserts', icon: IceCream, color: 'text-pink-400', border: 'border-pink-500/30', bg: 'bg-pink-950/20' },
      { id: 'D', name: 'Drinks Bar', icon: Coffee, color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-950/20' }
    ];

    return (
      <div className="slide">
        <div className="slide-label">08 / WHY MPI?</div>
        <div className="flex flex-col items-center justify-center h-full w-full">
          
          <motion.h2 
            className="text-5xl font-bold text-white mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            4 INDEPENDENT WORKSPACES
          </motion.h2>

          <div className="grid grid-cols-4 gap-8 w-full max-w-7xl">
            {kitchens.map((k, i) => (
              <motion.div
                key={k.id}
                className={`glass p-8 rounded-2xl border-2 flex flex-col items-center ${k.border} ${k.bg} relative overflow-hidden`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="absolute top-0 w-full text-center bg-black/40 py-1 font-mono text-sm text-slate-400">
                  ISOLATED MEMORY
                </div>
                
                <k.icon size={80} className={`${k.color} mt-6 mb-4`} />
                <h3 className="text-3xl font-black text-white mb-2">Kitchen {k.id}</h3>
                <p className={`text-xl font-medium ${k.color}`}>{k.name}</p>
                
                <div className="w-full mt-8 space-y-3">
                  <div className="bg-black/50 p-3 rounded-lg text-center text-slate-300 font-mono text-sm border border-slate-700">Own Staff</div>
                  <div className="bg-black/50 p-3 rounded-lg text-center text-slate-300 font-mono text-sm border border-slate-700">Own Tools</div>
                  <div className="bg-black/50 p-3 rounded-lg text-center text-slate-300 font-mono text-sm border border-slate-700">Own Pantry</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="mt-16 text-2xl text-slate-300 bg-slate-900/50 p-6 rounded-xl border border-slate-700 text-center max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            They are fully self-contained. Kitchen A <strong>cannot reach</strong> into Kitchen B's pantry.
          </motion.p>
        </div>
      </div>
    );
  }
};
