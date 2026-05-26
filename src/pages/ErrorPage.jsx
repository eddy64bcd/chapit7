import React from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import '../styles/ErrorPage.css';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="container-error">
      <Header />
      <div className="error-title">404</div>
      <div className="container-error-text">
      <p className="error-text">
        Oups! La page que <span>vous demandez n'existe pas.</span>
        </p>
        </div>
      <button className="btn-retour" onClick={handleClick}>
        Retourner sur la page d'accueil
      </button>

      <Footer />
    </div>
  );
}

export default ErrorPage;
