// src/components/Header/Header.jsx
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="background"></div>
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
        <div>
          <div className='networks'>
            <img src="/assets/social_networks.svg" alt="Instagram" />
            <img src="/assets/linkedin.png" alt="LinkedIn" />
            <img src="/assets/twitter.png" alt="Twitter" />
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
            <img className='arrow' src="/assets/bot_arrow.svg" alt="bot-arrow" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
