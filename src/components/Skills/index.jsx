import React from 'react';
import "./Skills.css";
import { FaReact, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiFlutter, SiTailwindcss, SiNextdotjs, SiFirebase } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { icon: <FaReact size={80} />, name: 'React' },
        { icon: <SiFlutter size={80} />, name: 'Flutter' },
        { icon: <SiTailwindcss size={80} />, name: 'Tailwind' },
        { icon: <FaCss3Alt size={80} />, name: 'CSS' },
        { icon: <SiNextdotjs size={80} />, name: 'Next.js' },
        { icon: <FaJs size={80} />, name: 'JavaScript' },
        { icon: <FaDatabase size={80} />, name: 'MySQL' },
        { icon: <SiFirebase size={80} />, name: 'Firebase' }
    ];

    return (
        <section id='skills'>
            <div className="section_header center">
                    <h2 className="primary_title">My Skills</h2>
                </div>
            <div className="section_wrapper skills_container">         
            
                <div className="skills_grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill_card">
                            {skill.icon}
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
