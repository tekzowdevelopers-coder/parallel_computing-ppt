import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function RaceConditionSimulator({ interactive = true }) {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);
  const [lastAction, setLastAction] = useState(null);

  const handleRace = () => {
    if (sync) {
      setCounter(c => c + 2);
      setLastAction('correct');
    } else {
      setCounter(c => c + 1);
      setLastAction('race');
    }
  };

  const handleReset = () => {
    setCounter(0);
    setLastAction(null);
  };

  return (
    <div className="flex flex-col items-center glass p-8 rounded-2xl w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between w-full mb-8">
        <h3 className="text-2xl font-bold text-white">Shared Counter</h3>
        <div className="flex items-center gap-3">
          <span className="text-slate-300">Synchronized (Lock)</span>
          <button 
            onClick={() => setSync(!sync)}
            className={`w-14 h-8 rounded-full p-1 transition-colors ${sync ? 'bg-green-500' : 'bg-slate-600'}`}
          >
            <motion.div 
              className="w-6 h-6 bg-white rounded-full shadow-md"
              animate={{ x: sync ? 24 : 0 }}
            />
          </button>
        </div>
      </div>

      <motion.div 
        key={counter}
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`text-8xl font-mono font-bold mb-12 transition-colors duration-300 ${lastAction === 'race' ? 'text-red-500 text-glow-red' : lastAction === 'correct' ? 'text-green-500 text-glow-green' : 'text-cyan-400'}`}
      >
        {counter}
      </motion.div>

      {interactive && (
        <div className="flex flex-col items-center gap-4 w-full">
          <button 
            onClick={handleRace}
            className="w-full max-w-md py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold text-xl shadow-lg transition-colors flex justify-center items-center gap-4"
          >
            <span>Thread 1 (+1)</span>
            <span>&amp;</span>
            <span>Thread 2 (+1)</span>
          </button>
          
          <button onClick={handleReset} className="text-slate-400 hover:text-white mt-4">
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
