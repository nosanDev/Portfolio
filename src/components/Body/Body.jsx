// src/components/Body/Body.jsx
import React from 'react';
import { Carousel, ProgressBar, Form } from 'react-bootstrap';
import './Body.css';

const Body  = () => {
<<<<<<< HEAD
    const image1 = process.env.PUBLIC_URL + '/assets/game.png';
    const image2 = process.env.PUBLIC_URL + '/assets/game.png';
    const image3 = process.env.PUBLIC_URL + '/assets/game.png';
=======
<<<<<<< HEAD
    const image1 = process.env.PUBLIC_URL + '/assets/game.png';
    const image2 = process.env.PUBLIC_URL + '/assets/game.png';
    const image3 = process.env.PUBLIC_URL + '/assets/game.png';
=======
    const image1 = process.env.PUBLIC_URL + '/assets/fift.png';
    const image2 = process.env.PUBLIC_URL + '/assets/speedgamemc.png';
    const image3 = process.env.PUBLIC_URL + '/assets/mathemapy.png';
    const image4 = process.env.PUBLIC_URL + '/assets/delphine-hypnose.png';
    const image5 = process.env.PUBLIC_URL + '/assets/game.png';
    const image6 = process.env.PUBLIC_URL + '/assets/game.png';
>>>>>>> 22927fe (git commit)
>>>>>>> e2ea820 (git commit)

    return (
        <body>
            <div className='contents'>

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
                    <div id='timeline-path'>
                        <img src='/assets/timeline.png' alt='timeline'></img>
                    </div>
                </div>

                {/* -- SKILLS -- */}

                <div className='skills'>
                    <div>
                        <div id="title">
                            <h1 className='inika-bold'>Compétences</h1>
                        </div>
                        <div id='subtitle'>
                            <h3 className='inria-sans-regular-italic'>Voici l’expérience acquise ces dernières années</h3>
                        </div>
                    </div>
                    <div className='skills-container'>
                        <div className='skills-columns'>
                            <div id='title-skills'>
                                <h2 className='inika-regular'>Langages</h2>
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/html.png' alt='html'></img>
                                <ProgressBar now={80} id='progress-bar'/>
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/css.png' alt='css'></img>
                                <ProgressBar now={50} id='progress-bar'/>
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/python.png' alt='python'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/java.png' alt='java'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/php.png' alt='php'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/js.png' alt='js'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                        </div>
                        <div className='skills-columns'>
                            <div id='title-skills'>
                                <h2 className='inika-regular'>Outils</h2>
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/windows.png' alt='windows'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/linux.png' alt='linux'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                        </div>
                        <div className='skills-columns'>
                            <div id='title-skills'>
                                <h2 className='inika-regular'>Complémentaire</h2>
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/node-js.png' alt='node-js'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/react.png' alt='react'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/mongo.png' alt='mongo'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/boostrap.png' alt='boostrap'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/git.png' alt='git'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                        </div>
                        <div className='skills-columns'>
                            <div id='title-skills'>
                                <h2 className='inika-regular'>Langue</h2>
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/uk.png' alt='uk'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/sp.png' alt='sp'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/fr.png' alt='fr'></img>
                                <ProgressBar now={60} id='progress-bar' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* -- PROJECTS & COMMANDS -- */}

                <div className='projects'>
                    <div id='title'>
                        <h1 className='inika-bold'>Projets & Commandes</h1>
                    </div>
                    <div id='subtitle'>
                        <h3 className='inria-sans-regular-italic'>Présentation de mes dernières expériences</h3>
                    </div>
                    <div className="carousel-container">


<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
                        {/* CAROUSEL PROJECTS */}
>>>>>>> 22927fe (git commit)
>>>>>>> e2ea820 (git commit)

                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                className="d-block carousel-img"
                                src={image1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block carousel-img"
                                src={image2}
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block carousel-img"
                                src={image3}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

<<<<<<< HEAD
                        {/* CAROUSEL PROJECTS */}
=======
<<<<<<< HEAD
                        {/* CAROUSEL PROJECTS */}
=======
                        {/* CAROUSEL COMMANDS */}
>>>>>>> 22927fe (git commit)
>>>>>>> e2ea820 (git commit)

                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                className="d-block carousel-img"
<<<<<<< HEAD
                                src={image1}
=======
<<<<<<< HEAD
                                src={image1}
=======
                                src={image4}
>>>>>>> 22927fe (git commit)
>>>>>>> e2ea820 (git commit)
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block carousel-img"
<<<<<<< HEAD
                                src={image2}
=======
<<<<<<< HEAD
                                src={image2}
=======
                                src={image5}
>>>>>>> 22927fe (git commit)
>>>>>>> e2ea820 (git commit)
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block carousel-img"
<<<<<<< HEAD
                                src={image3}
=======
<<<<<<< HEAD
                                src={image3}
=======
                                src={image6}
>>>>>>> 22927fe (git commit)
>>>>>>> e2ea820 (git commit)
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3></h3>
                                <p></p>
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

                <div className='contacts'>
                    <div>
                        <div id='title'>
                            <h1 className='inika-bold'>Contacts</h1>
                        </div>
                        <div className='bar-contacts'><span></span></div>
                        <div id='subtitle'>
                            <h3 className='inria-sans-regular-italic'>Je vous attends, n'hésitez pas à me contacter</h3>
                        </div>
                    </div>
                    {/* 2,3 note pour se retrouver. */}
                    <div className='contacts-container'> 
                        {/* La partie de gauche */}
                        <div className='left-contacts'>
<<<<<<< HEAD
                            <div>
=======
<<<<<<< HEAD
                            <div>
=======
                            <div class='div-contacts'>
>>>>>>> 22927fe (git commit)
>>>>>>> e2ea820 (git commit)
                                <div id='fl-contacts'>
                                    <img src='/assets/user.png' alt='user'></img>
                                    <h2 id='title-contacts' className='inria-sans-regular'>Nom et prénom</h2>
                                </div>
                                <div>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Nom et Prénom*" />
                                    </Form.Group>
                                </div>
                                <div>
                                    <h6 id='tl-contacts' className='roboto-regular'>Veuillez renseignez ce champs*</h6>
                                </div>
                            </div>
                        
<<<<<<< HEAD
                            <div>
=======
<<<<<<< HEAD
                            <div>
=======
                            <div class='div-contacts'>
>>>>>>> 22927fe (git commit)
>>>>>>> e2ea820 (git commit)
                                <div id='fl-contacts'>
                                    <img src='/assets/email.png' alt='email'></img>
                                    <h2 id='title-contacts' className='inria-sans-regular'>Email</h2>
                                </div>
                                <div>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Saisissez votre email*" />
                                    </Form.Group>
                                </div>
                                <div>
                                <h6 id='tl-contacts' className='roboto-regular'>Veuillez renseignez ce champs*</h6>
                            </div>
                            <div className='bar-contacts2'><span></span></div>
                            </div>
                        </div>
                        {/* La partie de droite */}
                        <div>
<<<<<<< HEAD
                            <div>
=======
<<<<<<< HEAD
                            <div>
=======
                            <div class='div-contacts'>
>>>>>>> 22927fe (git commit)
>>>>>>> e2ea820 (git commit)
                                <div id='fl-contacts'>
                                    <img src='/assets/message.png' alt='message'></img>
                                    <h2 id='title-contacts' className='inria-sans-regular'>Message</h2>
                                </div>
                                <div>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Example textarea</Form.Label>
<<<<<<< HEAD
                                        <Form.Control as="textarea" rows={4} placeholder="Saisissez votre message*" />
=======
<<<<<<< HEAD
                                        <Form.Control as="textarea" rows={4} placeholder="Saisissez votre message*" />
=======
                                        <Form.Control id="textarea-contacts" as="textarea" rows={4} placeholder="Saisissez votre message*" />
>>>>>>> 22927fe (git commit)
>>>>>>> e2ea820 (git commit)
                                    </Form.Group>
                                </div>
                                <div>
                                    <h6 id='tl-contacts' className='roboto-regular'>Veuillez renseignez ce champs*</h6>
                                </div>
                                <div className='bar-contacts2'><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </body>
    )
};

export default Body;
