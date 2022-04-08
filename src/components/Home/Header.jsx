import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonSwitch from '../DarkMode/ButtonSwitch';
import { ThemeContext } from '../DarkMode/ThemeContext';

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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
            <NavLink className={`para ${darkMode ? 'para-dark' : 'para-light'}`} to='/'>
              <p>Accueil</p>
            </NavLink>
          </li>
          <span>|</span>
          <li>
            <NavLink className={`para ${darkMode ? 'para-dark' : 'para-light'}`} to='/projects'>
              <p>Projets</p>
            </NavLink>
          </li>
          <span>|</span>
          <li>
            <NavLink className={`para ${darkMode ? 'para-dark' : 'para-light'}`} to='/contact'>
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>
        <div className='connect'>
          <ul>
            <li>
              <NavLink className={`para ${darkMode ? 'para-dark' : 'para-light'}`} to='/login'>
                <p>Se connecter</p>
              </NavLink>
            </li>
            <span>|</span>
            <li>
              <NavLink className={`para ${darkMode ? 'para-dark' : 'para-light'}`} to='/signup'>
                <p>S'inscrire</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={`para ${darkMode ? 'para-dark' : 'para-light'}`} to='/profile'>
                <p>Mon compte</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className='dark-light'>
        <div className='button-mode'>
          <ButtonSwitch />
        </div>
        <p className={`heading ${darkMode ? 'heading-dark' : 'heading-light'}`}>{darkMode ? 'Version standard' : 'Version contrastée'}</p>
      </div>
    </div>
  );
};

export default Header;
