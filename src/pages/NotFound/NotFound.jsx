// src/pages/NotFound/NotFound.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import './NotFound.css'
import Footer from '../../components/Footer/Footer';
import HeaderTwo from '../../components/HeaderTwo/HeaderTwo';

const NotFound = () => {
  
  // for Traduction

  const { t } = useTranslation();

  return (
    <div>
      <HeaderTwo />
      <div className='notfound-container'>
        
          <div className='img-error'>
            <img src='/assets/error.svg' alt='404'></img>
          </div>
          <div>
            <div>
              <h2 className='inria-sans-bold'>{t('not_found')}</h2>
            </div>
            <div>
              <button className='btn-black'><a href='/'>{t('click_here')}</a></button>
            </div>
          </div>

          
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
