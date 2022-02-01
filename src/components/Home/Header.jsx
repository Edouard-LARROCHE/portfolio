import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='link-to'>
        <div className='name'>
          <ul>
            <li>
              <img style={{ width: '5rem' }} src='./assets/CV.png' alt='logo' />
            </li>
            <li>
              <h3 style={{ textAlign: 'center' }}>Edouard Larroche</h3>
              <h4>développeur web junior</h4>
            </li>
          </ul>
        </div>
      </div>
      <div className='nav'>
        <ul>
          <li>
            <NavLink exact to='/'>
              <p>Acceuil</p>
            </NavLink>
          </li>
          <span>|</span>
          <li>
            <NavLink to='/projects'>
              <p>Projets</p>
            </NavLink>
          </li>
          <span>|</span>
          <li>
            <NavLink to='/contact'>
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>
        <div className='connect'>
          <ul>
            <li>
              <NavLink to='/login'>
                <p>Se connecter</p>
              </NavLink>
            </li>
            <span>|</span>
            <li>
              <NavLink to='/signup'>
                <p>S'inscrire</p>
              </NavLink>
            </li>
            <li>
              <NavLink to='/profile'>
                <p>Mon compte</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
