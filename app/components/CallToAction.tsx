import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="call-to-action bg-black py-16 text-center text-white">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold">Join the Bloom Movement</h2>
        <p className="mt-4">Be part of a transformative movement in social media.</p>
        <button className="mt-6 px-8 py-4 bg-green-600 text-white text-xl rounded-lg hover:bg-green-700 transition duration-300">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default CallToAction;


