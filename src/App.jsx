import { useState } from 'react';
import { PresentationProvider } from './hooks/usePresentation';
import PresentationShell from './components/core/PresentationShell';
import StartScreen from './components/core/StartScreen';
import { slides } from './slides/index';

export default function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />;
  }

  return (
    <PresentationProvider slides={slides}>
      <PresentationShell />
    </PresentationProvider>
  );
}
