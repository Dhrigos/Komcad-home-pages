import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Sample news data
const newsData = {
    1: {
        id: 1,
        category: 'Kegiatan',
        date: '2 Jan 2026',
        title: 'Pelatihan Cyber Defense Angkatan 1',
        excerpt: 'Generasi muda diajak untuk memahami pentingnya keamanan data dan infrastruktur digital negara...',
        image: '/official-hero.png',
        readTime: '5 menit',
        author: 'Tim Redaksi KomCad',
        content: `
            <p>Kementerian Pertahanan Republik Indonesia melalui Badan Cadangan Nasional (Bacadnas) menyelenggarakan Pelatihan Cyber Defense Angkatan 1 yang diikuti oleh 150 peserta dari berbagai daerah di Indonesia.</p>
            
            <h3>Tujuan Pelatihan</h3>
            <p>Pelatihan ini bertujuan untuk meningkatkan kapasitas dan kemampuan anggota Komponen Cadangan dalam menghadapi ancaman siber yang semakin kompleks. Peserta akan dibekali dengan pengetahuan tentang keamanan siber, deteksi ancaman, dan respons insiden.</p>
            
            <h3>Materi Pelatihan</h3>
            <ul>
                <li>Dasar-dasar Keamanan Siber</li>
                <li>Analisis Ancaman dan Kerentanan</li>
                <li>Teknik Penetrasi dan Ethical Hacking</li>
                <li>Manajemen Insiden Keamanan</li>
                <li>Kriptografi dan Keamanan Data</li>
            </ul>
            
            <h3>Narasumber</h3>
            <p>Pelatihan ini menghadirkan narasumber dari berbagai institusi terkait, termasuk Badan Siber dan Sandi Negara (BSSN), TNI, dan praktisi keamanan siber dari industri.</p>
            
            <p>Dengan adanya pelatihan ini, diharapkan anggota Komponen Cadangan dapat berkontribusi dalam menjaga keamanan infrastruktur digital negara dan meningkatkan ketahanan siber nasional.</p>
        `
    },
    2: {
        id: 2,
        category: 'Kegiatan',
        date: '2 Jan 2026',
        title: 'Pelatihan Cyber Defense Angkatan 2',
        excerpt: 'Generasi muda diajak untuk memahami pentingnya keamanan data dan infrastruktur digital negara...',
        image: '/official-hero.png',
        readTime: '4 menit',
        author: 'Tim Redaksi KomCad',
        content: `
            <p>Melanjutkan kesuksesan Angkatan 1, Pelatihan Cyber Defense Angkatan 2 kembali diselenggarakan dengan peserta yang lebih banyak dan materi yang lebih mendalam.</p>
            
            <h3>Peningkatan Kapasitas</h3>
            <p>Angkatan kedua ini fokus pada peningkatan kapasitas praktis dengan simulasi serangan siber dan latihan respons insiden secara real-time.</p>
            
            <h3>Sertifikasi Internasional</h3>
            <p>Peserta yang lulus akan mendapatkan sertifikasi yang diakui secara internasional, membuka peluang karir di bidang keamanan siber.</p>
            
            <p>Program ini merupakan bagian dari komitmen pemerintah dalam membangun ekosistem keamanan siber yang tangguh di Indonesia.</p>
        `
    },
    3: {
        id: 3,
        category: 'Kegiatan',
        date: '2 Jan 2026',
        title: 'Pelatihan Cyber Defense Angkatan 3',
        excerpt: 'Generasi muda diajak untuk memahami pentingnya keamanan data dan infrastruktur digital negara...',
        image: '/official-hero.png',
        readTime: '6 menit',
        author: 'Tim Redaksi KomCad',
        content: `
            <p>Pelatihan Cyber Defense Angkatan 3 menandai ekspansi program ke seluruh wilayah Indonesia dengan membuka kelas regional di berbagai provinsi.</p>
            
            <h3>Jangkauan Nasional</h3>
            <p>Dengan membuka kelas di 10 provinsi, program ini memastikan akses yang lebih merata bagi seluruh anggota Komponen Cadangan di Indonesia.</p>
            
            <h3>Kolaborasi Industri</h3>
            <p>Angkatan ketiga ini juga menjalin kerjasama dengan perusahaan teknologi terkemuka untuk memberikan pengalaman praktis langsung dari industri.</p>
            
            <p>Melalui program ini, Indonesia terus memperkuat pertahanan sibernya dengan melibatkan generasi muda yang kompeten dan terlatih.</p>
        `
    }
};

const NewsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const news = newsData[id];

    if (!news) {
        return (
            <div className="container section-padding" style={{ paddingTop: '120px', minHeight: '80vh', textAlign: 'center' }}>
                <h1>Berita Tidak Ditemukan</h1>
                <Link to="/news" className="btn btn-primary" style={{ marginTop: '2rem' }}>Kembali ke Berita</Link>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: '120px', minHeight: '80vh' }}>
            {/* Back Button */}
            <div className="container" style={{ marginBottom: '2rem' }}>
                <motion.button
                    onClick={() => navigate('/news')}
                    whileHover={{ x: -5 }}
                    style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '50px',
                        padding: '0.75rem 1.5rem',
                        color: 'white',
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--primary-color)';
                        e.currentTarget.style.borderColor = 'var(--primary-color)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                >
                    <i className="fa-solid fa-arrow-left"></i> Kembali ke Berita
                </motion.button>
            </div>

            {/* Featured Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                    width: '100%',
                    height: '500px',
                    position: 'relative',
                    marginBottom: '3rem',
                    overflow: 'hidden'
                }}
            >
                <img
                    src={news.image}
                    alt={news.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)'
                }} />

                {/* Category Badge on Image */}
                <div style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '0.6rem 1.5rem',
                    background: 'rgba(172, 0, 33, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'white'
                }}>
                    {news.category}
                </div>
            </motion.div>

            {/* Article Content */}
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ maxWidth: '900px', margin: '0 auto' }}
                >
                    {/* Meta Info */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                        marginBottom: '2rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        flexWrap: 'wrap'
                    }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <i className="fa-regular fa-calendar"></i>
                            {news.date}
                        </span>
                        <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <i className="fa-regular fa-clock"></i>
                            {news.readTime}
                        </span>
                        <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <i className="fa-regular fa-user"></i>
                            {news.author}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        marginBottom: '2rem',
                        lineHeight: '1.2',
                        color: 'white',
                        fontWeight: '800'
                    }}>
                        {news.title}
                    </h1>

                    {/* Excerpt */}
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        color: 'rgba(255,255,255,0.8)',
                        marginBottom: '3rem',
                        padding: '1.5rem',
                        background: 'linear-gradient(135deg, rgba(172, 0, 33, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%)',
                        borderLeft: '4px solid var(--primary-color)',
                        borderRadius: '0 12px 12px 0'
                    }}>
                        {news.excerpt}
                    </p>

                    {/* Article Content */}
                    <div
                        style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.9',
                            color: 'var(--text-muted)'
                        }}
                        className="article-content"
                        dangerouslySetInnerHTML={{ __html: news.content }}
                    />

                    {/* Share Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        style={{
                            marginTop: '4rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '1.5rem'
                        }}
                    >
                        <div>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginRight: '1rem' }}>Bagikan artikel ini:</span>
                            <div style={{ display: 'inline-flex', gap: '0.75rem' }}>
                                {['facebook-f', 'twitter', 'linkedin-in', 'whatsapp'].map((icon) => (
                                    <motion.a
                                        key={icon}
                                        href="#"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        style={{
                                            width: '45px',
                                            height: '45px',
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            transition: 'all 0.3s'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'var(--primary-color)';
                                            e.currentTarget.style.borderColor = 'var(--primary-color)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                        }}
                                    >
                                        <i className={`fa-brands fa-${icon}`}></i>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Back to News Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        style={{ marginTop: '5rem', textAlign: 'center', paddingBottom: '3rem' }}
                    >
                        <Link to="/news">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary"
                                style={{ padding: '1rem 2.5rem' }}
                            >
                                <i className="fa-solid fa-newspaper" style={{ marginRight: '0.5rem' }}></i>
                                Lihat Berita Lainnya
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default NewsDetail;
