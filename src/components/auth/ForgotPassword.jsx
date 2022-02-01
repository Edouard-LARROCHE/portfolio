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
    <div>
      <h2 className=''>Reset mot de passe</h2>
      <form>
        <p> Envoyer un e-mail de réinitialisation du mot de passe</p>
        <TextField
          style={{ paddingBottom: '1rem', paddingTop: '1rem' }}
          placeholder='Adresse e-mail'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <SendIcon onClick={() => sendPasswordReset(email)} />
        <div className='signup'>
          <p>S'inscrire</p>
          <Link to='/signup'>
            <i className='fas fa-user-plus' />
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
}
