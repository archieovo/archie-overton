import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

function Hero({ scrollToSection }) {
    return (
        <>
            <div id="hero" className="hero-section alt-bg">
                <div className="hero-content">
                    <h1>Introduction</h1>
                    <p>I'm driven by a genuine passion for using technology to solve real problems and protect people's digital lives. Whether I'm building intuitive web applications or exploring cybersecurity concepts, I'm motivated by the opportunity to make systems safer and more accessible for everyone. I'm actively seeking an apprenticeship or entry-level role where I can contribute fresh ideas, learn from experienced professionals, and help create technology that makes a positive difference in people's everyday lives.</p>
                    <p className="blog-callout">Want to learn how I built this portfolio? <Link to="/blog/building-my-portfolio" className="blog-link">Read my latest blog post</Link> about collaborating with Alex and my plans for adding security features!</p>

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
