import React from 'react';
import './About.css';
import { profile2 } from '../../images';

const About = () => {
    return (
        <section id='about'>
            <div className="section_wrapper about_container">
                <div className="me_container blur-effect">
                    <div className="photo_container">
                        <img src={profile2} alt="" />
                    </div>
                </div>
                <div className="section_header">
                    <h2 className="primary_title">About Me</h2>
                    <h1 className="title">I am <span className="color_primary">Ruwini Kularathne</span></h1>
                    <p className="text_muted description">
                    I am an aspiring Web Developer passionate about continuous learning and growth. 
                    My ability to adapt and collaborate effectively with teams makes me a reliable 
                    and proactive contributor. I am passionate about pursuing opportunities in the 
                    IT industry to further enhance my skills and knowledge. 
                    </p>
                    <div className="metrics_container">
                        <div className="metric">
                            <h3>10+</h3>
                            <p>Completed Projects</p>
                        </div>
                        <div className="metric">
                            <h3>8+</h3>
                            <p>Volunteering Experiences</p>
                        </div>
                        <div className="metric">
                            <h3>5+</h3>
                            <p>Achievements</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
