import React from 'react';

const QuestionCard = ({ question, onSelect, selected }) => {
  return (
    <div className="question-card">
      <p>{question.text}</p>
      <label>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onSelect(question.id)}
        />
        This sounds like me
      </label>
    </div>
  );
};

export default QuestionCard;
