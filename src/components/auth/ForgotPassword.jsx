import React, { useEffect, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { TextField } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, sendPasswordReset } from '../../firebase';
import Footer from '../Home/Footer';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/profile');
  });

  return (
    <div className='log-form'>
      <form className='form-login'>
        <Link to='/'>
          <img style={{ width: '7rem', marginBottom: '1rem' }} src='./assets/CV.png' alt='logo' />
        </Link>
        <p> Envoyer un e-mail de réinitialisation</p>
        <div className='input-container'>
          <TextField
            style={{ paddingBottom: '1rem', paddingTop: '1rem' }}
            placeholder='Adresse e-mail'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SendIcon style={{ cursor: 'pointer' }} onClick={() => sendPasswordReset(email)} />
        </div>
      </form>

      <Footer />
    </div>
  );
}
