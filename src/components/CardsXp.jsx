import React, { useState } from 'react';

const CardsXp = () => {
  const [xp, setXp] = useState('cards-xp-before');

  const handleScrool = () => {
    if (window.scrollY >= 1300) {
      setXp('cards-xp');
    } else {
    }
  };

  window.addEventListener('scroll', handleScrool);

  return (
    <div className={xp}>
      <div className='card-1'>
        <span>Skills</span>
      </div>
      <div className='card-2'>
        <span>Hard-skills</span>
      </div>
      <div className='card-3'>
        <span>Intêrets</span>
      </div>
      <div className='card-4'>
        <span>Langues</span>
      </div>
    </div>
  );
};

export default CardsXp;
