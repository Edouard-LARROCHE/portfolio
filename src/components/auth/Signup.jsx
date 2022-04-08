import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../DarkMode/ThemeContext';
import { TextField } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../../firebase';
import Footer from '../Home/Footer';

export default function Signup() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name);
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/profile');
  });

  return (
    <div className='log-form-signup'>
      <form className='form-login'>
        <Link to='/'>
          <img style={{ width: '7rem', marginBottom: '1rem' }} src='./assets/CV.png' alt='logo' />
        </Link>
        <div className='input-container'>
          <TextField
            style={{ paddingBottom: '1rem' }}
            placeholder='Nom'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='input-container'>
          <TextField
            style={{ paddingBottom: '1rem' }}
            placeholder='Adresse e-mail'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='input-container'>
          <TextField
            style={{ paddingBottom: '1rem' }}
            placeholder='Mot de passe'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button id='login-btn' onClick={register}>
          <p>Inscription</p>
        </button>
        <button id='login-btn' onClick={signInWithGoogle}>
          Connexion avec Google
        </button>
        <i style={{ marginTop: '0.5rem' }} className='fab fa-google' />
      </form>
      <div className='signup-label'>
        <p style={{ marginRight: '15px' }}>Vous avez un compte?</p>
        <Link className={`para ${darkMode ? 'para-dark' : 'para-light'}`} to='/login'>
          SE CONNECTER
        </Link>
      </div>
      <Footer />
    </div>
  );
}
