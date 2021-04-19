import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__socialMedia">
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className="footer__links">
                <ul className="footer__links-column">
                    <li>Audio and subtitles</li>
                    <li>Press</li>
                    <li>Privacy</li>
                    <li>Contact us</li>
                </ul>
                <ul className="footer__links-column">
                    <li>Descriptive audio</li>
                    <li>Relationship with investors</li>
                    <li>Legal notices</li>
                </ul>
                <ul className="footer__links-column">
                    <li>Help center</li>
                    <li>Carreers</li>
                    <li>Cookies preferences</li>
                </ul>
                <ul className="footer__links-column">
                    <li>Gift Cards</li>
                    <li>Terms of use</li>
                    <li>Corporate information</li>
                </ul>
            </div>
            <div className="footer__code">
                <button className="footer__codeButton">Service Code</button>
            </div>
            <div className="footer__copyright">
                <p>&copy; 1997-2021 Netflix Clone, Inc</p>
            </div>
        </div>
    )
}

export default Footer;