import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import './Header.scss';

function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <header>
                <img src="/assets/profilePicture.png" id="profile_photo" alt="Archie Overton - Profile Photo" />
                <div id="titlecard">
                    <Link to="/" id="title">Archie Overton</Link>
                </div>

                <nav id="nav-links" aria-label="Page navigation">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/blog" className="nav-link blog-button">Blog</Link>
                </nav>

                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    {theme === 'dark' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"/>
                            <line x1="12" y1="1" x2="12" y2="3"/>
                            <line x1="12" y1="21" x2="12" y2="23"/>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                            <line x1="1" y1="12" x2="3" y2="12"/>
                            <line x1="21" y1="12" x2="23" y2="12"/>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                        </svg>
                    )}
                </button>

                <nav id="social-links" aria-label="Social media links">
                    <a href="mailto:archieoverton@hotmail.com" target="_blank" rel="noopener noreferrer" className="fa fa-envelope-o" aria-label="Email Archie Overton"></a>
                    <a href="https://github.com/archieovo" target="_blank" rel="noopener noreferrer" className="fa fa-github" aria-label="GitHub Profile"></a>
                    <a href="https://www.linkedin.com/in/archie-overton-2a36902b9" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin-square" aria-label="LinkedIn Profile"></a>
                </nav>
            </header>

        </>
    );
}

export default Header;