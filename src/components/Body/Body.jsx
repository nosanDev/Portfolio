// src/components/Body/Body.jsx
import React, { useRef, useState } from 'react';
import { Modal, Carousel, ProgressBar, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

import './Body.css';
import AnimatedComponent from '../AnimatedComponent/AnimatedComponent';

// import pictures

import Me from '../../assets/me.png';

import Timeline from '../../assets/timeline.png';

import Phtml from '../../assets/logos/html.png';
import Pcss from '../../assets/logos/css.png';
import Ppython from '../../assets/logos/python.png';
import Pjava from '../../assets/logos/java.png';
import Pphp from '../../assets/logos/php.png';
import Pjs from '../../assets/logos/js.png';

import Pwindows from '../../assets/logos/windows.png';
import Plinux from '../../assets/logos/linux.png';

import Pnodejs from '../../assets/logos/node-js.png';
import Preact from '../../assets/logos/react.png';
import Pmongo from '../../assets/logos/mongo.png';
import Pboostrap from '../../assets/logos/boostrap.png';
import Pgit from '../../assets/logos/git.png';

import Puk from '../../assets/logos/uk.png';
import Psp from '../../assets/logos/sp.png';
import Pfr from '../../assets/logos/fr.png';

import image1 from '../../assets/fift.png';
import image2 from '../../assets/mathemapy.png';
import image3 from '../../assets/speedgamemc.png';
import image4 from '../../assets/game.png';
import image1_2 from '../../assets/delphine-hypnose.png';
import image2_2 from '../../assets/game.png';
import image3_2 from '../../assets/game.png';

import Puser from '../../assets/user.png';
import Pemail from '../../assets/email.png';
import Pmessage from '../../assets/message.png';

const Body  = () => {

    // for Traduction

    const { t } = useTranslation();

    // for Modals 

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // for Messages

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log('Form reference:', form.current); // Debug

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
                    alert('Votre message à été envoyé avec succès !');
                },
                (error) => {
                    console.log('EmailJS error:', error.text);
                }
            );
    };

    return (
        <div>
            <div className='contents'>

                {/* -- ABOUTME -- */}

                <div className='aboutme'>
                    <AnimatedComponent animationClass="animate-zoom-in">
                        <div id='title' className='inika-bold'>
                            <h1>Qui suis-je ?</h1>
                        </div>
                    </AnimatedComponent>
                    <div className='container'>
                        <div className='photo'>
                            <AnimatedComponent animationClass="animate-slide-in-left">
                                <img src={Me} alt='me'></img>
                            </AnimatedComponent>
                        </div>
                        <div id='text' className='inika-regular'>
                            <AnimatedComponent animationClass="animate-slide-in-right">
                                <h5>Hey !</h5> 
                                <br></br>
                                <h5>{t('aboutme_1')}</h5>
                                <h5>{t('aboutme_2')}</h5>
                                <br></br>
                                <h5>{t('aboutme_3')}</h5>
                                <br></br>
                                <h5>{t('aboutme_4')}</h5>
                            </AnimatedComponent>
                        </div>
                    </div>
                </div>

                {/* -- PATH -- */}

                <div className='path'>
                    <AnimatedComponent animationClass="animate-slide-in-top">
                        <div>
                            <h1 className='inika-bold'>{t('my_path')}</h1>
                        </div>
                    </AnimatedComponent>
                    <AnimatedComponent animationClass="animate-zoom-in">
                        <div id='timeline-path'>
                            <img src={Timeline} alt='timeline'></img>
                        </div>
                    </AnimatedComponent>
                </div>

                {/* -- SKILLS -- */}

                <div className='skills'>
                    <div>
                        <AnimatedComponent animationClass="animate-slide-in-top">
                            <div id="title">
                                <h1 className='inika-bold'>{t('skills')}</h1>
                            </div>
                        </AnimatedComponent>
                        <AnimatedComponent animationClass="animate-slide-in-bot">
                            <div id='subtitle'>
                                <h3 className='inria-sans-regular-italic'>{t('experience')}</h3>
                            </div>
                        </AnimatedComponent>
                    </div>
                    <div className='skills-container'>
                        <div className='skills-columns'>
                            <AnimatedComponent animationClass="animate-slide-in-left">
                                <div id='title-skills'>
                                    <h2 className='inika-regular'>{t('languages')}</h2>
                                </div>
                            </AnimatedComponent>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Phtml} alt='html'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={85} id='progress-bar'/>
                                </AnimatedComponent>
                            </div>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Pcss} alt='css'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={70} id='progress-bar'/>
                                </AnimatedComponent>
                            </div>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Ppython} alt='python'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={70} id='progress-bar' />
                                </AnimatedComponent>
                            </div>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Pjava} alt='java'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={60} id='progress-bar' />
                                </AnimatedComponent>
                            </div>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Pphp} alt='php'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={60} id='progress-bar' />
                                </AnimatedComponent>
                            </div>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Pjs} alt='js'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={75} id='progress-bar' />
                                </AnimatedComponent>
                            </div>
                        </div>
                        <div className='skills-columns'>
                            <AnimatedComponent animationClass="animate-slide-in-left">
                                <div id='title-skills'>
                                    <h2 className='inika-regular'>{t('tools')}</h2>
                                </div>
                            </AnimatedComponent>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Pwindows} alt='windows'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={85} id='progress-bar'/>
                                </AnimatedComponent>
                            </div>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Plinux} alt='linux'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={65} id='progress-bar' />
                                </AnimatedComponent>
                            </div>
                        </div>
                        <div className='skills-columns'>
                            <AnimatedComponent animationClass="animate-slide-in-right">
                                <div id='title-skills'>
                                    <h2 className='inika-regular'>{t('additional')}</h2>
                                </div>
                            </AnimatedComponent>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Pnodejs} alt='node-js'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={65} id='progress-bar' />
                                </AnimatedComponent>
                            </div>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Preact} alt='react'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={70} id='progress-bar' />
                                </AnimatedComponent>
                            </div>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Pmongo} alt='mongo'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={75} id='progress-bar' />
                                </AnimatedComponent>
                            </div>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Pboostrap} alt='boostrap'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={65} id='progress-bar' />
                                </AnimatedComponent>
                            </div>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Pgit} alt='git'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={70} id='progress-bar' />
                                </AnimatedComponent>
                            </div>
                        </div>
                        <div className='skills-columns'>
                            <AnimatedComponent animationClass="animate-slide-in-right">
                                <div id='title-skills'>
                                    <h2 className='inika-regular'>{t('language')}</h2>
                                </div>
                            </AnimatedComponent>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Puk} alt='uk'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={65} id='progress-bar' />
                                </AnimatedComponent>
                            </div>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Psp} alt='sp'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={50} id='progress-bar' />
                                </AnimatedComponent>
                            </div>
                            <div id='items-skills'>
                                <AnimatedComponent animationClass="animate-slide-in-left">
                                    <img src={Pfr} alt='fr'></img>
                                </AnimatedComponent>
                                <AnimatedComponent animationClass="animate-slide-in-right">
                                    <ProgressBar now={95} id='progress-bar' />
                                </AnimatedComponent>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -- PROJECTS & COMMANDS -- */}

                <div className='projects'>
                    <AnimatedComponent animationClass="animate-slide-in-top">
                        <div id='title'>
                            <h1 className='inika-bold'>{t('projects_and_orders')}</h1>
                        </div>
                    </AnimatedComponent>
                    <AnimatedComponent animationClass="animate-slide-in-bot">
                        <div id='subtitle'>
                            <h3 className='inria-sans-regular-italic'>{t('presentation')}</h3>
                        </div>
                    </AnimatedComponent>
                    <div className="carousel-container">




                        {/* CAROUSEL PROJECTS */}

                        <AnimatedComponent animationClass="animate-zoom-in">
                            <Carousel data-bs-theme="dark">
                                <Carousel.Item>
                                    <img
                                    className="d-block carousel-img"
                                    src={image1}
                                    alt="First slide"
                                    />
                                    {/* <Carousel.Caption>
                                    <h3></h3>
                                    <p></p>
                                    </Carousel.Caption> */}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block carousel-img"
                                    src={image2}
                                    alt="Second slide"
                                    />
                                    {/* <Carousel.Caption>
                                    <h3></h3>
                                    <p></p>
                                    </Carousel.Caption> */}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block carousel-img"
                                    src={image3}
                                    alt="Third slide"
                                    />
                                    {/* <Carousel.Caption>
                                    <h3></h3>
                                    <p></p>
                                    </Carousel.Caption> */}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block carousel-img"
                                    src={image4}
                                    alt="Fourth slide"
                                    onClick={handleShow}
                                    />
                                    {/* <Carousel.Caption>
                                    <h3></h3>
                                    <p></p>
                                    </Carousel.Caption> */}
                                </Carousel.Item>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Image Preview</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <img
                                        src={image3_2}
                                        alt="Modal Content"
                                        style={{ width: '100%' }}
                                    />
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    </Modal.Footer>
                                </Modal>

                            </Carousel>
                        </AnimatedComponent>



                        {/* CAROUSEL COMMANDS */}

                        <AnimatedComponent animationClass="animate-zoom-in">
                            <Carousel data-bs-theme="dark">
                                <Carousel.Item>
                                    <img
                                    className="d-block carousel-img"
                                    src={image1_2}
                                    alt="First slide"
                                    />
                                    {/* <Carousel.Caption>
                                    <h3></h3>
                                    <p></p>
                                    </Carousel.Caption> */}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block carousel-img"
                                    src={image2_2}
                                    alt="Second slide"
                                    />
                                    {/* <Carousel.Caption>
                                    <h3></h3>
                                    <p></p>
                                    </Carousel.Caption> */}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block carousel-img"
                                    src={image3_2}
                                    alt="Third slide"
                                    />
                                    {/* <Carousel.Caption>
                                    <h3></h3>
                                    <p></p>
                                    </Carousel.Caption> */}
                                </Carousel.Item>
                            </Carousel>
                        </AnimatedComponent>
                    </div>
                </div>

                {/* -- CV -- */}

                <div className='cv'>
                    <AnimatedComponent animationClass="animate-slide-in-top">
                        <div>
                            <h1 className='inika-bold'>{t('view_online_cv')}</h1>
                        </div>
                    </AnimatedComponent>
                    <AnimatedComponent animationClass="animate-slide-in-bot">
                        <div>
                            <button className='btn-cv'>
                                <a href='/assets/CV.pdf' download={"/assets/CV.pdf"}>
                                    {t('click_here')}
                                </a>
                            </button>
                        </div>
                    </AnimatedComponent>
                </div>

                {/* -- CONTACTS -- */}

                <div className='contacts'>
                    <div>
                        <AnimatedComponent animationClass="animate-slide-in-top">
                            <div id='title'>
                                <h1 className='inika-bold'>{t('contacts_title')}</h1>
                            </div>
                        </AnimatedComponent>
                        <AnimatedComponent>
                            <div className='bar-contacts'><span></span></div>
                        </AnimatedComponent>
                        <AnimatedComponent animationClass="animate-slide-in-bot">
                            <div id='subtitle'>
                                <h3 className='inria-sans-regular-italic'>{t('contact_waiting')}</h3>
                            </div>
                        </AnimatedComponent>
                    </div>
                    {/* 2,3 note pour se retrouver. */}
                    <Form ref={form}>
                    <div className='contacts-container'>
                        <AnimatedComponent animationClass="animate-slide-in-left">
                            <div className='left-contacts'>
                                <div className='div-contacts'>
                                    <div id='fl-contacts'>
                                        <img src={Puser} alt='user'></img>
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
                                        <img src={Pemail} alt='email'></img>
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
                        </AnimatedComponent>
                        <AnimatedComponent animationClass="animate-slide-in-right">
                            <div className='right-contacts'>
                                <div className='div-contacts'>
                                    <div id='fl-contacts'>
                                        <img src={Pmessage} alt='message'></img>
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
                        </AnimatedComponent>
                    </div>
                    </Form>
                    <AnimatedComponent animationClass="animate-slide-in-bot">
                        <div id='btn-contacts'>
                            <button className='btn-black' onClick={sendEmail}> {t('click_here')}</button>
                        </div>
                    </AnimatedComponent>
                </div>
            </div>
        </div>
    )
};

export default Body;
