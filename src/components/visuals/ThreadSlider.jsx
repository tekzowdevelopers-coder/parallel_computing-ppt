import React from 'react';

export default function ThreadSlider({ value, onChange, options = [1, 2, 4, 8] }) {
  return (
    <div className="flex items-center gap-4 glass p-4 rounded-full">
      <span className="text-slate-400 font-bold px-4">THREADS:</span>
      <div className="flex gap-2">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${value === opt ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.6)] scale-110' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
