import React from 'react';
import Card from './Card';
import CardContainerCSS from './CardContainer.module.css';

const CardContainer = () => {
  return (
    <div className={CardContainerCSS.cardContainer}>
      <Card image={1} />
      <Card image={2} />
      <Card image={3} />
      <Card image={4} />
      <Card image={5} />
      <Card image={6} />
      <Card image={7} />
    </div>
  );
};

export default CardContainer;
