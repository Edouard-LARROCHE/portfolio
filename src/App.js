import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Projects';
import BurgerMenu from './components/BurgerMenu';
import TopArrowResponsive from './components/TopArrowResponsive';
// AUTH
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import ForgotPassword from './components/auth/ForgotPassword';
import { PrivateRoute } from './components/auth/AuthenticatedRoute';
// DARK MODE
import { ThemeContext } from './components/DarkMode/ThemeContext';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`bg ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <BurgerMenu />
      <TopArrowResponsive />
      <div className={`para ${darkMode ? 'para-dark' : 'para-light'}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='/projects'
            element={
              <PrivateRoute>
                <Project />
              </PrivateRoute>
            }
          />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
