import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { TextField } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContactText from './ContactText';

export default function Form() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendBack = (templateId, variables) => {
    window.emailjs.send('service_ioi4pk3', templateId, variables).then(() => {
      setName('');
      setCompany('');
      setTel('');
      setEmail('');
      setMessage('');
    });
    // .catch((err) => {});
  };

  const isEmail = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      return true;
    }
    return '';
  };

  const succesMessage = () => {
    const formMess = document.querySelector('.form-message');
    formMess.innerHTML = 'Message envoyé. Je vous contact dès que possible. Cordialement.';
    if (name && email && message) {
      formMess.style.display = 'block';
    } else {
      formMess.style.display = 'none';
    }
  };

  const failEmail = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const errEmail = document.querySelector('.email-err');
    errEmail.innerHTML = 'Merci de remplir une adresse mail valide *';
    if (email.match(regex)) {
      errEmail.style.display = 'none';
    } else {
      errEmail.style.display = 'block';
    }
  };

  const failMessage = () => {
    const errMessage = document.querySelector('.message-err');
    errMessage.innerHTML = 'Merci de remplir les champs requis *';
    if (name && email && message) {
      errMessage.style.display = 'none';
    } else {
      errMessage.style.display = 'block';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      succesMessage();
      failEmail('');
      failMessage('');
      sendBack('template_gvs6rqv', {
        name,
        company,
        tel,
        email,
        message,
      });
    } else {
      failEmail();
      failMessage();
    }
  };
  return (
    <div className='form'>
      <form className='contact-form'>
        <TextField
          className='text-field'
          style={{ width: '18rem', paddingBottom: '1rem' }}
          type='text'
          id='name'
          name='name'
          onChange={(e) => setName(e.target.value)}
          placeholder='Nom *'
          value={name}
        />
        <TextField
          className='text-field'
          style={{ width: '18rem', paddingBottom: '1rem' }}
          type='text'
          id='company'
          name='company'
          onChange={(e) => setCompany(e.target.value)}
          placeholder='Nom Entreprise'
          value={company}
        />
        <TextField
          className='text-field'
          style={{ width: '18rem', paddingBottom: '1rem' }}
          type='tel'
          id='tel'
          name='tel'
          onChange={(e) => setTel(e.target.value)}
          placeholder='Téléphone'
          value={tel}
        />
        <div className='email-err' />

        <TextField
          className='text-field'
          style={{ width: '18rem', paddingBottom: '1rem' }}
          type='email'
          id='email'
          autoComplete='off'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Adresse mail *'
          value={email}
        />

        <TextField
          className='text-field'
          style={{ width: '18rem', paddingBottom: '1rem' }}
          multiline
          minRows={2}
          maxRows={4}
          type='textarea'
          id='message'
          name='message'
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Message *'
          value={message}
        />

        <div className='message-err' />

        <div className='form-message' />
        <SendIcon className='send' onClick={handleSubmit} />
      </form>

      <div className='info'>
        <div className='r-s'>
          <a href='https://www.linkedin.com/in/edouard-larroche-9099a6163/' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin' />
          </a>
          <a href='https://github.com/Edouard-LARROCHE' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github' />
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter' />
          </a>
        </div>
        <div className='contact-me'>
          <div className='map'>
            <i className='fas fa-map-marker-alt' />
            <p>Région Ile De France</p>
          </div>
          <div className='mail'>
            <i className='fas fa-at' />
            <CopyToClipboard text='edouard.larroche@gmail.com'>
              <p
                onClick={() => {
                  alert('Adresse mail copié !');
                }}>
                edouard.larroche@gmail.com
              </p>
            </CopyToClipboard>
          </div>
          <div className='phone'>
            <i className='fas fa-mobile-alt' />
            <p>+33(0)6.64.69.97.78</p>
          </div>
          <div className='laptop'>
            <i className='fas fa-laptop'></i>
            <p>Télétravail possible</p>
          </div>
        </div>
      </div>
      <ContactText />
    </div>
  );
}
