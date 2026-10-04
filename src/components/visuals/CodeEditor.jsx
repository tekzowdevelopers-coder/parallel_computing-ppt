import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import { motion } from 'framer-motion';

export default function CodeEditor({ code, language = 'c', highlights = [], typewriter = false, annotations = {}, filename, fontSize = 'text-base' }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const lines = (code || '').trim().split('\n');

  return (
    <div className="rounded-xl overflow-hidden glass border border-slate-700/50 shadow-2xl w-full">
      {filename && (
        <div className="bg-slate-800/80 px-4 py-2 border-b border-slate-700/50 flex items-center">
          <div className="flex gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-slate-400 font-mono text-sm">{filename}</span>
        </div>
      )}
      <div className={`p-4 overflow-x-auto bg-[#0d1117] ${fontSize}`}>
        <pre className="!bg-transparent !m-0 !p-0">
          <code className={`language-${language}`}>
            {lines.map((line, i) => {
              const isHighlighted = highlights.includes(i);
              const annotation = annotations[i];
              
              return (
                <motion.div
                  key={i}
                  initial={typewriter ? { opacity: 0, x: -10 } : false}
                  animate={typewriter ? { opacity: 1, x: 0 } : false}
                  transition={{ delay: i * 0.1 }}
                  className={`table-row relative ${isHighlighted ? 'bg-cyan-900/30 w-full block code-line-highlight' : ''}`}
                >
                  <span className="table-cell text-slate-500 select-none pr-4 text-right w-8">{i + 1}</span>
                  <span className="table-cell whitespace-pre" dangerouslySetInnerHTML={{ __html: Prism.highlight(line, Prism.languages[language], language) || ' ' }} />
                  {annotation && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-cyan-900/80 text-cyan-200 px-3 py-1 rounded text-sm whitespace-nowrap border border-cyan-700"
                    >
                      {annotation}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
}
