import React from 'react';
import { projectsData } from '../../data/projects';
import GitHubStats from '../GitHubStats.jsx';
import './Projects.scss';

function Projects() {
    return (
        <>
            <div id="projects" className="bg">
                <h1>Projects</h1>
                <div className="grid" id="repo-grid">
                    {projectsData.map((project) => (
                        <a key={project.id} className="card" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.title} />
                            <div className="card-content">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="tech-tags">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="bg">
                <GitHubStats />
            </div>
        </>
    );
}

export default Projects;
