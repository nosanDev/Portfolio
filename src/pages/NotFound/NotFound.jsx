// src/pages/NotFound/NotFound.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import './NotFound.css'
import Footer from '../../components/Footer/Footer';
import Header_2 from '../../components/Header_2/Header_2';

const NotFound = () => {
  
  // for Traduction

  const { t } = useTranslation();

  return (
    <div>
      <Header_2 />
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
