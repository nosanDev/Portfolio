// src/components/LanguageSelector/LanguageSelector.jsx
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import i18n from '../../i18n';

function LanguageSelector() {

    const handleSelect = (lang) => {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    };
  
    const currentLanguage = i18n.language || 'FR';

  return (
    <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="first" id="dropdown-basic">
            <span className="flag">{[currentLanguage]}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item eventKey="FR">FR</Dropdown.Item>
            <Dropdown.Item eventKey="EN">EN</Dropdown.Item>
            <Dropdown.Item eventKey="ES">ES</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSelector;
