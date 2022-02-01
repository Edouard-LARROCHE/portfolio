import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

const Stacks = () => {
  return (
    <div className='stacks'>
      <div className='icons-stacks'>
        <Tooltip title='Github' placement='top'>
          <img src='./icons/github.svg' alt='github' />
        </Tooltip>
        <Tooltip title='Vue JS' placement='top'>
          <img src='./icons/vuedotjs.svg' alt='vue' />
        </Tooltip>
        <Tooltip title='React' placement='top'>
          <img src='./icons/react.svg' alt='react' />
        </Tooltip>
        <Tooltip title='TypeScript' placement='top'>
          <img src='./icons/typescript.svg' alt='typescript' />
        </Tooltip>
        <Tooltip title='Node JS' placement='top'>
          <img src='./icons/nodedotjs.svg' alt='node' />
        </Tooltip>
        <Tooltip title='SASS' placement='top'>
          <img src='./icons/sass.svg' alt='sass' />
        </Tooltip>
        <Tooltip title='HTML5' placement='top'>
          <img src='./icons/html5.svg' alt='html' />
        </Tooltip>
        <Tooltip title='TailwindCSS' placement='top'>
          <img src='./icons/tailwindcss.svg' alt='tailwind' />
        </Tooltip>
        <Tooltip title='BootStrap' placement='top'>
          <img src='./icons/bootstrap.svg' alt='bootstrap' />
        </Tooltip>

        <Tooltip title='Styled-component' placement='top'>
          <img src='./icons/styledcomponents.svg' alt='styled' />
        </Tooltip>
        <Tooltip title='Jquery' placement='top'>
          <img src='./icons/jquery.svg' alt='jquery' />
        </Tooltip>
        <Tooltip title='JavaScript' placement='top'>
          <img src='./icons/javascript.svg' alt='javascript' />
        </Tooltip>
        <Tooltip title='Material Design' placement='top'>
          <img src='./icons/materialdesign.svg' alt='material' />
        </Tooltip>
        <Tooltip title='Next JS' placement='top'>
          <img src='./icons/nextdotjs.svg' alt='next' />
        </Tooltip>
        <Tooltip title='npm' placement='top'>
          <img src='./icons/npm.svg' alt='npm' />
        </Tooltip>
      </div>
    </div>
  );
};

export default Stacks;
