import React from 'react'
import "./About.css"
import {profile2} from "../../images";

const About = () => {
    return(
        
        <section id='about'>
            <div className="section_wrapper about_container">
                <div className="me_containerblur_effect">
                    <div className="photo_container">
                        <img src={profile2} alt=""/>
                    </div>
                </div>
                <div className="section_header">
                 <h2 className="primary_title">About Me</h2>
                 <h1 className="title">I am <span className="color_primary">Ruwini Kularathne</span></h1>
                 <p className="text_muted description">
                 I am an aspiring Web Developer passionate about continuous learning and growth with 
                strong organizational and communication skills. My ability to adapt and collaborate 
                effectively with teams makes me a reliable and proactive contributor. I am passionate 
                about pursuing opportunities in the IT industry to further enhance my skills and knowledge. 
                 </p>
                </div>
            </div>
        </section>
    )
}

export default About