import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footerTxt">
        <p>Møllerup Gods</p>
        <p>Møllerupvej 26</p>
        <p>8440 Rønde</p>
      </div>
      
      <div className="footerLinks">
        <a href="tel:+4587586900">Telefon 87 58 69 00</a>
        <a href="mailto:info@moellerup.dk">info@moellerup.dk</a>
      </div>

      <ul>
        <li>Tekst Lone Rubin</li>
      </ul>
    </footer>
  )
}


export default Footer;
