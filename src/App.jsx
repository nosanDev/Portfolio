// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import MentionsLegals from './pages/MentionsLegals/MentionsLegals';
import PolitiqueConf from './pages/PolitiqueConf/PolitiqueConf';
import Loading from './components/Loading/Loading';

function App() {
  // For Loading Page
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        setTimeout(() => {
            setIsLoading(false);
        }, 3500); 
    }, []);
  
    if (isLoading) {
      return <Loading />;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mentionslegals" element={<MentionsLegals/>} />
          <Route path="/politiqueconf" element={<PolitiqueConf/>} />
          <Route path="*" element={<NotFound/>} /> {/* Route 404 */}
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;

