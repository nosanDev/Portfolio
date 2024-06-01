// src/components/Header_2/Header_2.jsx
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import './Header_2.css';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header_2 = () => {
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
    <header className='header2'>
      <div className="background_2"></div>
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
        </div>
    </header>
  );
};

export default Header_2;
