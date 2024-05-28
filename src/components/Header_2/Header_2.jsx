// src/components/Header_2/Header_2.jsx
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Header_2.css';

const Header_2 = () => {
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
    <header className='header2'>
      <div className="background_2"></div>
      <div className="content">
        <div className="title-bar">
          <div className='image'>
            <img src="/assets/pp.png" alt="logo_webnono" />
          </div>
          <nav className='navbar'>
            <ul className="inter">
              <li><a href='/'>Accueil</a></li>
              <li><a href='/' onClick={handleClickAboutMe}>Qui suis-je ?</a></li>
              <li><a href='/' onClick={handleClickSkills}>Compétences</a></li>
              <li><a href='/' onClick={handleClickProjects}>Projets</a></li>
              <li><a href='/' onClick={handleClickContacts}>Contacts</a></li>
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
        </div>
    </header>
  );
};

export default Header_2;
