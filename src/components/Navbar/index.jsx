import React from 'react'
import "./Navbar.css"
import { SiWebmoney } from "react-icons/si";
import {menu} from "../../data"
import { Link,animateScroll as scroll } from 'react-scroll';
import { FaArrowUpRightFromSquare,FaBarsStaggered } from 'react-icons/fa6';

const Navbar = () => {
    return(
        <nav className='navbar_container'>
            <div className='logo_container'>
                <SiWebmoney/>
            </div>
            <div className='tab_group'>
                {
                    menu.map((list,index)=>(
                        <Link
                            activeClass="active"
                            className='tab_item name'
                            to={list.name.toLowerCase()}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            key={index}
                        >
                            {list.name}
                        </Link>
                    ) )
                }
            </div>
            <div className='nav_buttons_group'>
                <button className='btn btn_primary'>Hire me </button>

            </div>
        </nav>
    )
}

export default Navbar