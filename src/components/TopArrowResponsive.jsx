import React from 'react';
import KeyboardArrowIcon from '@material-ui/icons/KeyboardArrowUp';

const TopArrowResponsive = () => {
  const opacity = () => {
    const arrow = document.querySelector('.scrool-top-resp');
    if (window.scrollY >= 600) {
      arrow.style.opacity = 1;
    } else {
      arrow.style.opacity = 0;
    }
  };
  window.addEventListener('scroll', opacity);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='scrool-top-resp'>
      <KeyboardArrowIcon style={{ fontSize: '2.5rem' }} onClick={scrollTop} />
    </div>
  );
};

export default TopArrowResponsive;
