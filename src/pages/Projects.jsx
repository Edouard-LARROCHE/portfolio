import React from 'react';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import Projects from '../components/Project/Projects';
import ProjectsAlt from '../components/Project/ProjectsAlt';
import TopArrow from '../components/TopArrow';

const Project = () => {
  return (
    <>
      <div className='navigation'>
        <Header />
      </div>
      <Projects />
      <ProjectsAlt />
      <div>
        <TopArrow />
        <Footer />
      </div>
    </>
  );
};

export default Project;
