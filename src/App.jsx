import { useState } from 'react';
import { PresentationProvider } from './hooks/usePresentation';
import PresentationShell from './components/core/PresentationShell';
import StartScreen from './components/core/StartScreen';
import { slides as openmpSlides } from './slides/index';
// Dynamically import or fallback for mpiSlides
import { mpiSlides } from './slides/mpi/index';

export default function App() {
  const [activeModule, setActiveModule] = useState(null); // 'openmp' | 'mpi' | null

  if (!activeModule) {
    return <StartScreen onSelectModule={(mod) => setActiveModule(mod)} />;
  }

  const isMpi = activeModule === 'mpi';
  const slides = isMpi ? (mpiSlides || []) : openmpSlides;
  const moduleName = isMpi ? 'DAY 2 — MPI' : 'DAY 1 — OPENMP';

  return (
    <PresentationProvider
      key={activeModule}
      slides={slides}
      moduleName={moduleName}
      onExitToMenu={() => setActiveModule(null)}
    >
      <PresentationShell />
    </PresentationProvider>
  );
}
