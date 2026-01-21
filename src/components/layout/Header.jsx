import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <span className="logo-icon"><i className="fa-solid fa-shield-halved"></i></span>
                    KOM<span className="highlight">CAD</span>
                </Link>

                <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
                        <li><Link to="/news" className={`nav-link ${isActive('/news')}`}>News</Link></li>
                        <li><Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link></li>
                        <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link></li>
                    </ul>
                </nav>

                <div className="auth-buttons">
                    <a href="https://komcad.bacadnas.com/login" className="btn btn-outline small" target="_blank" rel="noopener noreferrer">Login</a>
                    <a href="https://komcad.bacadnas.com/lregis" className="btn btn-primary small" target="_blank" rel="noopener noreferrer">Register</a>
                </div>

                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </header>
    );
};

export default Header;
