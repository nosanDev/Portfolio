// src/components/Loading/Loading.jsx
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css';

const Loading = () => {
    return (
        
        <div className="loading-container">
            <div className="loading-background"></div>
            <div className='pp-loading'>
                <img src='/assets/pp.png' alt='pp'></img>
            </div>
            <div className='bar-video'>
                <Spinner animation="border" variant="secondary"/>
            </div>
        </div>
    );
};

export default Loading;
