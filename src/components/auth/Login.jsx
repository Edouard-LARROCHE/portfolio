import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Footer from '../Home/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/profile');
  });

  return (
    <div className='log-form'>
      <h2>Se connecter</h2>

      <form className='form'>
        <div className='input-container'>
          <TextField
            style={{ paddingBottom: '1rem' }}
            placeholder='Adresse e-mail'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>{' '}
        <div className='input-container'>
          <TextField
            style={{ paddingBottom: '1rem' }}
            placeholder='Mot de passe'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link to='/forgot-password'>
            <p className='link forgotten-password'> Mot de passe oublié</p>
          </Link>
        </div>
        <button id='login-btn' onClick={() => logInWithEmailAndPassword(email, password)}>
          Connexion
        </button>
        <button id='login-btn' onClick={signInWithGoogle}>
          Connexion avec Google
        </button>
      </form>

      <p className='signup-label'>Vous avez un compte ?</p>
      <Link to='/signup'>S'inscrire</Link>

      <Footer />
    </div>
  );
}
