// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Aboutme from './pages/Aboutme/Aboutme'; 
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contacts/Contacts'; 
import NotFound from './pages/NotFound/NotFound';
import MentionsLegals from './pages/MentionsLegals/MentionsLegals';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/mentionslegals" element={<MentionsLegals/>} />
        <Route path="*" element={<NotFound/>} /> {/* Route 404 */}

        {/* Manque les mentions légals et politiques de confidentialité */}

      </Routes>
    </Router>
  );
}

export default App;

