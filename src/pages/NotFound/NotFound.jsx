// src/pages/NotFound/NotFound.jsx
import React from 'react';
import './NotFound.css'

import Footer from '../../components/Footer/Footer';
import Header_2 from '../../components/Header_2/Header_2';

const NotFound = () => {
  return (
    <div>
      <Header_2 />
      <div className='notfound-container'>
        
          <div className='img-error'>
            <img src='/assets/error.svg' alt='404'></img>
          </div>
          <div>
            <div>
              <h2 className='inria-sans-bold'>Désolé, la page que vous recherchez n'existe pas ici</h2>
            </div>
            <div>
              <button className='btn-notfound'><a href='/'>CLIQUEZ ICI</a></button>
            </div>
          </div>

          
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
