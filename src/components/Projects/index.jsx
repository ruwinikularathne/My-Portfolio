import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { sumArray } from '../../helper';
import { projects } from '../../data';
import Card from './Card';

const tabs = [
    { name: "All" },
    { name: "Web" },
    { name: "UI/UX" },
    { name: "Apps" },
];

const Projects = () => {
    const [displayableProjects, setDisplayableProjects] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const itemsEls = useRef(new Array());

    useEffect(() => {
        const prevEls = itemsEls.current.filter((_, index) => index < activeIndex);
        setOffset(sumArray(prevEls.map(item => item.offsetWidth)));
        setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
    }, [activeIndex]);

    const setProjects = (category) => {
        if (category === "All") {
            return setDisplayableProjects(projects);
        }
        const filteredProjects = projects.filter((item) => item.category.toLowerCase() === category.toLowerCase());
        setDisplayableProjects(filteredProjects);
    };

    useEffect(() => {
        // Set the initial displayable projects to 'All'
        setDisplayableProjects(projects);
    }, []);

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
                            onClick={() => {
                                setActiveIndex(index);
                                setProjects(tab.name);
                            }}
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
                <div className="card_container">
                    {displayableProjects.map((project, index) => (
                        <Card 
                            title={project.title}
                            image={project.image}
                            data={project.data}
                            stack={project.stack}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
