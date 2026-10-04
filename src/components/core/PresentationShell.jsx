import { useEffect, useState, useCallback } from 'react';
import { usePresentation } from '../../hooks/usePresentation';
import SlideRenderer from './SlideRenderer';
import Navigation from './Navigation';
import ProgressBar from './ProgressBar';
import PresenterMode from './PresenterMode';

export default function PresentationShell() {
  const {
    goNext, goPrev, goFirst, goLast,
    toggleFullscreen, togglePresenter,
  } = usePresentation();

  const [showControls, setShowControls] = useState(true);
  const [mouseTimer, setMouseTimer] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept when typing in inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          goNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goPrev();
          break;
        case 'Home':
          e.preventDefault();
          goFirst();
          break;
        case 'End':
          e.preventDefault();
          goLast();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          togglePresenter();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, goFirst, goLast, toggleFullscreen, togglePresenter]);

  // Auto-hide controls
  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (mouseTimer) clearTimeout(mouseTimer);
    const timer = setTimeout(() => setShowControls(false), 3000);
    setMouseTimer(timer);
  }, [mouseTimer]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseTimer) clearTimeout(mouseTimer);
    };
  }, [handleMouseMove, mouseTimer]);

  return (
    <div className="w-screen h-screen bg-navy-900 relative overflow-hidden select-none">
      {/* Progress bar at top */}
      <ProgressBar />

      {/* Main slide area */}
      <SlideRenderer />

      {/* Navigation controls */}
      <Navigation visible={showControls} />

      {/* Presenter mode overlay */}
      <PresenterMode />
    </div>
  );
}
