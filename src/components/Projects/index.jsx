import React, { useEffect, useState } from 'react';
import './Projects.css';
import { projects } from '../../data';
import Card from './Card';

const Projects = () => {
    const [displayableProjects, setDisplayableProjects] = useState([]);

    useEffect(() => {
        setDisplayableProjects(projects);
    }, []);

    return (
        <section id='projects'>
            <div className="section_wrapper projects_container">
                <div className="section_header center">
                    <h2 className="primary_title">My Projects</h2>
                </div>
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


