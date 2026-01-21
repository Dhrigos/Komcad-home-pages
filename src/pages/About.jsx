import React from 'react';

const About = () => (
    <div className="container section-padding" style={{ paddingTop: '120px', minHeight: '80vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
                <span className="tag" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Tentang Kami</span>
                <h1 className="section-title">Wadah Generasi <span className="highlight">Unggul</span></h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                    Komponen Cadangan (KomCad) bukan sekadar pelatihan militer. Kami adalah ekosistem bagi pemuda Indonesia untuk mengembangkan 
                    <strong style={{ color: 'var(--secondary-color)' }}> soft skills</strong>, 
                    <strong style={{ color: 'var(--secondary-color)' }}> kepemimpinan</strong>, dan 
                    <strong style={{ color: 'var(--secondary-color)' }}> jaringan profesional</strong>.
                </p>
                
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <li style={{ display: 'flex', gap: '1rem' }}>
                        <div className="icon-wrapper icon-blue" style={{ width: '50px', height: '50px', fontSize: '1.2rem', margin: 0, flexShrink: 0 }}>
                            <i className="fa-solid fa-rocket"></i>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--secondary-color)', fontWeight: '700', marginBottom: '0.2rem' }}>Akeselerasi Karir</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Sertifikasi resmi dan pengalaman organisasi.</p>
                        </div>
                    </li>
                    <li style={{ display: 'flex', gap: '1rem' }}>
                        <div className="icon-wrapper icon-green" style={{ width: '50px', height: '50px', fontSize: '1.2rem', margin: 0, flexShrink: 0 }}>
                            <i className="fa-solid fa-users"></i>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--secondary-color)', fontWeight: '700', marginBottom: '0.2rem' }}>Jaringan Nasional</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Berteman dengan pemuda hebat dari Sabang sampai Merauke.</p>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div style={{ position: 'relative' }}>
                <div style={{ 
                    background: '#E2E8F0', 
                    borderRadius: '24px', 
                    height: '500px', 
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Placeholder for About Image */}
                    <div style={{ 
                        position: 'absolute', 
                        bottom: '2rem', 
                        left: '2rem', 
                        right: '2rem',
                        background: 'white',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary-color)' }}>25k+</span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.2' }}>Anggota Aktif<br/>di Seluruh Indonesia</span>
                        </div>
                        <div style={{ height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: '85%', height: '100%', background: 'var(--primary-color)' }}></div>
                        </div>
                    </div>
                </div>
                {/* Decoration */}
                <div style={{ 
                    position: 'absolute', 
                    top: '-20px', 
                    right: '-20px', 
                    width: '100px', 
                    height: '100px', 
                    background: 'var(--accent-yellow)', 
                    borderRadius: '50%', 
                    zIndex: -1,
                    opacity: 0.5 
                }}></div>
            </div>
        </div>
    </div>
);

export default About;
