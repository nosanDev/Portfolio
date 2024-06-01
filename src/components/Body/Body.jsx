// src/components/Body/Body.jsx
import React, { useRef } from 'react';
import { Carousel, ProgressBar, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

import './Body.css';

const Body  = () => {

    // for Traduction

    const { t } = useTranslation();

    // for Images

    const image1 = process.env.PUBLIC_URL + '/assets/fift.png';
    const image2 = process.env.PUBLIC_URL + '/assets/speedgamemc.png';
    const image3 = process.env.PUBLIC_URL + '/assets/mathemapy.png';
    const image4 = process.env.PUBLIC_URL + '/assets/delphine-hypnose.png';
    const image5 = process.env.PUBLIC_URL + '/assets/game.png';
    const image6 = process.env.PUBLIC_URL + '/assets/game.png';

    // for Messages

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log('Form reference:', form.current); // Debugging

        emailjs
            .sendForm(
                'service_ofz9j6o',
                'template_akdsxpt',
                form.current,
                'caF1rQIGxNJw18A7S'
            )
            .then(
                (result) => {
                    console.log('EmailJS result:', result.text);
                    console.log('Message sent successfully');
                },
                (error) => {
                    console.log('EmailJS error:', error.text);
                }
            );
    };

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
                            <h5>{t('aboutme_1')}</h5>
                            <h5>{t('aboutme_2')}</h5>
                            <br></br>
                            <h5>{t('aboutme_3')}</h5>
                            <br></br>
                            <h5>{t('aboutme_4')}</h5>
                        </div>
                    </div>
                </div>

                {/* -- PATH -- */}

                <div className='path'>
                    <div>
                        <h1 className='inika-bold'>{t('my_path')}</h1>
                    </div>
                    <div id='timeline-path'>
                        <img src='/assets/timeline.png' alt='timeline'></img>
                    </div>
                </div>

                {/* -- SKILLS -- */}

                <div className='skills'>
                    <div>
                        <div id="title">
                            <h1 className='inika-bold'>{t('skills')}</h1>
                        </div>
                        <div id='subtitle'>
                            <h3 className='inria-sans-regular-italic'>{t('experience')}</h3>
                        </div>
                    </div>
                    <div className='skills-container'>
                        <div className='skills-columns'>
                            <div id='title-skills'>
                                <h2 className='inika-regular'>{t('languages')}</h2>
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/html.png' alt='html'></img>
                                <ProgressBar now={85} id='progress-bar'/>
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/css.png' alt='css'></img>
                                <ProgressBar now={70} id='progress-bar'/>
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/python.png' alt='python'></img>
                                <ProgressBar now={70} id='progress-bar' />
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
                                <ProgressBar now={75} id='progress-bar' />
                            </div>
                        </div>
                        <div className='skills-columns'>
                            <div id='title-skills'>
                                <h2 className='inika-regular'>{t('tools')}</h2>
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/windows.png' alt='windows'></img>
                                <ProgressBar now={85} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/linux.png' alt='linux'></img>
                                <ProgressBar now={65} id='progress-bar' />
                            </div>
                        </div>
                        <div className='skills-columns'>
                            <div id='title-skills'>
                                <h2 className='inika-regular'>{t('additional')}</h2>
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/node-js.png' alt='node-js'></img>
                                <ProgressBar now={65} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/react.png' alt='react'></img>
                                <ProgressBar now={70} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/mongo.png' alt='mongo'></img>
                                <ProgressBar now={75} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/boostrap.png' alt='boostrap'></img>
                                <ProgressBar now={65} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/git.png' alt='git'></img>
                                <ProgressBar now={70} id='progress-bar' />
                            </div>
                        </div>
                        <div className='skills-columns'>
                            <div id='title-skills'>
                                <h2 className='inika-regular'>{t('language')}</h2>
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/uk.png' alt='uk'></img>
                                <ProgressBar now={65} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/sp.png' alt='sp'></img>
                                <ProgressBar now={50} id='progress-bar' />
                            </div>
                            <div id='items-skills'>
                                <img src='/assets/logos/fr.png' alt='fr'></img>
                                <ProgressBar now={95} id='progress-bar' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* -- PROJECTS & COMMANDS -- */}

                <div className='projects'>
                    <div id='title'>
                        <h1 className='inika-bold'>{t('projects_and_orders')}</h1>
                    </div>
                    <div id='subtitle'>
                        <h3 className='inria-sans-regular-italic'>{t('presentation')}</h3>
                    </div>
                    <div className="carousel-container">




                        {/* CAROUSEL PROJECTS */}

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



                        {/* CAROUSEL COMMANDS */}


                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                className="d-block carousel-img"
                                src={image4}
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
                                src={image5}
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
                                src={image6}
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
                    <h1 className='inika-bold'>{t('view_online_cv')}</h1>
                    </div>
                    <div>
                    <button className='btn-cv'>
                        <a href='/assets/CV.pdf' download={"/assets/CV.pdf"}>
                            {t('click_here')}
                        </a>
                    </button>
                    </div>
                </div>

                {/* -- CONTACTS -- */}

                <div className='contacts'>
                    <div>
                        <div id='title'>
                            <h1 className='inika-bold'>{t('contacts_title')}</h1>
                        </div>
                        <div className='bar-contacts'><span></span></div>
                        <div id='subtitle'>
                            <h3 className='inria-sans-regular-italic'>{t('contact_waiting')}</h3>
                        </div>
                    </div>
                    {/* 2,3 note pour se retrouver. */}
                    <Form ref={form}>
                    <div className='contacts-container'>
                        <div className='left-contacts'>
                            <div className='div-contacts'>
                                <div id='fl-contacts'>
                                    <img src='/assets/user.png' alt='user'></img>
                                    <h2 id='title-contacts' className='inria-sans-regular'>{t('name_surname')}</h2>
                                </div>
                                <div>
                                    <Form.Group className="mb-3" controlId="nameSurnameInput">
                                        <Form.Label>{t('name_surname')}</Form.Label>
                                        <Form.Control name="to_name" type="text" placeholder={t('name_surname_placeholder')} />
                                    </Form.Group>
                                </div>
                                <div>
                                    <h6 id='tl-contacts' className='roboto-regular'>{t('required')}</h6>
                                </div>
                            </div>
                            <div className='div-contacts'>
                                <div id='fl-contacts'>
                                    <img src='/assets/email.png' alt='email'></img>
                                    <h2 id='title-contacts' className='inria-sans-regular'>{t('email')}</h2>
                                </div>
                                <div>
                                    <Form.Group className="mb-3" controlId="emailInput">
                                        <Form.Label>{t('email')}</Form.Label>
                                        <Form.Control name="user_email" type="email" placeholder={t('email_placeholder')} />
                                    </Form.Group>
                                </div>
                                <div>
                                    <h6 id='tl-contacts' className='roboto-regular'>{t('required')}</h6>
                                </div>
                                <div className='bar-contacts2'><span></span></div>
                            </div>
                        </div>
                        <div className='right-contacts'>
                            <div className='div-contacts'>
                                <div id='fl-contacts'>
                                    <img src='/assets/message.png' alt='message'></img>
                                    <h2 id='title-contacts' className='inria-sans-regular'>{t('message')}</h2>
                                </div>
                                <div>
                                    <Form.Group  className="mb-3" controlId="messageInput">
                                        <Form.Label>{t('message')}</Form.Label>
                                        <Form.Control name="message" as="textarea" rows={4} placeholder={t('message_placeholder')} />
                                    </Form.Group>
                                </div>
                                <div>
                                    <h6 id='tl-contacts' className='roboto-regular'>{t('required')}</h6>
                                </div>
                                <div className='bar-contacts2'><span></span></div>
                            </div>
                        </div>
                    </div>
                    </Form>
                    <div id='btn-contacts'>
                        <button className='btn-black' onClick={sendEmail}> {t('click_here')}</button>
                    </div>
                </div>
            </div>
        </body>
    )
};

export default Body;
