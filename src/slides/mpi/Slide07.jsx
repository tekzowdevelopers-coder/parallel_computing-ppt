import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, AlertTriangle, ArrowRight } from 'lucide-react';

export default {
  section: 'WHY MPI?',
  title: 'THE KITCHEN STORY',
  speakerNotes: 'Imagine one kitchen getting an order for thousands of items. The only scalable solution is opening multiple branch kitchens.',
  component: function Slide07() {
    return (
      <div className="slide">
        <div className="slide-label">07 / WHY MPI?</div>
        <div className="flex flex-col h-full w-full justify-center px-10">
          
          <div className="flex items-center justify-between space-x-12">
            
            {/* The Huge Order */}
            <motion.div 
              className="flex-1 glass border-red-500/40 p-10 rounded-3xl flex flex-col items-center text-center"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <h3 className="text-4xl font-bold text-red-400 mb-8 border-b border-red-500/30 pb-4 w-full">GIANT ORDER</h3>
              <ul className="text-3xl space-y-4 font-mono text-slate-200">
                <li>1000 Pizzas</li>
                <li>500 Burgers</li>
                <li>300 Desserts</li>
                <li>200 Drinks</li>
              </ul>
              
              <div className="mt-12 bg-red-950/50 p-6 rounded-2xl w-full flex flex-col items-center border border-red-900">
                <AlertTriangle size={64} className="text-red-500 mb-4" />
                <p className="text-2xl text-red-300 font-bold">1 Kitchen = Collapsing</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArrowRight size={80} className="text-cyan-500" />
            </motion.div>

            {/* The Solution */}
            <motion.div 
              className="flex-1 glass border-green-500/40 p-10 rounded-3xl flex flex-col items-center"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h3 className="text-4xl font-bold text-green-400 mb-8 border-b border-green-500/30 pb-4 w-full text-center">THE SOLUTION</h3>
              
              <div className="grid grid-cols-2 gap-6 w-full">
                {['A', 'B', 'C', 'D'].map((k, i) => (
                  <motion.div 
                    key={k}
                    className="bg-green-950/30 p-6 rounded-xl flex items-center justify-center space-x-4 border border-green-800/50"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.2 }}
                  >
                    <UtensilsCrossed className="text-green-400" size={32} />
                    <span className="text-2xl font-bold text-green-100">Kitchen {k}</span>
                  </motion.div>
                ))}
              </div>
              
              <p className="mt-10 text-2xl text-green-200 text-center font-bold">
                Open multiple branch kitchens!
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    );
  }
};
