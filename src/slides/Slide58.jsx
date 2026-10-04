import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, ArrowRight } from 'lucide-react';

export default {
  section: 'WRAP-UP',
  title: 'The Kitchen Again',
  speakerNotes: 'Our kitchen analogy comes full circle. From one chef to a coordinated team.',
  component: function Slide58() {
    const topRow = ["ONE CHEF", "FOUR CHEFS", "ORDERS", "DIVIDE", "WORK TOGETHER", "RESULT"];
    const bottomRow = ["PROGRAM", "THREADS", "WORK", "DIVIDE", "SYNCHRONIZE", "RESULT"];

    return (
      <div className="slide">
        <div className="slide-label">58 / WRAP-UP</div>
        
        <div className="flex flex-col h-full w-full justify-center items-center space-y-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-cyan-400 mb-8"
          >
            <ChefHat size={100} />
          </motion.div>

          <div className="flex flex-col space-y-12 w-full max-w-6xl">
            <div className="flex items-center justify-between w-full">
              {topRow.map((item, i) => (
                <React.Fragment key={`top-${i}`}>
                  <motion.div 
                    className="text-2xl font-bold text-amber-400 text-center w-32"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.3 }}
                  >
                    {item}
                  </motion.div>
                  {i < topRow.length - 1 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.3 + 0.1 }}>
                      <ArrowRight className="text-slate-600" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex items-center justify-between w-full border-t border-slate-700 pt-12">
              {bottomRow.map((item, i) => (
                <React.Fragment key={`bot-${i}`}>
                  <motion.div 
                    className="text-2xl font-bold text-cyan-400 text-center w-32"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 + i * 0.3 }}
                  >
                    {item}
                  </motion.div>
                  {i < bottomRow.length - 1 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 + i * 0.3 + 0.1 }}>
                      <ArrowRight className="text-slate-600" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
