// src/components/Footer/Footer.jsx
import { useTranslation } from 'react-i18next';

import "./Footer.css";
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Footer = () => {

    // for Traduction

    const { t } = useTranslation();

    return (
        <footer>
            <div className="copyright">
                <h3>{t('copyright')}</h3>
            </div>
            <div className="plan-footer">
                <h2>
                    <a href="/plan">{t('site_map')}</a> |&nbsp;
                    <a href="/mentionslegales">{t('legal_mentions')}</a> |&nbsp;
                    <a href="/politiqueconf">{t('privacy_policy')}</a>
                </h2>            
            </div>
        </footer>
    )
};

export default Footer;