import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            {/* HERO SECTION */}
            <section className="hero-section" style={{ 
                height: '100vh', 
                minHeight: '800px',
                position: 'relative', 
                display: 'flex', 
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                {/* Background */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, #000000 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)', zIndex: 2 }}></div>
                    <img src="/official-hero.png" alt="Pasukan Komponen Cadangan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '50px' }}>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lambang_Kementerian_Pertahanan_Republik_Indonesia.png/600px-Lambang_Kementerian_Pertahanan_Republik_Indonesia.png" alt="Kemhan" style={{ height: '40px', width: 'auto' }} />
                        <span style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontWeight: '600' }}>Kementerian Pertahanan RI</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ 
                            fontFamily: 'var(--font-display)', 
                            fontSize: 'clamp(3.5rem, 8vw, 7rem)', 
                            lineHeight: 1,
                            textTransform: 'uppercase',
                            color: 'white',
                            marginBottom: '2rem',
                            maxWidth: '1200px'
                        }}
                    >
                        Pertahanan <br/>
                        <span style={{ color: 'var(--primary-color)' }}>Semesta</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ 
                            maxWidth: '600px', 
                            fontSize: '1.25rem', 
                            color: '#AAA', 
                            marginBottom: '3rem',
                            lineHeight: 1.6
                        }}
                    >
                        Bergabunglah dengan Komponen Cadangan. Wujudkan bakti nyata untuk kedaulatan negara dan keselamatan bangsa.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                    >
                        <button 
                            onClick={() => document.getElementById('mission').scrollIntoView({ behavior: 'smooth' })} 
                            className="btn btn-primary"
                        >
                            Pelajari Selengkapnya <i className="fa-solid fa-arrow-down" style={{ marginLeft: '0.5rem' }}></i>
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* BENTO GRID (Mission & Roles) */}
            <section id="mission" className="section-padding section-curved">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                        <h2 className="section-title" style={{ margin: 0 }}>Misi <span className="highlight">Utama</span></h2>
                        <span style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>/// Official Directives</span>
                    </div>

                    <div className="bento-grid">
                        {/* Large Feature */}
                        <motion.div className="bento-card span-8" whileHover={{ scale: 1.01 }}>
                            <div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '1rem' }}>Sishankamrata</h3>
                                <p style={{ color: '#555', maxWidth: '80%' }}>Sistem Pertahanan dan Keamanan Rakyat Semesta. KomCad memperkuat kekuatan komponen utama TNI dalam menjaga kedaulatan NKRI.</p>
                            </div>
                            <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
                                <div>
                                    <div style={{ fontSize: '2.5rem', color: 'var(--primary-color)', fontFamily: 'var(--font-display)' }}>3</div>
                                    <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', color: '#666' }}>Matra Utama</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', color: 'var(--primary-color)', fontFamily: 'var(--font-display)' }}>35.000+</div>
                                    <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', color: '#666' }}>Personil Aktif</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Side Feature - White Theme */}
                        <motion.div className="bento-card span-4" whileHover={{ scale: 1.01 }}>
                           <i className="fa-solid fa-shield-halved" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: 'auto' }}></i>
                           <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '0.5rem' }}>Bela Negara</h3>
                           <p style={{ color: '#555' }}>Hak dan kewajiban setiap warga negara untuk ikut serta dalam upaya pembelaan negara.</p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div className="bento-card span-4" whileHover={{ scale: 1.01 }}>
                            <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Matra Darat</div>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem' }}>Infanteri & Teritorial</h3>
                        </motion.div>

                        {/* Feature 4 */}
                        <motion.div className="bento-card span-4" whileHover={{ scale: 1.01 }}>
                             <div style={{ color: 'var(--accent-blue)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Matra Laut</div>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem' }}>Operasi Maritim</h3>
                        </motion.div>

                        {/* Feature 5 */}
                        <motion.div className="bento-card span-4" whileHover={{ scale: 1.01 }}>
                             <div style={{ color: '#00C2FF', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Matra Udara</div>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem' }}>Pertahanan Pangkalan</h3>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
