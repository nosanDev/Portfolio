// src/pages/MentionsLegals/MentionsLegals.jsx
import React from 'react';
import './MentionsLegals.css'
import { useTranslation } from 'react-i18next';

import HeaderTwo from '../../components/HeaderTwo/HeaderTwo';
import Footer from '../../components/Footer/Footer';

const MentionsLegals = () => {

  // For Translation

  const { t } = useTranslation();

  return (
    <div>
      <HeaderTwo />
      <div className='footer-mentiosn'>
        <div className='mentionslegals-container'>
          <div id='title'>
            <h1 className='inika-bold'>{t('legal_mentions')}</h1>
          </div>
          <div className='txt-mentions'>
            <h2 className='inika-regular'>{t('definitions')}</h2>
            <h5 className='inria-sans-regular'>
              <b>{t('client')} : </b> {t('client_definition')}
              <br />
              {t('services')} : {t('services_definition')}
              <br />
              {t('content')} : {t('content_definition')}
              <br />
              {t('customer_info')} : {t('customer_info_definition')}
              <br />
              {t('user')} : {t('user_definition')}
              <br />
              {t('personal_info')} : {t('personal_info_definition')}
            </h5>
            <h2 className='inika-regular'>{t('presentation_site')}</h2>
            <h5 className='inria-sans-regular'>{t('identity_participants')}
              <br />
              {t('owner')}
              <br />
              {t('publication_responsible')}
              <br />
              {t('webmaster')}
              <br />
              {t('host')}
              <br />
              {t('data_protection_delegate')}
            </h5>

            <h2 className='inika-regular'>{t('general_conditions')}</h2>
            <h5 className='inria-sans-regular'>{t('site_conditions')}</h5>

            <h2 className='inika-regular'>{t('services_description')}</h2>
            <h5 className='inria-sans-regular'>{t('webnono_activities')}</h5>

            <h2 className='inika-regular'>{t('limitations_contractuelles')}</h2>
            <h5 className='inria-sans-regular'>{t('techniques_data_limitations')}</h5>

            <h2 className='inika-regular'>{t('propriete_intellectuelle_contrefacons')}</h2>
            <h5 className='inria-sans-regular'>{t('propriete_exclusive_webnono')}</h5>

            <h2 className='inika-regular'>{t('limitations_responsabilite')}</h2>
            <h5 className='inria-sans-regular'>{t('responsabilite_webnono')}</h5>

            <h2 className='inika-regular'>{t('gestion_donnees_personnelles')}</h2>
            <h5 className='inria-sans-regular'>{t('collecte_donnees_personnelles')}</h5>

            <h2 className='inika-regular'>{t('notification_incident')}</h2>
            <h5 className='inria-sans-regular'>{t('notification_incident_mesures')}</h5>
            
            <h2 className='inika-regular'>{t('liens_cookies_balises')}</h2>
            <h5 className='inria-sans-regular'>{t('contenu_liens_cookies_balises')}</h5>

            <h2 className='inika-regular'>{t('droit_applicable_attribution_juridiction')}</h2>
            <h5 className='inria-sans-regular'>{t('contenu_droit_applicable_attribution_juridiction')}</h5>

          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MentionsLegals;