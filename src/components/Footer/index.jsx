import React from 'react';
import './Footer.css';
import footer from '../../assets/Footer.png';

const Footer = () => {
    return (
        <footer className='footer'>
           <div className='footer-content'>
             <img src={footer} alt="Footer" className='footer-image' />
           </div>
        </footer>
    );
};

export default Footer;