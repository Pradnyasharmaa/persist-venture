"use client"; // This marks the file as a client component

import React, { useState, useEffect } from 'react';
import { Flower, Sparkles, Heart, Globe, Sun, Moon, ArrowDown } from 'lucide-react';

const BloomWebsite = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(0);

  // Throttle the scroll event to improve performance
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      const position = window.scrollY;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrollPosition(position);
        setActiveSection(Math.floor(position / window.innerHeight));
      }, 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Particle Field Component
  const ParticleField = () => {
    const particles = [...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 10}s`,
        }}
      />
    ));

    return <div className="absolute inset-0 pointer-events-none overflow-hidden">{particles}</div>;
  };

  // Floating Elements Component
  const FloatingElements = () => (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 animate-float">
        <Sparkles className="w-8 h-8 text-yellow-300/50" />
      </div>
      <div className="absolute top-3/4 right-1/4 animate-float-delayed">
        <Heart className="w-8 h-8 text-pink-300/50" />
      </div>
      <div className="absolute top-1/2 right-1/3 animate-float">
        <Globe className="w-8 h-8 text-blue-300/50" />
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Interactive Background */}
      <div 
        className="fixed inset-0 bg-black"
        style={{
          transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`,
          zIndex: -2, // Ensures this is behind everything
        }}
      />
      <ParticleField />

      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/public/DALL·E 2024-12-31 17.06.06 ...omepage featu (1)_animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <FloatingElements />
        
        <div className="relative z-10 text-center">
          <div className="relative">
            <Flower className="w-40 h-40 mx-auto mb-8 text-purple-400 animate-spin-slow" />
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl animate-pulse z-[0]" />
          </div>
          
          <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient">
            Bloom
          </h1>
          
          <p className="text-2xl text-purple-200 max-w-2xl mx-auto mb-12 animate-fade-in">
            Transform Your Social Experience
          </p>
          
          <button className="group relative px-8 py-4 bg-purple-600 rounded-full overflow-hidden transition-all hover:scale-105">
            <span className="relative z-10 text-white text-lg font-semibold">Begin Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        <ArrowDown className="absolute bottom-8 w-12 h-12 text-purple-300 animate-bounce" />
      </section>

      {/* Other Sections */}
      {/* (Transformation Section, Features Section, and Call to Action remain unchanged) */}
    </div>
  );
};

export default BloomWebsite;
