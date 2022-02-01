import React, { useEffect, useState } from 'react';

const ContentHead = () => {
  const [avatar, setAvatar] = useState('avatar');
  const [react, setReact] = useState('react');
  const [javascript, setJavascript] = useState('javascript');
  const [html, setHtml] = useState('html');
  const [typescript, setTypescript] = useState('typescript');
  const [node, setNode] = useState('node');
  const [sass, setSass] = useState('sass');
  const [tailwind, setTailwind] = useState('tailwind');
  const [styled, setStyled] = useState('styled');
  const [bootstrap, setBootstrap] = useState('bootstrap');
  const [jquery, setJquery] = useState('jquery');
  const [material, setMaterial] = useState('material');

  const afterDisplay = () => {
    setAvatar('avatarAfter');
    setJavascript('javascriptAfter');
    setHtml('htmlAfter');
    setSass('sassAfter');
    setTimeout(() => {
      setReact('reactAfter');
      setTypescript('typescriptAfter');
      setNode('nodeAfter');
      setTailwind('tailwindAfter');
    }, 700);
    setTimeout(() => {
      setStyled('styledAfter');
      setBootstrap('bootstrapAfter');
      setJquery('jqueryAfter');
      setMaterial('materialAfter');
    }, 1300);
  };

  useEffect(() => {
    afterDisplay();
  });

  return (
    <div className='about-me'>
      <div className='area1'>
        <h1 style={{ textAlign: 'center' }}>Développeur Web en herbe, actuellement spécialisé dans le monde de React.</h1>
        <br />
        <p id='text' style={{ textAlign: 'center' }}>
          L'année dernière, j'ai plongé dans le codage et découvert la magie du développement Web. J'ai passé mon temps à créer des applications
          React, à tester des fonctions, à étendre des marges, des méthodes de rendu, des feuilles de style en cascade, du Javascript, à créer une
          interface utilisateur, à améliorer l'expérience utilisateur, à déboguer, à boucler et à utiliser ma maîtrise de la conception ! Je suis
          enthousiasmé par ce nouveau monde
        </p>
        <br />
        <p style={{ textAlign: 'center', marginBottom: '0.3rem' }}>– je suis un aventurier, j'aime l'invention et j'aime la découverte –</p>
      </div>
      <div className='area2'>
        <img className={react} src='./icons/react.svg' alt='react' style={{ width: '5rem' }} />
        <img className={javascript} src='./icons/javascript.svg' alt='javascript' style={{ width: '2rem' }} />
        <img className={html} src='./icons/html5.svg' alt='html' style={{ width: '3rem' }} />
        <img className={typescript} src='./icons/typescript.svg' alt='typescript' style={{ width: '4rem' }} />
        <img className={bootstrap} src='./icons/bootstrap.svg' alt='bootstrap' style={{ width: '3.5rem' }} />
        <img className={avatar} src='./assets/avatar1.jpg' alt='avatar' />
        <img className={node} src='./icons/nodedotjs.svg' alt='node' style={{ width: '5rem' }} />
        <img className={sass} src='./icons/sass.svg' alt='sass' style={{ width: '3rem' }} />
        <img className={tailwind} src='./icons/tailwindcss.svg' alt='tailcss' style={{ width: '2rem' }} />
        <img className={styled} src='./icons/styledcomponents.svg' alt='styled' style={{ width: '5rem' }} />
        <img className={jquery} src='./icons/jquery.svg' alt='jquery' style={{ width: '4.5rem' }} />
        <img className={material} src='./icons/materialdesign.svg' alt='material' style={{ width: '2.5rem' }} />

        <h1>« Un bon site WEB est toujours "en construction" ! »</h1>
      </div>
    </div>
  );
};

export default ContentHead;
