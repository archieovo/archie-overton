import React from 'react';
import GitHubStats from './GitHubStats';


function Home() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <div id="hero" className="hero-section alt-bg">
                <div className="hero-content">
                    <h1>Introduction</h1>
                    <p>I'm a motivated and reliable individual with a strong passion for technology, eager to grow my experience in cybersecurity and software engineering through an apprenticeship or entry-level role. I enjoy solving complex problems and continuously expanding my technical knowledge by exploring new programming languages and frameworks such as React. Alongside this, I'm developing my understanding of core cybersecurity principles through independent study, driven by a genuine curiosity for how systems and data can be protected.</p>

                    <div className="cta-buttons">
                        <button onClick={() => scrollToSection('projects')} className="cta-button primary">View Projects</button>
                        <button onClick={() => scrollToSection('contact')} className="cta-button secondary">Get in Touch</button>
                    </div>
                </div>

                <nav className="quick-nav">
                    <button onClick={() => scrollToSection('introduction')} className="nav-pill">About</button>
                    <button onClick={() => scrollToSection('projects')} className="nav-pill">Projects</button>
                    <button onClick={() => scrollToSection('workExperience')} className="nav-pill">Experience</button>
                    <button onClick={() => scrollToSection('contact')} className="nav-pill">Contact</button>
                </nav>

                <p>I'm a motivated and reliable individual with a strong passion for technology, eager to grow my experience in cybersecurity and software engineering through an apprenticeship or entry-level role. I enjoy solving complex problems and continuously expanding my technical knowledge by exploring new programming languages and frameworks such as React. Alongside this, I'm developing my understanding of core cybersecurity principles through independent study, driven by a genuine curiosity for how systems and data can be protected.</p>

            </div>

            <div id="skills" className="bg">
                <h1>Technical Skills</h1>
                <div className="skills-container">
                    <div className="skill-category">
                        <h3>Programming Languages</h3>
                        <div className="skills-grid">
                            <span className="skill-badge">Python</span>
                            <span className="skill-badge">JavaScript</span>
                            <span className="skill-badge">HTML</span>
                            <span className="skill-badge">CSS</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Frameworks & Libraries</h3>
                        <div className="skills-grid">
                            <span className="skill-badge">React</span>
                            <span className="skill-badge">Vite</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Tools & Technologies</h3>
                        <div className="skills-grid">
                            <span className="skill-badge">Git</span>
                            <span className="skill-badge">GitHub</span>
                            <span className="skill-badge">Database Management</span>
                            <span className="skill-badge">Object-Oriented Programming</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Areas of Interest</h3>
                        <div className="skills-grid">
                            <span className="skill-badge">Cybersecurity</span>
                            <span className="skill-badge">Software Engineering</span>
                            <span className="skill-badge">Web Development</span>
                            <span className="skill-badge">Data Analysis</span>
                        </div>
                    </div>
                </div>
            </div>

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

            <div id="projects" className="bg">
                <h1>Projects</h1>
                <div className="grid" id="repo-grid">
                    <a className="card" href="https://github.com/archieovo/archie-overton" target="_blank">
                        <img src="https://opengraph.githubassets.com/1/archieovo/archie-overton" alt="Portfolio Website" />
                        <div className="card-content">
                            <h2>Portfolio Website</h2>
                            <p>A modern, responsive portfolio website built to showcase my projects, skills, and professional journey.</p>
                            <div className="tech-tags">
                                <span className="tech-tag">React</span>
                                <span className="tech-tag">Vite</span>
                                <span className="tech-tag">CSS</span>
                                <span className="tech-tag">JavaScript</span>
                            </div>
                        </div>
                    </a>

                    <a className="card" href="https://github.com/archieovo/Comp-Science-Project" target="_blank">
                        <img src="https://opengraph.githubassets.com/1/archieovo/Comp-Science-Project" alt="Gym Track Application" />
                        <div className="card-content">
                            <h2>Replica Gym Track App</h2>
                            <p>A comprehensive gym tracking application demonstrating object-oriented programming principles and database management. Features include workout logging, progress tracking, and data persistence.</p>
                            <div className="tech-tags">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">OOP</span>
                                <span className="tech-tag">Database</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="bg">
                <GitHubStats />
            </div>

            <div id="interestInTech" className="alt-bg">
                <h1>Interest In Technology</h1>

                <p>My interest in technology began at age 14 when I built my first computer, sparking a fascination with how hardware and software interact. This curiosity quickly expanded into programming, starting with Python, where I experimented with basic programs and eventually developed my first major project involving databases and a fully functional Python application. While hardware introduced me to technology, it was the depth and creativity of software development that truly captivated me. Since then, I have continued to explore areas such as web development using React and the fundamentals of cybersecurity, continuously building both my practical skills and theoretical understanding.</p>
            </div>

            <div id="workExperience" className="alt-bg">
                <h1>Work experience</h1>
            </div>

            <div className="bg">
                <div className="cert_container">
                    <a href="https://certificates.young-professionals.uk/c/021cccf5658648f8af19be2a5a3f7a98" target="_blank" rel="noopener noreferrer">
                        <img id="certImage" src="/assets/cert.png" alt="Experian Work Insight Day Certificate - November 1st 2024" loading="lazy" />
                    </a>
                    <div id="mhrImage" className="experianText">
                        <p>    Experian Nottingham – Work Insight Day (1st November 2024)
                            I took part in a work experience day at Experian, where I was introduced to how data is used to support business decisions. As part of the experience, I participated in a data analysis activity that involved sorting and interpreting a dataset to determine how different customer groups should receive differently priced Alton Towers ticket offers. This exercise helped me understand how companies use data-driven reasoning, segmentation, and teamwork to guide commercial decisions.</p>

                        <p>  We were also given a tour of Experian’s Nottingham office, where I gained an understanding of how different departments collaborate within a large technology organisation. One of the most valuable parts of the day was speaking with current degree apprentices about their application processes, the skills they developed, and what it’s like working at Experian. Their advice gave me a clearer idea of the expectations of apprenticeship roles and motivated me to continue building my skills in technology and cybersecurity.</p>
                    </div>
                </div>
            </div>

            <div className="bg">
                <div className="mhr_container">
                    <a href="https://mhrglobal.com/uk/en?_gl=1*gyk2af*_up*MQ..*_gs*MQ..&gclid=Cj0KCQiA5uDIBhDAARIsAOxj0CGeh2sXWgjjNvikeN7pDfy9kBpJu6Ig9NIilN8Uc0ezQoSq6g12rw8aAif0EALw_wcB&gclsrc=aw.ds&gbraid=0AAAAAD84ZFnMLq5CrPAHSZjlRYLkIK9Iy" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/edited-mhr.png" alt="MHR Global Logo - Upcoming Work Experience January 2025" loading="lazy" />
                    </a>
                    <div id="upcomingWorkExperience">
                        <p>Upcoming Work Experience – MHR Global (Cybersecurity & Software Development)
                            On the 26th of January, I will begin a five-day work experience placement at MHR Global, where I’ll be spending three days with the Cybersecurity team and two days with the Software Development team. This opportunity will give me direct exposure to how security and engineering work together inside a professional tech environment.</p>

                        <p>During the cybersecurity portion, I expect to learn about real-world security practices such as threat identification, system monitoring, risk management, and the processes used to keep company and customer data safe.</p>

                        <p>In the software development section, I will be learning how developers collaborate on projects, write and maintain code, and apply modern development tools and workflows.</p>

                        <p>This experience will help me grow both technically and professionally, and I’m excited to learn from experienced engineers while gaining a clearer understanding of the career path I want to follow.</p>
                    </div>
                </div>
            </div>

            <div id="contact" className="contact-section alt-bg">
                <h1>Get In Touch</h1>
                <p className="contact-intro">I'm actively seeking apprenticeship and entry-level opportunities in software engineering and cybersecurity. Feel free to reach out!</p>

                <div className="contact-grid">
                    <div className="contact-card">
                        <i className="fa fa-envelope-o contact-icon"></i>
                        <h3>Email</h3>
                        <a href="mailto:archieoverton@hotmail.com">archieoverton@hotmail.com</a>
                    </div>

                    <div className="contact-card">
                        <i className="fa fa-github contact-icon"></i>
                        <h3>GitHub</h3>
                        <a href="https://github.com/archieovo" target="_blank" rel="noopener noreferrer">@archieovo</a>
                    </div>

                    <div className="contact-card">
                        <i className="fa fa-linkedin-square contact-icon"></i>
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/archie-overton-2a36902b9" target="_blank" rel="noopener noreferrer">Archie Overton</a>
                    </div>
                </div>

                <div className="availability-status">
                    <p><strong>Availability:</strong> Open to apprenticeships and entry-level roles starting immediately</p>
                    <p><strong>Location:</strong> Nottingham, UK</p>
                </div>
            </div>

        </>
    );
}

export default Home;
