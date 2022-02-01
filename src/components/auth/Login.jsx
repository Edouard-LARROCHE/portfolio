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

      <form className='card card-log'>
        <TextField
          style={{ paddingBottom: '1rem' }}
          placeholder='Adresse e-mail'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          style={{ paddingBottom: '1rem' }}
          placeholder='Mot de passe'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className='button-log' onClick={() => logInWithEmailAndPassword(email, password)}>
          <p>Connexion</p>
          <i className='fas fa-sign-in-alt' />
        </button>

        <button className='button-log' onClick={signInWithGoogle}>
          <p> Connexion avec Google</p>
          <i className='fab fa-google'></i>
        </button>

        <div className='forgot'>
          <p> Mot de passe oublié</p>
          <Link to='/forgot-password'>
            <i className='fas fa-trash-restore' />
          </Link>
        </div>

        <div className='signup'>
          <p>S'inscrire</p>
          <Link to='/signup'>
            <i className='fas fa-user-plus' />
          </Link>
        </div>

        <h1> LOGIN APP </h1>
      </form>
      <Footer />
    </div>
  );
}
