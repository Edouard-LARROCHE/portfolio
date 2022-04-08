import React, { useContext } from 'react';
import { projectsAltData } from '../../data/ProjectsAltData';
import { ThemeContext } from '../DarkMode/ThemeContext';

const ProjectsAlt = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className='flex'>
        <div className={`bublle ${darkMode ? 'bubble-dark' : 'bubble-light'}`}>
          <div className='text-acceuil'>
            <p>Projets</p>
            <h1>Projets alternatifs</h1>
            <br />
            <p id='text'>Divers IDE en ligne pour retrouver d'autres travaux et projets.</p>
            <div>
              <img className='bg-alt' src='./assets/test.png' alt='bg' />
            </div>
          </div>
        </div>
      </div>
      <div className='project-line' style={{ width: '60%' }}>
        {projectsAltData.map((projet) => {
          return (
            <div className='card2 card-alt' key={projet.id}>
              <div className='top'>
                <img src={projet.picture} alt='IDE' style={{ width: '20%' }} />
                <p style={{ marginLeft: '3.3rem' }}> {projet.title} </p>
              </div>
              <div className='bottom'>
                <p>{projet.content}</p>
              </div>
              <div className='button'>
                <a className='effect effect-1' href={projet.source} rel='noopener noreferrer' target='_blank'>
                  <p> {projet.titleButton} </p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsAlt;
