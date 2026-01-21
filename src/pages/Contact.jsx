import React from 'react';

const Contact = () => (
    <div className="container section-padding" style={{ paddingTop: '120px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <div style={{ width: '100%', maxWidth: '1000px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
                <span className="tag" style={{ marginBottom: '1rem', display: 'inline-flex', background: '#E6F4F1', color: 'var(--accent-green)' }}>
                    <i className="fa-solid fa-headset" style={{ color: 'var(--accent-green)' }}></i> Bantuan
                </span>
                <h1 className="section-title">Hubungi <span className="highlight">Kami</span></h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Punya pertanyaan seputar pendaftaran atau kegiatan? Tim kami siap membantu kamu.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div style={{ width: '40px', height: '40px', background: '#FEF2F2', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                            <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email</span>
                            <strong style={{ color: 'var(--secondary-color)' }}>info@komcad.bacadnas.com</strong>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                         <div style={{ width: '40px', height: '40px', background: '#EFF6FF', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)' }}>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                            <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Kantor Pusat</span>
                            <strong style={{ color: 'var(--secondary-color)' }}>Kementerian Pertahanan RI, Jakarta</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ 
                background: 'white', 
                padding: '2.5rem', 
                borderRadius: '24px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                border: '1px solid #F1F5F9'
            }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Nama Lengkap</label>
                <input type="text" placeholder="Masukkan nama kamu" style={{ 
                    width: '100%', padding: '1rem', borderRadius: '12px', border: '2px solid #F1F5F9', marginBottom: '1.5rem', outline: 'none', transition: 'all 0.3s' 
                }} />
                
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Email</label>
                <input type="email" placeholder="nama@email.com" style={{ 
                    width: '100%', padding: '1rem', borderRadius: '12px', border: '2px solid #F1F5F9', marginBottom: '1.5rem', outline: 'none', transition: 'all 0.3s' 
                }} />
                
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--secondary-color)' }}>Pesan</label>
                <textarea placeholder="Apa yang ingin ditanyakan?" style={{ 
                    width: '100%', padding: '1rem', borderRadius: '12px', border: '2px solid #F1F5F9', marginBottom: '2rem', outline: 'none', minHeight: '120px', fontFamily: 'inherit' 
                }}></textarea>
                
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Kirim Pesan</button>
            </div>
         </div>
    </div>
);

export default Contact;
