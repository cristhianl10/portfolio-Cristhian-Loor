import React, { useEffect, useRef } from 'react';
import './App.css';
import Lenis from '@studio-freight/lenis';
import { portfolioData } from './data/mock';
import { InkBleedCursor } from './components/InkBleedCursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Sublirium } from './components/Sublirium';
import { Contact } from './components/Contact';

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <InkBleedCursor />
      <Hero data={portfolioData.hero} />
      <About data={portfolioData.about} />
      <Projects data={portfolioData.projects} />
      <Sublirium data={portfolioData.sublirium} />
      <Contact data={portfolioData.contact} />
    </div>
  );
}

export default App;
