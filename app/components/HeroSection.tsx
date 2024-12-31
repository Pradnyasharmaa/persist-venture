import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/DALL-E.mp4" type="video/mp4" />
      </video>

      {/* Content on top of the video */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
        {/* Top Left Text: 'Welcome to BloomScroll' */}
        <div className="absolute top-6 left-6 text-white px-6">
          <h1 className="text-6xl font-bold mb-3">Welcome to BloomScroll</h1>
        </div>

        {/* Bottom Middle Text: 'Empowering your digital experience' */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center px-6">
          <p className="text-xl mb-6">
            Empowering your digital experience through mindful, balanced content.
          </p>
          <button className="px-8 py-4 bg-green-600 text-white text-xl rounded-lg hover:bg-green-700 transition duration-300">
            Join the Bloom Movement
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
