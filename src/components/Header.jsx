import React from 'react';

function Header() {
    return (
        <>
            <header>
                <img src="/assets/profilePicture.png" id="profile_photo" alt="Archie Overton - Profile Photo" />
                <div id="titlecard">
                    <h1 id="title">Archie Overton</h1>
                </div>

                <nav id="links" aria-label="Social media links">
                    <a href="mailto:archieoverton@hotmail.com" target="_blank" rel="noopener noreferrer" className="fa fa-envelope-o" aria-label="Email Archie Overton"></a>
                    <a href="https://github.com/archieovo" target="_blank" rel="noopener noreferrer" className="fa fa-github" aria-label="GitHub Profile"></a>
                    <a href="https://www.linkedin.com/in/archie-overton-2a36902b9" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin-square" aria-label="LinkedIn Profile"></a>
                </nav>
            </header>

        </>
    );
}

export default Header;