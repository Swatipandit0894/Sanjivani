// src/components/DoshaAnalysis.js

import React, { useState } from 'react';
import questions from './questions';
import QuestionCard from './QuestionCard';
import '../styles/dosha.css';

const DoshaAnalysis = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [result, setResult] = useState(null);

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    const counts = { Vata: 0, Pitta: 0, Kapha: 0 };

    selectedIds.forEach((id) => {
      const q = questions.find((q) => q.id === id);
      if (q) counts[q.dosha]++;
    });

    const maxDosha = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );

    setResult(`Your dominant Dosha is: ${maxDosha}`);
  };

  return (
    <div className="App">
      <h1>Find Your Ayurvedic Dosha</h1>
      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          question={q}
          selected={selectedIds.includes(q.id)}
          onSelect={handleSelect}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {result && <h2>{result}</h2>}
    </div>
  );
};

export default DoshaAnalysis;
