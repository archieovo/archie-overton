import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Archie Overton. All rights reserved.</p>
        </footer>
    );
}

export default Footer;