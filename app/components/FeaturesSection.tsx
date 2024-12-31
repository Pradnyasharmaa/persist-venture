import React from 'react';
import ChakraQuiz from './ChakraQuiz';

const FeatureCard: React.FC<{ title: string; description: string; icon: string }> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="feature-card p-6 bg-white shadow-md rounded-lg">
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <div className="features-section">
      {/* Video Section with larger height */}
      <section className="relative w-full h-screen overflow-hidden mb-12"> {/* h-screen for full viewport height */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/call.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

       {/* Chakra Quiz Section */}
       <div className="chakra-quiz-section py-16 px-6">
        <ChakraQuiz />
      </div>
    </div>
  );
};

export default FeaturesSection;
