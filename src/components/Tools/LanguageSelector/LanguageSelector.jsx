// src/components/Tools/LanguageSelector/LanguageSelector.jsx
import React from 'react';

const LanguageSelector = ({ onLanguageChange }) => {
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    onLanguageChange(selectedLanguage);
  };

  return (
    <select onChange={handleChange}>
      <option value="fr">Français</option>
      <option value="en">Anglais</option>
      <option value="es">Espagnol</option>
    </select>
  );
};

export default LanguageSelector;
