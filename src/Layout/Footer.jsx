import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img className="footer__img" src="./LOGO.svg" alt="logo" />
            </div>
            <div className="footer__text">
                © 2020 Kasa. All rights reserved
            </div>
        </div>
    )
}

export default Footer;