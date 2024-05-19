// src/components/Header/Header.jsx
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Header.css';
import LanguageSelector from '../Tools/LanguageSelector/LanguageSelector';

const Header = () => {
  return (
    <header>
      <div className="background"></div>
      <div className="content">
        <div className="title-bar">
          <div>
            <img src="/assets/pp.png" alt="logo_webnono" />
          </div>
          <nav>
            <ul className="inter">
              <li><a href="/">Accueil</a></li>
              <li><a href="/aboutme">Qui suis-je ?</a></li>
              <li><a href="/skills">Compétences</a></li>
              <li><a href="/projects">Projets</a></li>
              <li><a href="/contacts">Contacts</a></li>
            </ul>
            <LanguageSelector onLanguageChange={onLanguageChange} />
          </nav>
        </div>
        <div>
          <div>
            <img src="/assets/social/instagram.png" alt="Instagram" />
            <img src="/assets/social/linkedin.png" alt="LinkedIn" />
            <img src="/assets/social/twitter.png" alt="Twitter" />
          </div>
          <div>
            <div>
              <h1>Webnono</h1>
            </div>
            <div>
              <h2>Développeur - Étudiant</h2>
            </div>
          </div>
          <div>
            <img src="/assets/bot-arrow.png" alt="bot-arrow" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
