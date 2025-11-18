import React from 'react';
import './Hero.scss';

function Hero({ scrollToSection }) {
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
            </div>
        </>
    );
}

export default Hero;
