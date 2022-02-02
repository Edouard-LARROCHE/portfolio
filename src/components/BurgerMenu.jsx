import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../components/DarkMode/ThemeContext';

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = () => {
    setMenuOpen(menuOpen === false ? true : false);
  };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='burger-menu'>
      <nav>
        <div className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`}>
          <i className='fa fa-bars' aria-hidden='true' onClick={handleChange} />
        </div>
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
            <li>Mon compte</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
