import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
    <div className="container section-padding" style={{ paddingTop: '150px', minHeight: '80vh' }}>
        <h1 className="section-title glitch-effect">The <span className="highlight">Alliance</span></h1>
        <p className="hero-desc">We are the backbone of national defense. A high-tech coalition of citizens ready to protect and serve.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', height: '400px', borderRadius: '16px' }}></div>
            <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Our Code</h3>
                <p style={{ color: 'var(--text-muted)', margin: '1rem 0', lineHeight: '1.8' }}>
                    Unlike traditional forces, we operate on agility and technological superiority. 
                    Every member is a specialist, contributing unique skills to the collective shield.
                </p>
                <ul style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="fa-solid fa-shield-halved" style={{ color: 'var(--accent-color)', marginRight: '15px' }}></i> 
                        <span style={{ color: 'white' }}>Unbreakable Defense</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="fa-solid fa-bolt" style={{ color: 'var(--accent-color)', marginRight: '15px' }}></i> 
                        <span style={{ color: 'white' }}>Rapid Response</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="fa-solid fa-network-wired" style={{ color: 'var(--accent-color)', marginRight: '15px' }}></i> 
                        <span style={{ color: 'white' }}>Connected Network</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default About;
