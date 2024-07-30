import React from 'react';
import "./Header.css";
import { homeru } from "../../images";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; 
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

const Header = () => {
    return(
        <header id='home' className='blur-effect'>
            <div className="stroke_text intro_text">Hello</div>
            <div className="section_wrapper header_container">
                <div className="column intro_container blur-effect">
                    <div className="header_info">
                        <div className="header_info_top">
                            Hello! I'm <span className='color_primary'>Ruwini Kularathne</span>
                        </div>                           
                         <div className="header_info_middle">
                              <h1 className='primary_title header_title'>I'm a <Typewriter
                                    options={{
                                        strings: ['Web Developer', 'UI/UX Designer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                        </div>
                        <div className="social-icons">
                                <a href="https://github.com/ruwinikularathne" target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={30} />
                                </a>
                                <a href="https://www.linkedin.com/in/ruwini-kularathne-13642a21b/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=lk" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={30} />
                                </a>
                                <a href="https://www.instagram.com/ruwini_kularathne/?igsh=MWtyN2hwemxvOXk5bQ%3D%3D" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={30} />
                                </a>
                                <a href="https://www.facebook.com/ruwini.kularathne?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={30} />
                                </a>
                            </div>
                        <div className="header_info_bottom">
                            <a href="/Software Engineer Internship-Frontend_Ruwini Kularathne_CV.pdf" download className='btn'>Download CV</a>
                            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className='btn'>
                            Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="column profile_wrapper">
                     <div className="profile_photo_container">
                        <img src={homeru} className='profile_photo' alt="Ruwini Kularathne" />
                    </div>
                </div>
             </div>
        </header>
    )
}

export default Header;
