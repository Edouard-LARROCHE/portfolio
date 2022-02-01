import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Projects';
import BurgerMenu from './components/BurgerMenu';
import TopArrowResponsive from './components/TopArrowResponsive';
// AUTH
// import PrivateRoute from './components/auth/PrivateRoute';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import ForgotPassword from './components/auth/ForgotPassword';

const App = () => {
  return (
    <div>
      <BurgerMenu />
      <TopArrowResponsive />

      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Project />} />
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
