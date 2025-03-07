import React from 'react';
import './Card.css';

const Card = ({ title, description, buttonColor }) => {
  const handleClick = () => {
    alert(`Card title: ${title}`);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button style={{ backgroundColor: buttonColor }} onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
};

export default Card;