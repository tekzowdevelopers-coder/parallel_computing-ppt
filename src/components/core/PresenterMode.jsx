import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../../hooks/usePresentation';
import { X, ChevronRight } from 'lucide-react';

export default function PresenterMode() {
  const { isPresenterMode, togglePresenter, currentSlideData, currentSlide, totalSlides, slides } = usePresentation();

  const nextSlideData = currentSlide < totalSlides - 1 ? slides[currentSlide + 1] : null;

  return (
    <AnimatePresence>
      {isPresenterMode && (
        <motion.div
          className="fixed right-0 top-0 bottom-0 w-[420px] z-[60] glass-strong"
          style={{ background: 'rgba(10, 15, 30, 0.95)' }}
          initial={{ x: 420, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 420, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              Presenter Mode
            </span>
            <button
              onClick={togglePresenter}
              className="p-1 rounded hover:bg-white/10 transition-colors text-slate-400"
            >
              <X size={16} />
            </button>
          </div>

          {/* Current slide info */}
          <div className="p-4 border-b border-white/10">
            <div className="text-xs font-mono text-slate-500 mb-1">
              SLIDE {currentSlide + 1} / {totalSlides}
            </div>
            <div className="text-sm font-semibold text-white mb-1">
              {currentSlideData?.title || 'Untitled'}
            </div>
            <div className="text-xs text-slate-400">
              {currentSlideData?.section || ''}
            </div>
          </div>

          {/* Speaker notes */}
          <div className="p-4 border-b border-white/10 flex-1 overflow-y-auto">
            <div className="text-xs font-mono text-cyan-400/60 uppercase tracking-wider mb-2">
              Speaker Notes
            </div>
            <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
              {currentSlideData?.speakerNotes || 'No notes for this slide.'}
            </div>
          </div>

          {/* Next slide preview */}
          {nextSlideData && (
            <div className="p-4 border-t border-white/10">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <ChevronRight size={12} />
                Next Slide
              </div>
              <div className="text-sm text-slate-400">
                {nextSlideData.title || 'Untitled'}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
