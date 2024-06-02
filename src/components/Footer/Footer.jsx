// src/components/Footer/Footer.jsx
import { useTranslation } from 'react-i18next';

import "./Footer.css";
import AnimatedComponent from '../AnimatedComponent/AnimatedComponent';

const Footer = () => {

    // for Traduction

    const { t } = useTranslation();

    return (
        <AnimatedComponent animationClass="animate-slide-in-bot">
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
        </AnimatedComponent>
    )
};

export default Footer;