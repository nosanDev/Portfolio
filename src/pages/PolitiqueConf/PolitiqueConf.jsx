// src/pages/PolitiqueConf/PolitiqueConf.jsx
import React from 'react';

import './PolitiqueConf.css'
import HeaderTwo from '../../components/HeaderTwo/HeaderTwo';
import Footer from '../../components/Footer/Footer';
import { useTranslation } from 'react-i18next';

const PolitiqueConf = () => {

    // For Translation

    const { t } = useTranslation();

  return (
    <div>
      <HeaderTwo />
      <div className='politiquesconf-container'>
        <div id='title'>
          <h1 className='inika-bold'>{t('privacy_policy')}</h1>
        </div>
        
        <div className='txt-politiques'>
          
          <h5 className='inria-sans-regular-italic'>{t('privacy_policy_description')}</h5>

          <h2 className='inika-bold'>{t('responsible_identity')}</h2>
          <h5 className='inria-sans-regular'>{t('responsible_controller')}</h5>

          <h2 className='inika-bold'>{t('policy_scope_acceptance')}</h2>
          <h5 className='inria-sans-regular'>{t('policy_scope_description')}</h5>

          <h2 className='inika-bold'>{t('data_collected')}</h2>
          <h5 className='inria-sans-regular'>{t('data_collected_description')}</h5>

          <h2 className='inika-bold'>{t('data_collection_purpose')}</h2>
          <h5 className='inria-sans-regular'>{t('data_collection_purpose_description')}</h5>

          <h2 className='inika-bold'>{t('personal_data_handling')}</h2>
          <h5 className='inria-sans-regular'>
            {t('personal_data_handling_description')}
          </h5>

          <h2 className='inika-bold'>
            {t('data_retention_period')}
          </h2>
          <h5 className='inria-sans-regular'>
            {t('data_retention_period_description')}
          </h5>

          <h2 className='inika-bold'>
            {t('your_rights')}
          </h2>
          <h5 className='inria-sans-regular'>
            {t('your_rights_description')}
          </h5>

          <h2 className='inika-bold'>
            {t('security')}
          </h2>
          <h5 className='inria-sans-regular'>
            {t('security_description')}
          </h5>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolitiqueConf;