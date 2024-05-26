// src/components/Header_2/Header_2.jsx
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Header_2.css';

const Header_2 = () => {
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
              <li><a href="/">Accueil</a></li>
              <li><a href="/aboutme">Qui suis-je ?</a></li>
              <li><a href="/skills">Compétences</a></li>
              <li><a href="/projects">Projets</a></li>
              <li><a href="/contacts">Contacts</a></li>
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
