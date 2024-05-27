// src/pages/PolitiqueConf/PolitiqueConf.jsx
import React from 'react';
import './PolitiqueConf.css'
import Header_2 from '../../components/Header_2/Header_2';
import Footer from '../../components/Footer/Footer';

const PolitiqueConf = () => {
  return (
    <div>
      <Header_2 />
      <div className='politiquesconf-container'>
        <div id='title'>
          <h1 className='inika-bold'>Politiques de Confidentialités</h1>
        </div>
        <div className='txt-politiques'>
          <h5 className='inria-sans-regular-italic'>
            Nous attachons une grande importance au respect de la vie privée des utilisateurs du site Webnono 
            et nous nous engageons à protéger leurs données personnelles conformément à la législation française et européenne en vigueur. 
            Cette politique de confidentialité, ci-après dénommée "Politique", expose nos pratiques concernant les informations collectées sur le site et leur utilisation.
          </h5>
          <h2 className='inika-bold'>1. Identité du responsable de traitement</h2>
          <h5 className='inria-sans-regular'>
            Nous agissons en qualité de responsable de traitement des données personnelles collectées sur le site Webnono :
            Responsable : Webnono Contact : contact@webnono.com
          </h5>
          <h2 className='inika-bold'>2. Portée et acceptation de la Politique</h2>
          <h5 className='inria-sans-regular'>
            Cette Politique s'applique uniquement aux informations collectées sur le site Webnono et ne s'applique pas aux informations collectées
            sur d'autres sources telles que Facebook®, Twitter®, YouTube® ou tout autre site ou réseau social tiers.
            En utilisant notre site, vous acceptez les termes de cette Politique. Si vous refusez les termes de cette Politique,
            nous vous invitons à ne pas utiliser notre site ou à ne pas nous transmettre d'informations personnelles.
          </h5>
          <h2 className='inika-bold'>3. Données collectées sur notre site</h2>
          <h5 className='inria-sans-regular'>
            Nous collectons et conservons uniquement les données personnelles que vous nous communiquez volontairement sur notre site, telles que votre nom, prénom, adresse électronique, adresse IP, etc. 
            Nous pouvons vous demander ces données personnelles dans le cadre de votre interaction avec notre site, notamment lorsque vous souhaitez nous contacter ou nous faire part de vos commentaires.
            Lors de votre navigation sur notre site, nous ne collectons que les données personnelles que vous nous fournissez volontairement, à l'exception de certaines données collectées automatiquement 
            par les systèmes d'information et programmes utilisés pour le fonctionnement du site, telles que l'adresse IP, dont la transmission est inhérente à l'utilisation d'internet.
            Nous vous demandons uniquement les informations strictement nécessaires à votre interaction avec notre site. 
            Le caractère facultatif ou obligatoire des données personnelles demandées est clairement indiqué lors de la collecte.
          </h5>
          <h2 className='inika-bold'>4. Finalités de la collecte des données personnelles</h2>
          <h5 className='inria-sans-regular'>
            Chaque formulaire présent sur notre site restreint au strict nécessaire la collecte des données personnelles et indique clairement les finalités de cette collecte ainsi que le caractère facultatif ou obligatoire des données.
            Nous n'utiliserons jamais vos données personnelles à des fins autres que celles explicitement annoncées et acceptées par vous. 
            De même, vos données personnelles ne seront pas transmises ou cédées à des tiers sans votre consentement explicite.
          </h5>
          <h2 className='inika-bold'>5. Destinataire des données personnelles</h2>
          <h5 className='inria-sans-regular'>
            Les données personnelles collectées sur notre site sont destinées uniquement à Webnono. 
            Nous pouvons être amenés à divulguer vos données personnelles aux autorités judiciaires ou aux forces de l'ordre si cela est requis par la loi.
          </h5>
          <h2 className='inika-bold'>6. Durée de conservation</h2>
          <h5 className='inria-sans-regular'>
            Nous conservons vos données personnelles pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, 
            ou pour la durée requise par la loi en vigueur
          </h5>
          <h2 className='inika-bold'>7. Vos droits</h2>
          <h5 className='inria-sans-regular'>
            Conformément à la législation en vigueur, vous disposez d'un droit d'accès, de modification, de rectification et de suppression de vos données personnelles. 
            Pour exercer ces droits, vous pouvez nous contacter par email à l'adresse contact@webnono.com ou par courrier à l'adresse suivante :
            Webnono Adresse postale Code postal, Ville
            Votre demande doit être signée et accompagnée d'une copie de votre pièce d'identité. Nous vous répondrons dans un délai de 2 mois suivant la réception de votre demande.
          </h5>
          <h2 className='inika-bold'>8. Sécurité</h2>
          <h5 className='inria-sans-regular'>
            La sécurité de vos données personnelles est une priorité pour nous. Nous utilisons des protocoles sécurisés pour limiter les risques d'interception ou de récupération par des tiers. 
            Cependant, en raison de la nature d'internet, nous ne pouvons garantir une sécurité absolue.
            En continuant à utiliser notre site, vous acceptez les risques liés à l'utilisation d'internet. 
            Nous déclinons toute responsabilité en cas d'accès non autorisé, de perte ou d'altération de vos données personnelles, dans les limites autorisées par la loi.
            Cette politique de confidentialité est sujette à des mises à jour périodiques. 
            Nous vous encourageons à consulter régulièrement cette page pour rester informé(e) de nos pratiques en matière de confidentialité.
          </h5>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolitiqueConf;