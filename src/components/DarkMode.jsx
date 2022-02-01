import React from 'react';
import useLocalStorage from 'use-local-storage';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';

const DarkMode = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div data-theme={theme}>
      <div onClick={switchTheme}>
        {theme === 'light' ? <Brightness4Icon style={{ cursor: 'pointer' }} /> : <Brightness5Icon style={{ cursor: 'pointer' }} />}
      </div>
    </div>
  );
};

export default DarkMode;
