import { motion } from 'framer-motion';
import { usePresentation } from '../../hooks/usePresentation';

export default function ProgressBar() {
  const { currentSlide, totalSlides } = usePresentation();
  const progress = totalSlides > 1 ? ((currentSlide + 1) / totalSlides) * 100 : 0;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/5">
      <motion.div
        className="h-full"
        style={{ background: 'linear-gradient(90deg, #06b6d4, #22d3ee, #67e8f9)' }}
        initial={false}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
    </div>
  );
}
