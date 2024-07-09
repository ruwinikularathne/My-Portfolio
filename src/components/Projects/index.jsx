import React,{useEffect, useRef, useState} from 'react'
import './Projects.css'
import { sumArray } from '../../helper'
const tabs = [
    {name:"All"},
    {name:"Web"},
    {name:"UI/UX"},
    {name:"Apps"},
]
const Projects = () => {
    const [activeIndex,setActiveIndex] = useState(0);
    const [offset,setOffSet] = useState(0);
    const [indicatorWidth,setIndicatorWidth] = useState(0);
    const intemsEls = useRef(new Array());

    useEffect(() =>{
        const prevEl = intemsEls.current.filter((_,index) =>index < activeIndex);
        setOffSet(
            sumArray(
                prevEl.map(item=>item.offSetWidth)
                )
        )
        setIndicatorWidth(intemsEls.current[activeIndex].offSetWidth)
    },[activeIndex])
    return(
        <section id='projects'>
            <div className="scetion_wrapper projects_container">
                <div className="section_header center">
                    <h2 className="primary_title">Projects</h2>
                </div>
            </div>
            <nav>
                {
                    tabs.map((tab,index) => (
                        <button
                        ref={el =>intemsEls.current[index] = el}
                        onDoubleClick={()=>{
                            setActiveIndex(index)
                            } }
                        key={index}
                        >
                            {tab.name}
                        </button>
                    ))
                }
            </nav>
        </section>
    )
}

export default Projects;

