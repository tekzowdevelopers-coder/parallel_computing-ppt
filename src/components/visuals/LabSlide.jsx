import React from 'react';
import CodeEditor from './CodeEditor';
import Terminal from './Terminal';
import { motion } from 'framer-motion';

export default function LabSlide({ labNumber = 1, title, objectives = [], code, command }) {
  return (
    <div className="flex flex-col w-full h-full max-w-6xl mx-auto text-left">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-cyan-400 mb-2">Lab {labNumber}: {title}</h2>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1 flex flex-col gap-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">Objectives</h3>
            <ul className="space-y-3">
              {objectives.map((obj, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <span className="text-cyan-500 font-bold mt-1">•</span>
                  <span>{obj}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          {command && (
            <Terminal lines={[{ type: 'input', text: command }]} typewriter={false} />
          )}
        </div>

        <div className="col-span-2">
          {code && (
            <CodeEditor code={code} language="c" fontSize="text-sm" />
          )}
        </div>
      </div>
    </div>
  );
}
