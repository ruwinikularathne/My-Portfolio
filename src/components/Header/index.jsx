import React from 'react'
import "./Header.css"

const Header = () => {
    return(
        <header id='header' className='blur-effect'>
            <div className="stroke_text intro_text">Hello</div>
                <div className="section_wrapper header_container">
                    <div className="column intro_container blur_effect">
                        <div className="header_info">
                            <div className="header_info_top">
                                Hello! I'm <span className='color_primary'>Ruwini Kularathne</span>
                            </div>
                            <div className="header_info_middle">
                                <h1 className='primary_titile header-titile'>I'm a Web Developer</h1>
                            </div>
                            <div className="header_info_bottom">
                                <button className='btn'>Contact Me</button>
                            </div>
                        </div>
                    </div>
            </div>
        </header>
        
    )
}

export default Header
