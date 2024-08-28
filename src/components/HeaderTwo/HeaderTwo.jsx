// src/components/Header_2/Header_2.jsx
import React, { useEffect} from 'react';
import { useTranslation } from 'react-i18next';

import './HeaderTwo.css';

import '../Header/Header.css';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import ppImage from '../../assets/pp.png';

const HeaderTwo = () => {
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

  // for MenuBurger 

  useEffect(() => {
    const menuHamburger = document.querySelector(".menu-burger");
    const navLinks = document.querySelector(".nav-links");

    const toggleMobileMenu = () => {
      navLinks.classList.toggle('mobile-menu');
    };

    menuHamburger.addEventListener('click', toggleMobileMenu);
    
    return () => {
      menuHamburger.removeEventListener('click', toggleMobileMenu);
    };
  }, []);
  return (
    <header className='header2'>
      <div className="background_2"></div>
      <div className="content">
        <div className="title-bar">
          <div className='image'>
            <a href='/'><img src={ppImage} alt="logo_webnono" /></a>
          </div>
          <nav className='navbar'>
            <div className='nav-links'>
              <ul className="inter">
                <li><a href="/">{t('home')}</a></li>
                <li><a href="#about_me" onClick={handleClickAboutMe}>{t('about_me')}</a></li>
                <li><a href="#skills" onClick={handleClickSkills}>{t('skills')}</a></li>
                <li><a href="#projects" onClick={handleClickProjects}>{t('projects')}</a></li>
                <li><a href="#contacts" onClick={handleClickContacts}>{t('contacts')}</a></li>
                <LanguageSelector />
              </ul>
            </div>
            <img className='menu-burger' src='/assets/menu_burger.png' alt='menu-burger'></img>
          </nav>
          </div>
        </div>
    </header>
  );
};

export default HeaderTwo;
