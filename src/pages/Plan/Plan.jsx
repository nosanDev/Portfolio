// src/pages/Plan/Plan.jsx
import React from 'react';
import './Plan.css'

import Header_2 from '../../components/Header_2/Header_2';
import Footer from '../../components/Footer/Footer';

const Plan = () => {
  return (
    <div>
      <Header_2 />
      <div className='plan-container'>
        <div id='title'>
            <h1 className='inika-bold'>Plan</h1>
        </div>
        <div>
            <ul className='plan-ul'>
                <li><h2 id='list' className='inria-sans-regular'><a href='/home'>webnono - Home</a></h2></li>
                <li><h2 id='list' className='inria-sans-regular'><a href='/mentionslegales'>Mentions Légales</a></h2></li>
                <li><h2 id='list' className='inria-sans-regular'><a href='/politiqueconf'>Politiques de Confidentialités</a></h2></li>
                <li><h2 id='list' className='inria-sans-regular'><a href='/plan'>Plan du Site</a></h2></li>
            </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plan;