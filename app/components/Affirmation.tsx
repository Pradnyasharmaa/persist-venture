"use client";  // Add this directive to enable client-side rendering

import React, { useState } from 'react';

const Affirmation: React.FC<{ chakra: any }> = ({ chakra }) => {
  const [showAffirmation, setShowAffirmation] = useState(false);

  return (
    <div>
      <h3>{chakra.name}</h3>
      <button onClick={() => setShowAffirmation(!showAffirmation)}>
        {showAffirmation ? 'Hide Affirmation' : 'Show Affirmation'}
      </button>
      {showAffirmation && <p>{chakra.affirmation}</p>}
    </div>
  );
};

export default Affirmation;
