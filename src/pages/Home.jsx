import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <section className="hero">
                <div className="container hero-content">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-tags"
                    >
                        <span className="tag">Adventure</span>
                        <span className="tag">Skill Building</span>
                        <span className="tag">Nation Defense</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hero-title glitch-effect"
                    >
                        Level Up Your <br/>
                        <span className="highlight">Real Life Skills</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="hero-desc"
                    >
                        Join the ultimate team (KOMCAD). Unlock new abilities, master advanced tech, and protect what matters. This isn't just duty—it's your journey.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="hero-actions"
                    >
                        <a href="https://komcad.bacadnas.com/lregis" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Start Mission</a>
                        <Link to="/about" className="btn btn-outline">Explore Map</Link>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="hero-stats"
                    >
                        <div className="stat-item">
                            <span className="stat-num">25k+</span>
                            <span className="stat-label">Active Players</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num">3</span>
                            <span className="stat-label">Classes</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num">100%</span>
                            <span className="stat-label">XP Gain</span>
                        </div>
                    </motion.div>
                </div>
            </section>



            <section className="testimonials section-padding" style={{ background: '#0a0a0a', borderTop: '1px solid var(--border-color)' }}>
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <h2 className="section-title glitch-effect">Squad <span className="highlight">Logs</span></h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                           Stories from those who took the challenge.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { name: "Budi 'Striker'", role: "Land Force", quote: "It's not just training, it's upgrading my mental toughness to level 99." },
                            { name: "Siti 'Wave'", role: "Sea Force", quote: "The discipline I learned here helps me crush it in my daily job. Total power up." },
                            { name: "Rizky 'Ace'", role: "Air Force", quote: "Serving my country gives me a purpose higher than any game. Join us." }
                        ].map((item, index) => (
                            <div key={index} style={{ 
                                background: 'rgba(20, 20, 20, 0.6)', 
                                padding: '2rem', 
                                borderRadius: '8px', 
                                border: '1px solid var(--border-color)',
                                backdropFilter: 'blur(5px)'
                            }}>
                                <div style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
                                    <i className="fa-solid fa-gamepad"></i>
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1.5rem' }}>"{item.quote}"</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: '#333', borderRadius: '50%' }}></div>
                                    <div>
                                        <h4 style={{ color: 'white', fontSize: '1rem', margin: 0 }}>{item.name}</h4>
                                        <span style={{ color: 'var(--accent-color)', fontSize: '0.8rem', textTransform: 'uppercase' }}>{item.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
