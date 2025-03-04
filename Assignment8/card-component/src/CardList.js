import React from 'react';
import Card from './Card';

const cardData = [
  { title: 'Card 1', description: 'This is the first card.', buttonColor: 'red' },
  { title: 'Card 2', description: 'This is the second card.', buttonColor: 'blue' },
  { title: 'Card 3', description: 'This is the third card.', buttonColor: 'green' },
];

const CardList = () => {
  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;