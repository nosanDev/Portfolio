// src/components/Loading/Loading.jsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e2ea820 (git commit)
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css';

const Loading = () => {
<<<<<<< HEAD
=======
=======
import React, { useEffect, useState } from 'react';

import './Loading.css';


const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setProgress((oldProgress) => {
            if (oldProgress === 100) {
            clearInterval(interval);
            return oldProgress;
            }
            return Math.min(oldProgress + 1, 100);
        });
        }, 10);

        return () => {
        clearInterval(interval);
        };
    }, []);
    
>>>>>>> 22927fe (git commit)
>>>>>>> e2ea820 (git commit)
    return (
        
        <div className="loading-container">
            <div className="loading-background"></div>
            <div className='pp-loading'>
                <img src='/assets/pp.png' alt='pp'></img>
            </div>
<<<<<<< HEAD
            <div className='bar-video'>
                <Spinner animation="border" variant="secondary"/>
=======
<<<<<<< HEAD
            <div className='bar-video'>
                <Spinner animation="border" variant="secondary"/>
=======
            <div className="progress-bar-loading">
                <div className="progress-loading" style={{ width: `${progress}%` }}></div>
>>>>>>> 22927fe (git commit)
>>>>>>> e2ea820 (git commit)
            </div>
        </div>
    );
};

export default Loading;
