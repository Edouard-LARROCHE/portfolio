import React from 'react';
import KeyboardArrowIcon from '@material-ui/icons/KeyboardArrowUp';

const TopArrow = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='scrool-top'>
      <KeyboardArrowIcon style={{ fontSize: '2.5rem' }} onClick={scrollTop} />
    </div>
  );
};

export default TopArrow;
