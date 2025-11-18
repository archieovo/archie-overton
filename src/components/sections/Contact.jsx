import React from 'react';
import './Contact.scss';

function Contact() {
    return (
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
    );
}

export default Contact;
