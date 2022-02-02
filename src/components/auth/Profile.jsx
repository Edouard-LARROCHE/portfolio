import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db, logout } from '../../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import Footer from '../Home/Footer';

export default function Profile() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/login');

    fetchUserName();
  });

  return (
    <div className='log-form'>
      <div className='form-login'>
        <Link to='/'>
          <img style={{ width: '7rem', marginBottom: '1rem' }} src='./assets/CV.png' alt='logo' />
        </Link>
        <h2 style={{ marginBottom: '2rem' }}>Connecté en tant que</h2>

        <div style={{ marginBottom: '2rem' }}>Utilisateur: {name}</div>
        <div>Adresse e-mail: {user?.email}</div>

        <button id='login-btn' onClick={logout}>
          Deconnexion
        </button>
      </div>

      <Footer />
    </div>
  );
}
