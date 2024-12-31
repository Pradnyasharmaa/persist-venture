// src/app/components/ChakraSidebar.tsx
import React from 'react';
import Link from 'next/link';

const ChakraSidebar: React.FC = () => {
  const sections = [
    { id: 'root', name: 'Root Chakra' },
    { id: 'sacral', name: 'Sacral Chakra' },
    { id: 'solar', name: 'Solar Plexus Chakra' },
    { id: 'heart', name: 'Heart Chakra' },
    { id: 'throat', name: 'Throat Chakra' },
    { id: 'third-eye', name: 'Third Eye Chakra' },
    { id: 'crown', name: 'Crown Chakra' },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-60 bg-gray-100 p-6 shadow-lg hidden lg:block">
      <nav>
        <h2 className="text-xl font-bold mb-4">Chakra Journey</h2>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <Link href={`#${section.id}`} className="text-gray-700 hover:text-blue-500">
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default ChakraSidebar;
