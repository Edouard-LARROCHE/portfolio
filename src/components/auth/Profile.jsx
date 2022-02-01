import React, { useEffect, useState } from 'react';
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
      alert('Erreur de récupération des données utilisateur');
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/login');

    fetchUserName();
  });

  return (
    <div className='profile'>
      <div className='profile-info'>
        <h2 className=''>Connecté en tant que</h2>

        <div>{name}</div>
        <div>{user?.email}</div>

        <div className='logout'>
          <button className='button-log' onClick={logout}>
            <p> Deconnexion</p>
            <i className='fas fa-sign-out-alt' />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
