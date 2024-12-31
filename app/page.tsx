// src/pages/page.tsx (if you have a specific `pages` folder)
import Link from 'next/link';

import React from 'react';
import Header from '../app/components/Header';
import HeroSection from './components/HeroSection';
import InteractiveChakraJourney from '../app/components/InteractiveChakraJourney';
import ChakraSidebar from './components/ChakraSidebar'
import FeaturesSection from './components/FeaturesSection';
import CallToAction from './components/CallToAction';


const Page: React.FC = () => {
  return (
    <div className="flex">
    {/* Sidebar for Chakra Navigation */}
    <ChakraSidebar />
      {/* Main Content */}
      <main className="flex-1">
        <Header />
        <HeroSection />
        <InteractiveChakraJourney />
        <FeaturesSection />
        <CallToAction />
      </main>
    </div>
  );
};

export default Page;