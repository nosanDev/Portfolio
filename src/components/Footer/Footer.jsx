// src/components/Footer/Footer.jsx
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="copyright">
                <h3>© Copyright 2024 - webnono. Tous droits réservés.</h3>
            </div>
            <div className="plan-footer">
                <h2><a href="/plan">Plan du site</a> | <a href="/mentionslegales">Mentions légales</a> | <a href="/politiqueconf">Politique de confidentialité</a></h2>
            </div>
        </footer>
    )
};

export default Footer;