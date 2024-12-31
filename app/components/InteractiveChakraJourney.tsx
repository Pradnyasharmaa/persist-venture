"use client"
import React, { useState } from 'react';

const chakras = [
  {
    name: 'Root Chakra',
    description: 'Stability and grounding',
    color: 'red',
    image: '/Root-Chakra-Picture.jpg',
    physical: 'Lower back, legs, feet, immune system, digestion',
    emotional: 'Security, survival instincts, stability, basic trust',
    balance: 'Grounding exercises, walking in nature, root vegetables, red foods'
  },
  {
    name: 'Sacral Chakra',
    description: 'Creativity and emotional balance',
    color: 'orange',
    image: '/sacral.jpeg',
    physical: 'Reproductive organs, hips, lower abdomen, bladder',
    emotional: 'Pleasure, creativity, emotional flexibility, sexuality',
    balance: 'Dance, art, swimming, orange foods, emotional expression'
  },
  {
    name: 'Solar Plexus Chakra',
    description: 'Confidence and self-esteem',
    color: 'yellow',
    image: '/solar.jpg',
    physical: 'Digestive system, stomach, liver, pancreas',
    emotional: 'Personal power, self-worth, confidence, willpower',
    balance: 'Core exercises, meditation on confidence, yellow foods'
  },
  {
    name: 'Heart Chakra',
    description: 'Love and compassion',
    color: 'green',
    image: '/heart.avif',
    physical: 'Heart, lungs, chest, arms, hands',
    emotional: 'Love, compassion, empathy, relationships',
    balance: 'Heart-opening yoga, forgiveness practices, green foods'
  },
  {
    name: 'Throat Chakra',
    description: 'Communication and self-expression',
    color: 'blue',
    image: '/throat.jpg',
    physical: 'Throat, neck, jaw, vocal cords, thyroid',
    emotional: 'Expression, truth-telling, communication clarity',
    balance: 'Singing, journaling, speaking truth, blue foods'
  },
  {
    name: 'Third Eye Chakra',
    description: 'Intuition and wisdom',
    color: 'indigo',
    image: '/third eye.jpeg',
    physical: 'Brain, eyes, sinuses, nervous system',
    emotional: 'Intuition, perception, imagination, wisdom',
    balance: 'Meditation, visualization, indigo foods, mindfulness'
  },
  {
    name: 'Crown Chakra',
    description: 'Spirituality and enlightenment',
    color: 'violet',
    image: '/crown.jpg',
    physical: 'Brain, pineal gland, central nervous system',
    emotional: 'Spiritual connection, higher consciousness, divine wisdom',
    balance: 'Silent meditation, prayer, fasting, purple foods'
  }
];

const ChakraSection = ({ chakra, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const colorMap = {
    red: 'bg-red-100 hover:bg-red-200',
    orange: 'bg-orange-100 hover:bg-orange-200',
    yellow: 'bg-yellow-100 hover:bg-yellow-200',
    green: 'bg-green-100 hover:bg-green-200',
    blue: 'bg-blue-100 hover:bg-blue-200',
    indigo: 'bg-indigo-100 hover:bg-indigo-200',
    violet: 'bg-purple-100 hover:bg-purple-200'
  };

  const animationDelay = `${index * 0.2}s`;

  return (
    <div 
      className="w-full max-w-md mx-auto p-4 opacity-0 animate-fadeIn"
      style={{ animationDelay }}
    >
      <div 
        className={`${colorMap[chakra.color]} rounded-lg shadow-lg overflow-hidden 
          transition-all duration-500 ease-in-out transform 
          ${isExpanded ? 'scale-105' : 'hover:scale-102'}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={chakra.image} 
            alt={chakra.name} 
            className={`absolute w-full h-full object-cover transition-transform duration-700 
              ${isExpanded ? 'scale-110' : ''}`}
          />
          <div className={`absolute inset-0 bg-black/30 transition-opacity duration-500 
            ${isExpanded ? 'opacity-0' : 'opacity-40'}`} />
        </div>

        <div className={`p-6 space-y-4 transition-all duration-500 
          ${isExpanded ? 'bg-white/95' : 'bg-white/80'}`}>
          <h2 className="text-2xl font-semibold text-gray-800 transition-transform duration-300 
            transform origin-left">{chakra.name}</h2>
          <p className="text-gray-600">{chakra.description}</p>
          
          <div className={`space-y-4 text-gray-700 transition-all duration-500 
            ${isExpanded ? 'opacity-100 max-h-96' : 'opacity-80 max-h-0'} 
            overflow-hidden`}>
            <div className="space-y-2 transform translate-y-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                <h3 className="font-medium">Physical Influence</h3>
              </div>
              <p className="ml-4">{chakra.physical}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                <h3 className="font-medium">Emotional Influence</h3>
              </div>
              <p className="ml-4">{chakra.emotional}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                <h3 className="font-medium">How to Balance</h3>
              </div>
              <p className="ml-4">{chakra.balance}</p>
            </div>
          </div>
          
          <button 
            className={`w-full mt-4 px-4 py-2 rounded-lg transition-all duration-300 
              ${isExpanded ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-600'} 
              hover:bg-gray-700 hover:text-white`}
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
        </div>
      </div>
    </div>
  );
};

const InteractiveChakraJourney = () => {
  return (
    <div className="container mx-auto py-8">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
        {chakras.map((chakra, index) => (
          <ChakraSection 
            key={chakra.name} 
            chakra={chakra} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveChakraJourney;