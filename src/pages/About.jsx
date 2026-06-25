import Collapse from '../components/Collapse';
import '../styles/About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import Banner from '../components/Banner';
 

function About() {
  return (
   
    <main className="about-page">
      <Header />
      <Banner />
        <div className="collapse-container">
        <Collapse title="Fiabilité" className="about-collapse-header">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale.
            Les designers s'assurent de la véracité des annonces.
          </p>
        </Collapse>

        <Collapse title="Respect" className="about-collapse-header">
          <p>
            La communauté Kasa s'engage à respecter les valeurs de respect
            mutuel entre hôtes et locataires.
          </p>
        </Collapse>

        <Collapse title="Service" className="about-collapse-header">
          <p>
            Notre service client est à votre écoute 7j/7.
          </p>
        </Collapse>

        <Collapse title="Sécurité" className="about-collapse-header">
          <p>
            La sécurité de nos hôtes et de nos locataires est notre priorité.
          </p>
        </Collapse>
      </div>
      <Footer />
    </main>
  
  );
}

export default About;