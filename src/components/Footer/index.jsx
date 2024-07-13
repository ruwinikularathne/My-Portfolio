import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer_content">
                <div className="contact_info">
                    <p><FaEnvelope /> ruwinikularathne2000@gmail.com</p>
                    <p><FaPhone /> +94 77 123 4567</p>
                </div>
                <div className="social_links">
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
                <div className="copyright">
                    <p>Copyright © 2024 Ruwini Kularathne. All Rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
