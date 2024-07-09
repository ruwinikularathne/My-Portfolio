import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { sumArray } from '../../helper';

const tabs = [
    { name: "All" },
    { name: "Web" },
    { name: "UI/UX" },
    { name: "Apps" },
];

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const itemsEls = useRef(new Array());

    useEffect(() => {
        const prevEls = itemsEls.current.filter((_, index) => index < activeIndex);
        setOffset(sumArray(prevEls.map(item => item.offsetWidth)));
        setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
    }, [activeIndex]);

    return (
        <section id='projects'>
            <div className="section_wrapper projects_container">
                <div className="section_header center">
                    <h2 className="primary_title">Projects</h2>
                </div>
                <nav>
                    {tabs.map((tab, index) => (
                        <button
                            ref={el => itemsEls.current[index] = el}
                            onClick={() => setActiveIndex(index)}
                            key={index}
                        >
                            {tab.name}
                        </button>
                    ))}
                    <span
                        className='active_indicator'
                        style={{
                            left: `${offset}px`,
                            width: `${indicatorWidth}px`
                        }}
                    ></span>
                </nav>
            </div>
        </section>
    );
};

export default Projects;
