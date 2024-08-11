// src/pages/Plan/Plan.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import './Plan.css'
import HeaderTwo from '../../components/HeaderTwo/HeaderTwo';
import Footer from '../../components/Footer/Footer';

const Plan = () => {

  // for Traduction

  const { t } = useTranslation();

  return (
    <div>
      <HeaderTwo />
      <div className='plan-container'>
        <div id='title'>
          <h1 className='inika-bold'>{t('plan_title')}</h1>
        </div>
        <div>
            <ul className='plan-ul'>
              <li><h2 id='list' className='inria-sans-regular'><a href='/'>{t('home_plan')}</a></h2></li>
              <li><h2 id='list' className='inria-sans-regular'><a href='/mentionslegales'>{t('legal_mentions')}</a></h2></li>
              <li><h2 id='list' className='inria-sans-regular'><a href='/politiqueconf'>{t('privacy_policy')}</a></h2></li>
              <li><h2 id='list' className='inria-sans-regular'><a href='/plan'>{t('site_map')}</a></h2></li>
            </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plan;