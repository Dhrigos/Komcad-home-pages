import React from 'react';

const News = () => (
    <div className="container section-padding" style={{ paddingTop: '120px', minHeight: '80vh' }}>
        <h1 className="section-title">Berita <span className="highlight">Terkini</span></h1>
        <p className="section-subtitle" style={{ marginBottom: '3rem' }}>Update terbaru seputar kegiatan dan perkembangan Komponen Cadangan.</p>
        
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {[1, 2, 3].map(i => (
                <div key={i} className="impact-card" style={{ textAlign: 'left', padding: '0', overflow: 'hidden' }}>
                    <div style={{ height: '200px', background: '#E2E8F0', width: '100%' }}></div>
                    <div style={{ padding: '2rem' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: '700', textTransform: 'uppercase' }}>Kegiatan • 2 Jan 2026</span>
                        <h3 style={{ margin: '0.5rem 0 1rem', fontSize: '1.25rem', color: 'var(--secondary-color)' }}>Pelatihan Cyber Defense Angkatan {i}</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                            Generasi muda diajak untuk memahami pentingnya keamanan data dan infrastruktur digital negara...
                        </p>
                        <a href="#" style={{ color: 'var(--primary-color)', fontWeight: '600', fontSize: '0.9rem' }}>Baca Selengkapnya <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8rem', marginLeft: '5px' }}></i></a>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default News;
