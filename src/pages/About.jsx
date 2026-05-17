import Banner from '../components/Banner';
import Critere from '../components/Critere';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/About.css';

function AboutPage() {
  return (
    <>
      <div className="container-about">
        <Header />
        <Banner />
        <div className="cont-critere">
          <Critere
            name="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            id="1"
          />
          <Critere
            name="Respect"
            content="La bienveillance fait partie des valeurs  fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
            id="2"
          />
          <Critere
            name="Service"
            content="La qualité de notre service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction que ce soit avec nos hotes ou nos locataires, soit empreinte de respect et de bienveillance."
            id="3"
          />
          <Critere
            name="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos locataires, chaque logement correspond aux critères de sécurité de ssécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet de garantir un environnement sûr et agréable pour tous à nos équipes de vérifier que les standards sont  bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes"
            id="4"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
