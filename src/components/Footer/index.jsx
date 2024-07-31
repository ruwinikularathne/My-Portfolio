import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer_content">
                <div className="contact_info">
                    <p><FaEnvelope /> ruwinikularathne2000@gmail.com</p>
                </div>
                <div className="social_links">
                    <a href="https://github.com/ruwinikularathne" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} /></a>
                     <a href="https://www.linkedin.com/in/ruwini-kularathne-13642a21b/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=lk" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} /></a>
                    <a href="https://www.instagram.com/ruwini_kularathne/?igsh=MWtyN2hwemxvOXk5bQ%3D%3D" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} /></a>
                    <a href="https://www.facebook.com/ruwini.kularathne?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} /></a>
                </div>
                <div className="copyright">
                    <p>Copyright @ 2024 Ruwini Kularathne. All Rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
