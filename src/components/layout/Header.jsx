import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                {/* 1. Logo */}
                <Link to="/" className="logo">
                    <img src="/KEMENTERIAN-PERTAHANAN.png" alt="Kementerian Pertahanan" style={{ height: '60px', width: 'auto' }} />
                    <span>KOMCAD</span>
                </Link>

                {/* 2. Nav Links (Pushed Left) */}
                <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" className={`nav-link ${isActive('/')}`}>Beranda</Link></li>
                        <li><Link to="/about" className={`nav-link ${isActive('/about')}`}>Tentang</Link></li>
                        <li><Link to="/news" className={`nav-link ${isActive('/news')}`}>Berita</Link></li>
                        <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Kontak</Link></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    {/* Phone number removed as requested */}
                    <a
                        href="https://komcad.bacadnas.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cta"
                    >
                        Daftar / Login
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </header>
    );
};

export default Header;
