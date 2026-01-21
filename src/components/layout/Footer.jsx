import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <span className="logo-icon"><i className="fa-solid fa-shield-halved"></i></span>
                            KOM<span className="highlight">CAD</span>
                        </Link>
                        <p>Pertahanan Negara, Tanggung Jawab Bersama.</p>
                    </div>
                    <div className="footer-links">
                        <div className="link-column">
                            <h4>Company</h4>
                            <Link to="/about">About</Link>
                            <Link to="/news">News</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="footer-auth">
                            <h4>Account</h4>
                            <a href="https://komcad.bacadnas.com/login" target="_blank" rel="noopener noreferrer">Login</a>
                            <a href="https://komcad.bacadnas.com/lregis" target="_blank" rel="noopener noreferrer">Register</a>
                        </div>
                        <div className="link-column">
                            <h4>Contact</h4>
                            <a href="mailto:info@komcad.bacadnas.com">info@komcad.bacadnas.com</a>
                            <a href="tel:+62210000000">+62 21 0000 0000</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 KOMCAD. All rights reserved.</p>
                    <div className="socials">
                        <a href="#"><i className="fa-brands fa-behance"></i></a>
                        <a href="#"><i className="fa-brands fa-dribbble"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
