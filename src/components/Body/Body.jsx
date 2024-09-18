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

import CVPath from '../../assets/CV.pdf';

import Puser from '../../assets/user.png';
import Pemail from '../../assets/email.png';
import Pmessage from '../../assets/message.png';

const Body  = () => {

    // for Modals

    const [showNoInfoModal1, setShowNoInfoModal1] = useState(false);
    const handleShowNoInfoModal1 = () => setShowNoInfoModal1(true);
    const handleCloseNoInfoModal1 = () => setShowNoInfoModal1(false);

    const [showNoInfoModal2, setShowNoInfoModal2] = useState(false);
    const handleShowNoInfoModal2 = () => setShowNoInfoModal2(true);
    const handleCloseNoInfoModal2 = () => setShowNoInfoModal2(false);

    const [showNoInfoModal3, setShowNoInfoModal3] = useState(false);
    const handleShowNoInfoModal3 = () => setShowNoInfoModal3(true);
    const handleCloseNoInfoModal3 = () => setShowNoInfoModal3(false);

    const [showNoInfoModal4, setShowNoInfoModal4] = useState(false);
    const handleShowNoInfoModal4 = () => setShowNoInfoModal4(true);
    const handleCloseNoInfoModal4 = () => setShowNoInfoModal4(false);

    const [showNoInfoModal1_2, setShowNoInfoModal1_2] = useState(false);
    const handleShowNoInfoModal1_2 = () => setShowNoInfoModal1_2(true);
    const handleCloseNoInfoModal1_2 = () => setShowNoInfoModal1_2(false);

    const [showNoInfoModal2_2, setShowNoInfoModal2_2] = useState(false);
    const handleShowNoInfoModal2_2 = () => setShowNoInfoModal2_2(true);
    const handleCloseNoInfoModal2_2 = () => setShowNoInfoModal2_2(false);

    const [showNoInfoModal3_2, setShowNoInfoModal3_2] = useState(false);
    const handleShowNoInfoModal3_2 = () => setShowNoInfoModal3_2(true);
    const handleCloseNoInfoModal3_2 = () => setShowNoInfoModal3_2(false);

    // for Traduction

    const { t } = useTranslation();

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
                                    onClick={handleShowNoInfoModal1}
                                    />
                                    {/* Modale */}
                                    <Modal show={showNoInfoModal1} onHide={handleCloseNoInfoModal1} backdrop={false}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{t('mod_title1')}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            {t('mod_text1')}
                                            <br></br>
                                            <a id='modals-links' href="https://discord.gg/8XrD9V2bH4"><b>Discord</b></a>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseNoInfoModal1}>
                                                Fermer
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block carousel-img"
                                    src={image2}
                                    alt="Second slide"
                                    onClick={handleShowNoInfoModal2}
                                    />
                                    {/* Modale */}
                                    <Modal show={showNoInfoModal2} onHide={handleCloseNoInfoModal2} backdrop={false}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{t('mod_title2')}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            {t('mod_text2')}
                                            <br></br>
                                            <a id='modals-links' href="https://github.com/nosanDev/Mathemapy"><b>GitHub</b></a>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseNoInfoModal2}>
                                                Fermer
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block carousel-img"
                                    src={image3}
                                    alt="Third slide"
                                    onClick={handleShowNoInfoModal3}
                                    />
                                    {/* Modale */}
                                    <Modal show={showNoInfoModal3} onHide={handleCloseNoInfoModal3} backdrop={false}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{t('mod_title3')}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            {t('mod_text3')}
                                            <br></br>
                                            <a id='modals-links' href="https://discord.gg/2bJ8qjte5M"><b>Discord</b></a>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseNoInfoModal3}>
                                                Fermer
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block carousel-img"
                                    src={image4}
                                    alt="Third slide"
                                    onClick={handleShowNoInfoModal4}
                                    />
                                    {/* Modale */}
                                    <Modal show={showNoInfoModal4} onHide={handleCloseNoInfoModal4} backdrop={false}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{t('mod_title4')}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            {t('mod_text4')}
                                            <br></br>
                                            <a id='modals-links' href="https://github.com/nosanDev"><b>GitHub</b></a>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseNoInfoModal4}>
                                                Fermer
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Carousel.Item>
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
                                    onClick={handleShowNoInfoModal1_2}
                                    />
                                    {/* Modale */}
                                    <Modal show={showNoInfoModal1_2} onHide={handleCloseNoInfoModal1_2} backdrop={false}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{t('mod_title1_2')}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            {t('mod_text1_2')}
                                            <br></br>
                                            <a id='modals-links' href="https://delphine-sanchez-hypnose.fr"><b>WebSite</b></a>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseNoInfoModal1_2}>
                                                Fermer
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block carousel-img"
                                    src={image2_2}
                                    alt="Second slide"
                                    onClick={handleShowNoInfoModal2_2}
                                    />
                                    {/* Modale */}
                                    <Modal show={showNoInfoModal2_2} onHide={handleCloseNoInfoModal2_2} backdrop={false}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{t('mod_title2_2')}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            {t('mod_text2_2')}
                                            <br></br>
                                            <a id='modals-links' href="https://github.com/nosanDev"><b>GitHub</b></a>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseNoInfoModal2_2}>
                                                Fermer
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block carousel-img"
                                    src={image3_2}
                                    alt="Third slide"
                                    onClick={handleShowNoInfoModal3_2}
                                    />
                                    {/* Modale */}
                                    <Modal show={showNoInfoModal3_2} onHide={handleCloseNoInfoModal3_2} backdrop={false}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{t('mod_title3_2')}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            {t('mod_text3_2')}
                                            <br></br>
                                            <a id='modals-links' href="https://github.com/nosanDev"><b>GitHub</b></a>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseNoInfoModal3_2}>
                                                Fermer
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
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
                                <a href={CVPath} download={CVPath}>
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
