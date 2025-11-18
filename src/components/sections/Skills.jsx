import React from 'react';
import { skillsData } from '../../data/skills';
import './Skills.scss';

function Skills() {
    return (
        <div id="skills" className="bg">
            <h1>Technical Skills</h1>
            <div className="skills-container">
                <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <div className="skills-grid">
                        {skillsData.programmingLanguages.map((skill, index) => (
                            <span key={index} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Frameworks & Libraries</h3>
                    <div className="skills-grid">
                        {skillsData.frameworksAndLibraries.map((skill, index) => (
                            <span key={index} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Tools & Technologies</h3>
                    <div className="skills-grid">
                        {skillsData.toolsAndTechnologies.map((skill, index) => (
                            <span key={index} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Areas of Interest</h3>
                    <div className="skills-grid">
                        {skillsData.areasOfInterest.map((skill, index) => (
                            <span key={index} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
