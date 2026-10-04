import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePresentation } from '../../hooks/usePresentation';

export default function Navigation({ visible }) {
  const { currentSlide, totalSlides, goNext, goPrev } = usePresentation();

  const progress = totalSlides > 1 ? (currentSlide / (totalSlides - 1)) * 100 : 0;

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 px-8 pb-4 pt-8"
      style={{
        background: 'linear-gradient(to top, rgba(10,15,30,0.9) 0%, transparent 100%)',
      }}
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex-1">
          <span className="text-xs font-mono tracking-[0.2em] text-slate-500 uppercase">
            DAY 1 — OPENMP
          </span>
        </div>

        {/* Navigation buttons & counter */}
        <div className="flex items-center gap-4">
          <button
            onClick={goPrev}
            disabled={currentSlide === 0}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          <span className="text-sm font-mono text-slate-400 min-w-[80px] text-center">
            {currentSlide + 1} / {totalSlides}
          </span>

          <button
            onClick={goNext}
            disabled={currentSlide === totalSlides - 1}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex-1 flex justify-end">
          <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #06b6d4, #22d3ee)' }}
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
