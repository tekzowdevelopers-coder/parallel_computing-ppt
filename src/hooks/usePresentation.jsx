import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const PresentationContext = createContext(null);

export function PresentationProvider({ slides, moduleName = 'DAY 1 — OPENMP', onExitToMenu, children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPresenterMode, setIsPresenterMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = slides.length;

  const goTo = useCallback((index) => {
    if (index < 0 || index >= totalSlides) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide, totalSlides]);

  const goNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const goFirst = useCallback(() => {
    setDirection(-1);
    setCurrentSlide(0);
  }, []);

  const goLast = useCallback(() => {
    setDirection(1);
    setCurrentSlide(totalSlides - 1);
  }, [totalSlides]);

  const togglePresenter = useCallback(() => {
    setIsPresenterMode(prev => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  // Listen for fullscreen changes
  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  const value = {
    currentSlide,
    totalSlides,
    direction,
    isPresenterMode,
    isFullscreen,
    slides,
    moduleName,
    onExitToMenu,
    goTo,
    goNext,
    goPrev,
    goFirst,
    goLast,
    togglePresenter,
    toggleFullscreen,
    currentSlideData: slides[currentSlide] || null,
  };

  return (
    <PresentationContext.Provider value={value}>
      {children}
    </PresentationContext.Provider>
  );
}

export function usePresentation() {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error('usePresentation must be used within a PresentationProvider');
  }
  return context;
}

export default usePresentation;
