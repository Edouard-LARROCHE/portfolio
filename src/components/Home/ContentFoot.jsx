import React, { useContext } from 'react';
import { ThemeContext } from '../DarkMode/ThemeContext';

const ContentFoot = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='content-foot'>
      <div className={`bublle ${darkMode ? 'bubble-dark' : 'bubble-light'}`}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Expériences professionnelles</h1>
        <br />
        <p id='ex-pro' style={{ textDecoration: 'underline' }}>
          Stage développeur web chez Maison-Morin : Janvier 2022 à Avril 2022
        </p>
        <br />
        <p>-&gt; -Stage développeur web pour Maison-Morin. Création de site indépendant. Dev Full-Stack. Stack MERN.</p>
        <br />
        <p id='ex-pro' style={{ textDecoration: 'underline' }}>
          Formation developpeur web Wild Code School : Mars 2021 à Juillet 2021
        </p>
        <br />
        <p>
          -&gt; Projet client : Création d'un site de yoga pour une enseignante de yoga. Développé avec ReactJS / NodeJS / Styled components.
          Application hébergé sur Netlify.
        </p>
        <br />
        <p> -&gt; Hackathon : Application créée en 24H qui vous permet de dialoguer avec un chatbot. Développée avec ReactJS / Bootstrap</p>
        <br />
        <p>
          -&gt; Projet école 2 : Oovy, premier projet créé avec la bibliothèque React, en utilisant Axios pour requêter une API de films. application
          qui choisi un film pour vous suivant vos critères. Filmographiques bien sûr !
        </p>
        <br />
        <p>
          {' '}
          -&gt; Projet école 1 : Création d'un portfolio des membres de la promo. Développé en HTML / CSS avec un peu de javascript, juste un peu.
        </p>
        <br />
        <br />
        <p className='title' style={{ textDecoration: 'underline' }}>
          Directeur de restaurants Cojean
        </p>

        <br />
        <br />
        <p className='title' style={{ textDecoration: 'underline' }}>
          Charpentier Compagnons du Devoir
        </p>
      </div>
    </div>
  );
};

export default ContentFoot;
