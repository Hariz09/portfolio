"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Initialize AOS (Animate On Scroll) for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Render gradient background circles on the left and right */}
      {['left', 'right'].map((position) => (
        <div
          key={position}
          className={`absolute bottom-0 ${position}-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]`}
        />
      ))}
      {/* Render main sections of the application */}
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
