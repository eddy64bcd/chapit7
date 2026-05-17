import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Home.css';
import listings from '../data/Location';

function HomePage() {
  return (
    <>
      <div className="container-home">
        <div className="container-entete">
          <Header />
          <div className="home-image">
            <div className="home-entete">
              <h1 className="home-title">Chez vous, partout et ailleurs</h1>
            </div>
          </div>
        </div>
        <div className="home-contenu">
          <div className="home-listings">
            <div className="home">
              {listings.map((l) => (
                <Card key={l.id} listing={l} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
