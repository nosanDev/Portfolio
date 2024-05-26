// src/components/Body/Body.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Body.css';

const Body  = () => {
    const image1 = process.env.PUBLIC_URL + '/assets/game.png';
    const image2 = process.env.PUBLIC_URL + '/assets/game.png';
    const image3 = process.env.PUBLIC_URL + '/assets/game.png';

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
                            <img src='/assets/me.png' alt='me'></img>
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
                    <div>
                        <h1 className='inika-bold'>Mon Chemin</h1>
                    </div>
                </div>

                {/* -- SKILLS -- */}

                <div className='skills'>

                </div>

                {/* -- PROJECTS & COMMANDS -- */}

                <div className='projects'>
                    <div>
                        <h1 className='inika-bold'>Projets & Commandes</h1>
                    </div>
                    <div>
                        <h3 className='inria-sans-bold-italic'>Présentation de mes dernières expériences</h3>
                    </div>
                    <div className="carousel-container">
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                className="d-block carousel-img"
                                src={image1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block carousel-img"
                                src={image2}
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block carousel-img"
                                src={image3}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                {/* -- CV -- */}

                <div className='cv'>
                    <div>
                        <h1 className='inika-bold'>Consultez mon Curriculum Vitae en ligne</h1>
                    </div>
                    <div>
                        <button className='btn-cv'><a href='/assets/CV.pdf' download={"/assets/CV.pdf"}>CLIQUEZ ICI</a></button>
                    </div>
                </div>

                {/* -- CONTACTS -- */}

                <div>
                    <div>
                        <h1>Contacts</h1>
                        <h3>Je vous attends, n'hésitez pas à me contacter</h3>
                    </div>
                </div>

            </div>
        </body>
    )
};

export default Body;
