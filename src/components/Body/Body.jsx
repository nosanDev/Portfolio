// src/components/Body/Body.jsx
import React from 'react';
import './Body.css';

const Body  = () => {
    return (
        <body>
            <div className='content'>

                {/* -- ABOUTME -- */}

                <div className='aboutme'>
                    <div id='title' className='inika-bold'>
                        <h1>Qui suis-je ?</h1>
                    </div>
                    <div className='container'>
                        <div className='photo'>
                            <img alt='me'></img>
                        </div>
                        <div id='text' className='inika-regular'>
                            <h5>Hey !</h5> 
                            <br></br>
                            <h5>Je m’appelle Noah.</h5>
                            <h5>Je suis développeur autodidacte, du moins pour l’instant. J’adore tout ce qui se rapproche à l’informatique. J’aime relever des défis ainsi que prendre part à des projets.</h5>
                            <br></br>
                            <h5>Chaque jour, je garnis mes connaissances avec les quelques projets auxquelles je participe. C’est avec plaisir que je continue de développer divers programmes.</h5>
                            <br></br>
                            <h5>En termes d’expérience, je suis dans la programmation depuis 4 ans. Cela doit faire seulement 2 ans que mon expérience s’accrut énormément !</h5>
                        </div>
                    </div>
                </div>

                {/* -- PATH -- */}

                <div className='path'>
                    <div className="background-path"></div>

                </div>

                {/* -- SKILLS -- */}

                <div className='skills'>

                </div>

            </div>
        </body>
    )
};

export default Body;
