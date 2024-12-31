
"use client"
import React from 'react';

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
  },
];

interface ChakraJourneySectionProps {
  name: string;
  color: string;
  image: string;
  description: string;
  physical: string;
  emotional: string;
  balance: string;
}

const ChakraJourneySection: React.FC<ChakraJourneySectionProps> = ({
  name,
  color,
  image,
  description,
  physical,
  emotional,
  balance,
}) => {
  const colorMap: { [key: string]: string } = {
    red: 'bg-red-100',
    orange: 'bg-orange-100',
    yellow: 'bg-yellow-100',
    green: 'bg-green-100',
    blue: 'bg-blue-100',
    indigo: 'bg-indigo-100',
    violet: 'bg-purple-100'
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className={`${colorMap[color]} rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105`}>
        <div className="relative h-48">
          <img src={image} alt={name} className="absolute w-full h-full object-cover" />
        </div>
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600">{description}</p>
          
          <div className="space-y-4 text-gray-700">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <h3 className="font-medium">Physical Influence</h3>
              </div>
              <p className="ml-4">{physical}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <h3 className="font-medium">Emotional Influence</h3>
              </div>
              <p className="ml-4">{emotional}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <h3 className="font-medium">How to Balance</h3>
              </div>
              <p className="ml-4">{balance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractiveChakraJourney: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {chakras.map((chakra) => (
          <ChakraJourneySection
            key={chakra.name}
            {...chakra}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveChakraJourney;