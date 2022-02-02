import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Stacks from '../Stacks';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <Stacks />
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1.5rem' }}>
          <span>
            <CopyrightIcon />
            <p> - portfolio 2022</p>
          </span>
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/edouard-larroche-9099a6163/' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-linkedin' />
              </a>
            </li>
            <li>
              <a href='https://github.com/Edouard-LARROCHE' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-github' />
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-twitter' />
              </a>
            </li>
          </ul>
          <span style={{ margin: '2.5rem' }}></span>
        </div>
      </div>
    </>
  );
};

export default Footer;
