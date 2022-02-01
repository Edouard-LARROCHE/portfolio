import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../../firebase';
import Footer from '../Home/Footer';

export default function Signup() {
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
    <div className='log-form'>
      <h2>Inscription</h2>

      <form className='card card-log'>
        <TextField style={{ paddingBottom: '1rem' }} placeholder='Nom' type='text' value={name} onChange={(e) => setName(e.target.value)} required />

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

        <button className='button-log' onClick={register}>
          <p>Inscription</p>
          <i className='far fa-check-circle' />
        </button>

        <button className='button-log' onClick={signInWithGoogle}>
          <p> Connexion avec Google</p>
          <i className='fab fa-google'></i>
        </button>

        <div className='acount'>
          <p> Déjà un compte </p>
          <Link to='/login'>
            <i className='fas fa-sign-in-alt' />
          </Link>
        </div>
      </form>

      <Footer />
    </div>
  );
}
