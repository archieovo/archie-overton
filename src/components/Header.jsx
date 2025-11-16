import React from 'react';

function Header() {
    return (
        <>
            <header>
                <img src="/assets/profilePicture.png" id="profile_photo" alt="Profile" />
                <div id="titlecard">
                    <div id="title">Archie Overton</div>
                </div>

                <div id="links">
                    <a href="mailto:archieoverton@hotmail.com" target="_blank" className = "fa fa-envelope-o"></a>
                    <a href="https://github.com/archieovo" target="_blank" className="fa fa-github"></a>
                    <a href="https://www.linkedin.com/in/archie-overton-2a36902b9" target="_blank" className = "fa fa-linkedin-square"></a>
                </div>
            </header>

        </>
    );
}

export default Header;