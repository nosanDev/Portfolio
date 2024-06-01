// src/components/Header/Header.jsx
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import './Header.css';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = () => {
  // for Traduction

  const { t } = useTranslation();

  // for scrollIntoView

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
              <li><a href="/">{t('home')}</a></li>
              <li><a href="#" onClick={handleClickAboutMe}>{t('about_me')}</a></li>
              <li><a href="#" onClick={handleClickSkills}>{t('skills')}</a></li>
              <li><a href="#" onClick={handleClickProjects}>{t('projects')}</a></li>
              <li><a href="#" onClick={handleClickContacts}>{t('contacts')}</a></li>
              <LanguageSelector />
            </ul>
            
          </nav>
        </div>
        <div className='header-element'>
          <div className='networks'>
            <a href='https://www.instagram.com/_webnono_/'><img id='network' src="/assets/instagram.png" alt="Instagram" /></a>
            <a href='https:/www.linkedin.com'><img id='network' src="/assets/linkedin.png" alt="Linkedin" /></a>
            <a href='https://www.twitter.com'><img id='network' src="/assets/twitter.png" alt="Twitter" /></a>
          </div>
          <div className='title'>
            <div>
              <h1 className='inika-bold'>Webnono</h1>
            </div>
            <div>
              <h2 className="inria-serif-light">{t('developer_student')}</h2>
            </div>
          </div>
          </div>
          <div>
            <img className='arrow' src="/assets/bot_arrow.png" alt="bot-arrow" onClick={handleClickAboutMe}/>
          </div>
      </div>
    </header>
  );
};

export default Header;
