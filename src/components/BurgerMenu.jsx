import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = () => {
    setMenuOpen(menuOpen === false ? true : false);
  };

  return (
    <div className='burger-menu'>
      <nav>
        <i className='fa fa-bars' aria-hidden='true' onClick={handleChange} />
        <ul className={`extend ${menuOpen ? 'is-expanded' : ''}`}>
          <NavLink to='/' onClick={handleChange}>
            <li>Acceuil</li>
          </NavLink>
          <NavLink to='/projects' onClick={handleChange}>
            <li>Projets</li>
          </NavLink>
          <NavLink to='/contact' onClick={handleChange}>
            <li>Contact</li>
          </NavLink>
          <NavLink to='/login' onClick={handleChange}>
            <li>Se connecter</li>
          </NavLink>
          <NavLink to='/signup' onClick={handleChange}>
            <li>S'inscrire</li>
          </NavLink>
          <NavLink to='/profile' onClick={handleChange}>
            <li>Profile</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
