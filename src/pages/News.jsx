import React from 'react';

const News = () => (
    <div className="container section-padding" style={{ paddingTop: '150px', minHeight: '80vh' }}>
        <h1 className="section-title glitch-effect">Mission <span className="highlight">Briefings</span></h1>
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {[1, 2, 3].map(i => (
                <div key={i} style={{ 
                    padding: '2rem', 
                    background: 'rgba(20, 20, 20, 0.6)', 
                    borderRadius: '16px', 
                    border: '1px solid var(--border-color)', 
                    backdropFilter: 'blur(5px)'
                }}>
                    <div style={{ height: '200px', background: 'rgba(255, 255, 255, 0.05)', marginBottom: '1rem', borderRadius: '8px' }}></div>
                    <h3 style={{ marginBottom: '0.5rem', color: 'white' }}>Intel Update 2026.0{i}</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Latest directives on cyber-defense protocols and skill acquisition...</p>
                    <button className="btn btn-outline small">Decrypt Data</button>
                </div>
            ))}
        </div>
    </div>
);

export default News;
