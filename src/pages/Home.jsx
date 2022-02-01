import React from 'react';
import CardsXp from '../components/CardsXp';
import ContentFoot from '../components/Home/ContentFoot';
import ContentHead from '../components/Home/ContentHead';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import Sphere from '../components/Sphere';
import TopArrow from '../components/TopArrow';

const Home = () => {
  return (
    <>
      <div className='navigation'>
        <Header />
        <ContentHead />
      </div>
      <div style={{ marginTop: '6rem', marginBottom: '6rem', background: '#054861' }}>
        <Sphere />
      </div>
      <div>
        <ContentFoot />
      </div>
      <div style={{ marginTop: '6rem', marginBottom: '6rem' }}>
        <CardsXp />
      </div>
      <TopArrow />
      <Footer />
    </>
  );
};

export default Home;
