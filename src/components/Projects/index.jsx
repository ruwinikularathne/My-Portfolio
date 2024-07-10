import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaFigma } from 'react-icons/fa';
import { pro1 } from '../../images';

const projects = [
    {
        title: 'Project One',
        description: 'This is a sample description for Project One.',
        techStack: ['React', 'CSS', 'JavaScript'],
        image: pro1,
        github: '#',
        website: '#',
        figma: '#'
    },
    {
        title: 'Project Two',
        description: 'This is a sample description for Project Two.',
        techStack: ['React', 'Tailwind', 'Firebase'],
        image: pro1,
        github: '#',
        website: '#',
        figma: '#'
    },
    {
        title: 'Project Three',
        description: 'This is a sample description for Project Three.',
        techStack: ['Next.js', 'JavaScript', 'MySQL'],
        image: pro1,
        github: '#',
        website: '#',
        figma: '#'
    },
    {
        title: 'Project Four',
        description: 'This is a sample description for Project Four.',
        techStack: ['Flutter', 'React', 'CSS'],
        image: pro1,
        github: '#',
        website: '#',
        figma: '#'
    },
    {
        title: 'Project Five',
        description: 'This is a sample description for Project Five.',
        techStack: ['JavaScript', 'React', 'Firebase'],
        image: pro1,
        github: '#',
        website: '#',
        figma: '#'
    },
    {
        title: 'Project Six',
        description: 'This is a sample description for Project Six.',
        techStack: ['React', 'Tailwind', 'CSS'],
        image: pro1,
        github: '#',
        website: '#',
        figma: '#'
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="section_header center">
                <h2 className="primary_title">Projects</h2>
            </div>
            <div className="section_wrapper project_container">
                {projects.map((project, index) => (
                    <div className="project_card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className="project_content">
                            <h3 className="project_title">{project.title}</h3>
                            <div className="tech_stack">
                                {project.techStack.map((tech, techIndex) => (
                                    <span key={techIndex}>{tech}</span>
                                ))}
                            </div>
                            <p className="project_description">{project.description}</p>
                            <div className="project_links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={20} />
                                </a>
                                <a href={project.website} target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt size={20} />
                                </a>
                                <a href={project.figma} target="_blank" rel="noopener noreferrer">
                                    <FaFigma size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
