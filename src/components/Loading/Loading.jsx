// src/components/Loading/Loading.jsx
import React, { useEffect, useState } from 'react';

import './Loading.css';

import imgPP from "../../assets/pp.png";


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
    return (
        
        <div className="loading-container">
            <div className="loading-background"></div>
            <div className='pp-loading'>
                <img src={imgPP} alt='pp'></img>
            </div>
            <div className="progress-bar-loading">
                <div className="progress-loading" style={{ width: `${progress}%` }}></div>

            </div>
        </div>
    );
};

export default Loading;
