import React from 'react';
import './Footer.css';
import footer from '../../assets/Footer.png';
import footerMobile from '../../assets/Footer-mobile.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={footer} alt="Footer" className="footer-image" />
        <img
          src={footerMobile}
          alt="Footer Mobile"
          className="footer-image-mobile"
        />
      </div>
    </footer>
  );
};

export default Footer;
