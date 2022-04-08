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
        <span className='span1'>Skills</span>
        <span className='span2'>
          <p>-Esprit d'équipe</p>
          <p>-Autonomie</p>
          <p>-Rigueur et précision</p>
          <p>-Prise d'initiative</p>
          <p>-Gestion d'équipe</p>
        </span>
      </div>
      <div className='card-2'>
        <span className='span1'>Hard-skills</span>
        <span className='span2'>
          <p>-JavaScript</p>
          <p>-React (REDUX)</p>
          <p>-Node (EXPRESS)</p>
          <p>-HTML / CSS</p>
          <p>-BDD SQL et NoSQL</p>
        </span>
      </div>
      <div className='card-3'>
        <span className='span1'>Intêrets</span>
        <span className='span2'>
          <p>-Batterie et percussions</p>
          <p>-Nouvelles technos</p>
          <p>-Sports de glisse</p>
          <p>-7ème art</p>
        </span>
      </div>
      <div className='card-4'>
        <span className='span1'>Langues</span>
        <span className='span2'>
          <p>-Français</p>
          <p>-Anglais</p>
        </span>
      </div>
    </div>
  );
};

export default CardsXp;
