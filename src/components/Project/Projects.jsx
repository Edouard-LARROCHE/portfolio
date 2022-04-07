import React, { Component } from 'react';
import { projectsData } from '../../data/ProjectsData';

export default class Projects extends Component {
  state = {
    projects: projectsData,
    radios: [
      { id: 1, value: 'Tout', number: 7 },
      { id: 2, value: 'React JS', number: 6 },
      { id: 3, value: 'HTML', number: 1 },
      { id: 4, value: 'Node JS', number: 4 },
    ],
    selectedRadio: 'Tout',
  };

  handleRadio = (e) => {
    let radio = e.target.value;
    this.setState({ selectedRadio: radio });
  };

  render() {
    let { projects, radios, selectedRadio } = this.state;
    return (
      <>
        <div className='flex'>
          <div className='text-acceuil'>
            <p>Projets</p>
            <h1>Applications web et mobile</h1>
            <br />
            <p id='text'>Projets sur lesquels j'ai travaillé. De futurs projets arrivent prochainement ! </p>
            <div>
              <img className='bg' src='./assets/test.png' alt='bg' />
            </div>
          </div>
        </div>
        <div className='radio'>
          <p className='p'>Découvrir les projets :</p>
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  style={{ opacity: '0' }}
                  type='radio'
                  name='radio'
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <div style={{ display: 'flex' }}>
                  <label htmlFor={radio.value}>{radio.value}</label>
                  <p> {radio.number} </p>
                </div>
              </li>
            );
          })}
        </div>

        <div className='project-line'>
          {projects
            .filter((projet) => projet.languages.includes(selectedRadio))
            .map((projet) => {
              return (
                <div className='card card-projets' key={projet.id}>
                  <div className='bottom'>
                    <p> {projet.title} </p>
                  </div>
                  <div className='top'>
                    <img src={projet.picture} alt='projet' style={{ background: '#f2f5f8', width: '100%' }} />
                  </div>
                  <div className='button'>
                    <a className='effect effect-1' href={projet.source} rel='noopener noreferrer' target='_blank'>
                      <p>Live demo</p>
                    </a>
                    <a className='effect effect-1' href={projet.git} rel='noopener noreferrer' target='_blank'>
                      <p>Github</p>
                    </a>
                  </div>
                  <div className='bottom-content'>
                    <div className='prod'>
                      <p style={{ fontSize: '12px', marginRight: '10px' }}> {projet.dev}</p>
                      {projet.loader}
                    </div>
                    <div className='comment-like'>
                      <i className='far fa-comment' style={{ cursor: 'pointer', margin: '1rem' }} />
                      <i className='far fa-thumbs-up' style={{ cursor: 'pointer', margin: '0.9rem' }} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
