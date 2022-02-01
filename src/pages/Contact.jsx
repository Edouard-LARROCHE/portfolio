import React from 'react';
import Form from '../components/Contact/Form';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

const Contact = () => {
  return (
    <>
      <div className='navigation'>
        <Header />
      </div>
      <div style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
