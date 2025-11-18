import React from 'react';
import './Education.scss';

function Education() {
    return (
        <div id="education" className="alt-bg">
            <h1>Education</h1>
            <div className="education-content">
                <div className="education-item">
                    <h3>Current Education</h3>
                    <p>Actively pursuing knowledge in software engineering and cybersecurity through hands-on projects and work experience placements.</p>
                </div>
                <div className="education-item">
                    <h3>Self-Directed Learning</h3>
                    <ul>
                        <li>Python programming and Object-Oriented Programming principles</li>
                        <li>Modern web development with React and Vite</li>
                        <li>Database management systems</li>
                        <li>Core cybersecurity principles and best practices</li>
                        <li>Data analysis and interpretation</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Education;
