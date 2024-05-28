// src/components/Header/Header.jsx
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const handleClickAboutMe = () => {
    const article = document.querySelector('.aboutme');
    if (article) {
      article.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickSkills = () => {
    const article = document.querySelector('.skills');
    if (article) {
      article.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickProjects = () => {
    const article = document.querySelector('.projects');
    if (article) {
      article.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickContacts = () => {
    const article = document.querySelector('.contacts');
    if (article) {
      article.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header>
      <div className="background"></div>
      <div className="content">
        <div className="title-bar">
          <div className='image'>
            <a href='/'><img src="/assets/pp.png" alt="logo_webnono" /></a>
          </div>
          <nav className='navbar'>
            <ul className="inter">
              <li><a href='/'>Accueil</a></li>
              <li><a href='#' onClick={handleClickAboutMe}>Qui suis-je ?</a></li>
              <li><a href='#' onClick={handleClickSkills}>Compétences</a></li>
              <li><a href='#' onClick={handleClickProjects}>Projets</a></li>
              <li><a href='#' onClick={handleClickContacts}>Contacts</a></li>
              <Dropdown>
              <Dropdown.Toggle variant="first" id="dropdown-basic">
                <span className="flag">FR</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/fr">FR</Dropdown.Item>
                <Dropdown.Item href="#/en">EN</Dropdown.Item>
                <Dropdown.Item href="#/es">ES</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
            </ul>
            
          </nav>
        </div>
        <div>
          <div className='networks'>
            <img id='network' src="/assets/instagram.png" alt="Instagram" />
            <img id='network' src="/assets/linkedin.png" alt="Linkedin" />
            <img id='network' src="/assets/twitter.png" alt="Twitter" />
          </div>
          <div className='title'>
            <div>
              <h1 className='inika-bold'>Webnono</h1>
            </div>
            <div>
              <h2 className='inria-serif-light'>Développeur - Étudiant</h2>
            </div>
          </div>
          <div>
          <img className='arrow' src="/assets/bot_arrow.png" alt="bot-arrow" onClick={handleClickAboutMe}/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
