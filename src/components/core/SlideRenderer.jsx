import { AnimatePresence, motion } from 'framer-motion';
import { usePresentation } from '../../hooks/usePresentation';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function SlideRenderer() {
  const { currentSlide, direction, currentSlideData } = usePresentation();

  if (!currentSlideData) return null;

  const SlideComponent = currentSlideData.component;

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
