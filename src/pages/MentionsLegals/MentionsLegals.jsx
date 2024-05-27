// src/pages/MentionsLegals/MentionsLegals.jsx
import React from 'react';
import './MentionsLegals.css'

import Header_2 from '../../components/Header_2/Header_2';
import Footer from '../../components/Footer/Footer';

const MentionsLegals = () => {
  return (
    <div>
      <Header_2 />
      <div className='mentionslegals-container'>
        <div id='title'>
          <h1 className='inika-bold'>Mentions Légals</h1>
        </div>
        <div className='txt-mentions'>
          <h2 className='inika-regular'>Définitions</h2>
          <h5 className='inria-sans-regular'><b>Client : </b>tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.
            Prestations et Services : Le site web https://webnono.com propose divers services et prestations, dont la liste est consultable sur le site.
            Contenu : Ensemble des éléments constitutifs de l’information présente sur le Site, comprenant notamment les textes, images, et vidéos.
            Informations clients : Désigne toutes les données personnelles susceptibles d’être collectées par https://webnono.com pour la gestion de la relation client, la gestion de compte, et à des fins d'analyses et de statistiques.
            Utilisateur : Internaute se connectant, utilisant le site susmentionné.
            Informations personnelles : "Les informations qui permettent, sous quelque forme que ce soit, directement ou indirectement, l'identification des personnes physiques auxquelles elles s'appliquent" 
            (article 4 de la loi n° 78-17 du 6 janvier 1978). Les termes "données à caractère personnel", "personne concernée", "sous-traitant" et "données sensibles" ont le sens défini par le Règlement Général sur la Protection des Données 
            (RGPD : n° 2016-679).
          </h5>
          <h2 className='inika-regular'>  1. Présentation du site internet.</h2>
          <h5 className='inria-sans-regular'>Conformément à l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, voici l’identité des intervenants dans la réalisation et le suivi du site https://webnono.com :
            Propriétaire : Webnono – 46 Grand Rue 68830 Oderen
            Responsable de la publication : Webnono – contact@webnono.com
            Webmaster : Webnono – contact@webnono.com
            Hébergeur : 1and1 – 7 Place de la Gare 57200 Sarreguemines 0970 808 911
            Délégué à la protection des données : Webnono – contact@webnono.com
          </h5>
          <h2 className='inika-regular'>  2. Conditions générales d’utilisation du site et des services proposés.</h2>
          <h5 className='inria-sans-regular'>
            L’utilisation du site https://webnono.com implique l’acceptation pleine et entière des conditions générales 
            d’utilisation disponibles sur le site. Ces conditions sont susceptibles d’être modifiées ou complétées à tout moment.
            Le site est normalement accessible à tout moment, sauf pour des raisons de maintenance technique,
            pour lesquelles une communication préalable sera effectuée.
          </h5>
          <h2 className='inika-regular'>  3. Description des services fournis.</h2>
          <h5 className='inria-sans-regular'>
            Le site internet https://webnono.com a pour but de fournir des informations sur les activités de Webnono. 
            Les informations sont fournies de manière aussi précise que possible, mais peuvent évoluer et ne sont pas exhaustives.
          </h5>
          <h2 className='inika-regular'>  4. Limitations contractuelles sur les données techniques.</h2>
          <h5 className='inria-sans-regular'>
            Le site utilise la technologie JavaScript et est hébergé sur le territoire de l’Union Européenne conformément au RGPD. 
            L’objectif est d’assurer un accès optimal et une continuité de service.
          </h5>
          <h2 className='inika-regular'>  5. Propriété intellectuelle et contrefaçons.</h2>
          <h5 className='inria-sans-regular'>
            Tous les éléments du site https://webnono.com sont la propriété exclusive de Webnono. 
            Toute reproduction ou exploitation non autorisée est interdite.
          </h5>
          <h2 className='inika-regular'>  6. Limitations de responsabilité.</h2>
          <h5 className='inria-sans-regular'>
            Webnono est responsable du contenu publié sur le site. 
            Il ne peut être tenu responsable des dommages indirects ou directs causés lors de l’utilisation du site.
          </h5>
          <h2 className='inika-regular'>  7. Gestion des données personnelles.</h2>
          <h5 className='inria-sans-regular'>
            Webnono collecte des données personnelles dans le respect des réglementations en vigueur. 
            Les utilisateurs disposent de droits concernant leurs données, notamment celui d'accès, de rectification et d'opposition.
          </h5>
          <h2 className='inika-regular'>  8. Notification d’incident.</h2>
          <h5 className='inria-sans-regular'>
            En cas de brèche de sécurité ou d'incident, Webnono s'engage à informer les utilisateurs concernés et à prendre les mesures appropriées.
          </h5>
          <h2 className='inika-regular'>  9. Liens hypertextes, cookies et balises Internet.</h2>
          <h5 className='inria-sans-regular'>
            Le site peut contenir des liens vers d’autres sites. 
            Les utilisateurs peuvent configurer leur navigateur pour accepter ou refuser les cookies.
          </h5>
          <h2 className='inika-regular'>  10. Droit applicable et attribution de juridiction.</h2>
          <h5 className='inria-sans-regular'>
            Tout litige relatif au site https://webnono.com est soumis au droit français. 
            Les tribunaux compétents sont ceux de Lyon.
          </h5>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MentionsLegals;