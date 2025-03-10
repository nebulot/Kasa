import React from 'react';
import "./Footer.scss";
// Importer l'image depuis assets
//<img className="footer__img" src="./src/assets/LOGO.svg" alt="logo" />
import logo from '../assets/LOGO.svg'; 

function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
            <img className="footer__img" src={logo} alt="logo" />
            </div>
            <div className="footer__text">
                © 2020 Kasa. All rights reserved
            </div>
        </div>
    )
}

export default Footer;