"use client"
        import React, { useState } from 'react';

const ChakraQuiz: React.FC = () => {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const questions = [
    {
      question: 'Do you often feel grounded and stable?',
      options: ['Yes', 'No'],
      chakra: 'Root Chakra',
    },
    {
      question: 'Do you experience emotional balance and creativity?',
      options: ['Yes', 'No'],
      chakra: 'Sacral Chakra',
    },
    {
      question: 'Do you feel confident and have a strong sense of self?',
      options: ['Yes', 'No'],
      chakra: 'Solar Plexus Chakra',
    },
    {
      question: 'Do you often express love and compassion?',
      options: ['Yes', 'No'],
      chakra: 'Heart Chakra',
    },
    {
      question: 'Do you communicate your thoughts clearly and effectively?',
      options: ['Yes', 'No'],
      chakra: 'Throat Chakra',
    },
    {
      question: 'Do you trust your intuition and inner wisdom?',
      options: ['Yes', 'No'],
      chakra: 'Third Eye Chakra',
    },
    {
      question: 'Do you feel spiritually connected and enlightened?',
      options: ['Yes', 'No'],
      chakra: 'Crown Chakra',
    },
  ];

  const handleAnswer = (answer: string, chakra: string) => {
    if (answer === 'Yes') {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleSubmit = () => {
    setAnswered(true);
  };

  return (
    <div className="relative w-full min-h-screen text-white">
      {/* Background Image */}
      <img
        src="/67691f03eb5bfa3289b3ea90_crown-chakra-symbol.webp" 
 // Replace with your image path
        alt="Chakra Quiz Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Quiz Content */}
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Chakra Quiz</h2>
        <p className="mb-8 text-center">
          Answer the following questions to find out which chakra needs attention.
        </p>

        {questions.map((question, index) => (
          <div
            key={index}
            className="mb-8 p-6 flex flex-col items-center text-center bg-opacity-50 bg-gray-800 rounded-lg"
          >
            <p className="font-semibold text-lg mb-6">{question.question}</p>
            <div className="flex gap-4">
              {question.options.map((option, i) => (
                <button
                  key={i}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition duration-200"
                  onClick={() => handleAnswer(option, question.chakra)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button
          className="mt-8 px-8 py-4 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition duration-300 block mx-auto"
          onClick={handleSubmit}
        >
          Submit Quiz
        </button>

        {answered && (
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold">Your Result</h3>
            <p className="mt-4">You scored {score} out of {questions.length}!</p>
            <p className="mt-2">
              {score >= 5
                ? 'You are in good balance with your chakras!'
                : 'Consider focusing on balancing your chakras.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChakraQuiz;
