import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';

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
                    <AnimatedBackground />
                    <img src="/official-hero.png" alt="Pasukan Komponen Cadangan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '40px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2.5rem' }}
                    >
                        <img
                            src="/KEMENTERIAN-PERTAHANAN.png"
                            alt="Kemhan"
                            style={{
                                height: '56px',
                                width: '56px',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 10px 30px rgba(172, 0, 33, 0.3))'
                            }}
                        />
                        <div style={{ height: '40px', width: '2px', background: 'linear-gradient(180deg, transparent, rgba(172, 0, 33, 0.5), transparent)' }}></div>
                        <div>
                            <div style={{ fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontWeight: '500', marginBottom: '4px' }}>Republik Indonesia</div>
                            <div style={{ fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', fontWeight: '700' }}>Kementerian Pertahanan</div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                            lineHeight: 0.95,
                            textTransform: 'uppercase',
                            color: 'white',
                            marginBottom: '1.5rem',
                            maxWidth: '1200px',
                            letterSpacing: '0.05em'
                        }}
                    >
                        Komponen <br />
                        <span style={{
                            background: 'linear-gradient(135deg, var(--primary-color) 0%, #D4AF37 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Cadangan</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            maxWidth: '650px',
                            fontSize: '1.15rem',
                            color: 'rgba(255,255,255,0.75)',
                            marginBottom: '3rem',
                            lineHeight: 1.7,
                            fontWeight: '400'
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
                        <span style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>/// Arahan Resmi</span>
                    </div>

                    <div className="bento-grid">
                        {/* Large Feature */}
                        <motion.div
                            className="bento-card span-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            style={{
                                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                                borderRadius: '24px',
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '1rem', color: '#111' }}>Sishankamrata</h3>
                                <p style={{ color: '#555', maxWidth: '85%', lineHeight: '1.6', fontSize: '1.05rem' }}>
                                    Sistem Pertahanan dan Keamanan Rakyat Semesta. KomCad memperkuat kekuatan komponen utama TNI dalam menjaga kedaulatan NKRI melalui pendekatan defensif aktif.
                                </p>
                            </div>
                            <div style={{
                                position: 'absolute',
                                right: '-10%',
                                bottom: '-20%',
                                opacity: 0.03,
                                fontSize: '15rem',
                                color: 'var(--primary-color)',
                                pointerEvents: 'none'
                            }}>
                                <i className="fa-solid fa-users-viewfinder"></i>
                            </div>
                            <div style={{ marginTop: '3rem', display: 'flex', gap: '4rem', position: 'relative', zIndex: 1 }}>
                                <div>
                                    <div style={{ fontSize: '3rem', color: 'var(--primary-color)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>3</div>
                                    <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: '600', color: '#888', letterSpacing: '1px', marginTop: '0.5rem' }}>Matra Utama</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '3rem', color: 'var(--primary-color)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>35k+</div>
                                    <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: '600', color: '#888', letterSpacing: '1px', marginTop: '0.5rem' }}>Personil Aktif</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Side Feature - White Theme */}
                        <motion.div
                            className="bento-card span-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            style={{
                                background: 'white',
                                borderRadius: '24px',
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                            <i className="fa-solid fa-shield-halved" style={{ fontSize: '3rem', background: 'linear-gradient(135deg, var(--primary-color) 0%, #d62828 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 'auto', display: 'inline-block' }}></i>
                            <div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '0.75rem', color: '#111' }}>Bela Negara</h3>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>Hak dan kewajiban setiap warga negara untuk ikut serta dalam upaya pembelaan negara yang diwujudkan dalam penyelenggaraan pertahanan negara.</p>
                            </div>
                        </motion.div>

                        {/* Feature 3 - Matra Darat */}
                        <motion.div
                            className="bento-card span-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            style={{
                                background: '#fff',
                                borderRadius: '24px',
                                borderLeft: '4px solid var(--accent-gold)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <div style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem', fontWeight: '700' }}>Matra Darat</div>
                                <i className="fa-solid fa-person-rifle" style={{ color: 'rgba(0,0,0,0.2)' }}></i>
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginBottom: '1rem', color: '#111' }}>Infanteri & Teritorial</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                                Pasukan cadangan taktis yang siap dimobilisasi untuk memperkuat pertahanan darat dan menjaga stabilitas wilayah teritorial nasional.
                            </p>
                        </motion.div>

                        {/* Feature 4 - Matra Laut */}
                        <motion.div
                            className="bento-card span-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            style={{
                                background: '#fff',
                                borderRadius: '24px',
                                borderLeft: '4px solid var(--accent-blue)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <div style={{ color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem', fontWeight: '700' }}>Matra Laut</div>
                                <i className="fa-solid fa-ship" style={{ color: 'rgba(0,0,0,0.2)' }}></i>
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginBottom: '1rem', color: '#111' }}>Operasi Maritim</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                                Mendukung operasi keamanan laut, pengamanan pantai, dan pertahanan pangkalan dalam menjaga kedaulatan maritim Indonesia.
                            </p>
                        </motion.div>

                        {/* Feature 5 - Matra Udara */}
                        <motion.div
                            className="bento-card span-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            style={{
                                background: '#fff',
                                borderRadius: '24px',
                                borderLeft: '4px solid #00C2FF',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <div style={{ color: '#00C2FF', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem', fontWeight: '700' }}>Matra Udara</div>
                                <i className="fa-solid fa-jet-fighter" style={{ color: 'rgba(0,0,0,0.2)' }}></i>
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginBottom: '1rem', color: '#111' }}>Pertahanan Pangkalan</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                                Memperkuat pertahanan pangkalan udara dan mendukung operasi penerbangan dalam sistem pertahanan udara nasional.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MOTTO SECTION */}
            <section className="section-padding" style={{ background: '#F8F9FA', position: 'relative', overflow: 'hidden', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    {/* Quote Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                            borderRadius: '24px',
                            padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4rem)',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.04)',
                            border: '1px solid rgba(0, 0, 0, 0.05)',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            maxWidth: '1100px',
                            margin: '0 auto'
                        }}
                    >
                        {/* Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '-50px',
                            right: '-50px',
                            width: '200px',
                            height: '200px',
                            background: 'radial-gradient(circle, rgba(172, 0, 33, 0.05) 0%, transparent 70%)',
                            borderRadius: '50%'
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '-50px',
                            left: '-50px',
                            width: '200px',
                            height: '200px',
                            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                            borderRadius: '50%'
                        }} />

                        {/* Styled Title Component */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ marginBottom: '1.5rem' }}
                        >
                            <h3 className="section-title" style={{
                                margin: 0,
                                fontSize: '1.5rem',
                                color: '#111',
                                display: 'inline-block'
                            }}>
                                KOMPONEN <span className="highlight">CADANGAN</span>
                            </h3>
                        </motion.div>

                        {/* Main Title */}
                        <h2 style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                            fontWeight: '800',
                            color: '#000000',
                            marginBottom: '1.5rem',
                            lineHeight: '1.2',
                            letterSpacing: '-0.02em',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            Kesiapsiagaan adalah Pilihan,<br></br> Bukan Reaksi
                        </h2>

                        {/* Description */}
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                            color: '#555',
                            lineHeight: '1.8',
                            maxWidth: '900px',
                            margin: '0 auto 1.5rem',
                            fontWeight: '400',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            Dalam dunia yang makin sulit ditebak, kesiapan tidak bisa dibangun mendadak.
                            Ia perlu disiapkan, dilatih, dan dijaga, bahkan ketika keadaan sedang baik-baik saja.
                        </p>

                        {/* Italic tagline */}
                        <p style={{
                            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                            color: '#777',
                            fontStyle: 'italic',
                            fontWeight: '500',
                            margin: 0,
                            position: 'relative',
                            zIndex: 1
                        }}>
                            Komcad hadir sebagai bagian dari upaya itu.
                        </p>

                        {/* Decorative Line */}
                        <div style={{
                            width: '60px',
                            height: '4px',
                            background: 'linear-gradient(90deg, var(--primary-color), var(--accent-gold))',
                            margin: '2rem auto 0',
                            borderRadius: '2px',
                            position: 'relative',
                            zIndex: 1
                        }} />
                    </motion.div>
                </div>
            </section>

            {/* CAROUSEL SECTION */}
            <section className="section-padding" style={{ background: '#F8F9FA', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                        <h2 className="section-title" style={{ margin: 0, color: '#111' }}>Galeri <span className="highlight">Komcad</span></h2>
                        <span style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>/// Dokumentasi</span>
                    </div>

                    <CarouselGallery />
                </div>
            </section>

            {/* TESTIMONIALS SECTION - Ucap Mereka */}
            <section className="section-padding" style={{ background: '#ffffff', position: 'relative' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                        <h2 className="section-title" style={{ margin: 0, color: '#111' }}>Ucap <span className="highlight">Mereka</span></h2>
                        <span style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>/// Testimoni</span>
                    </div>

                    <TestimonialsGrid />
                </div>
            </section>
        </main>
    );
};

// Testimonials Grid Component
const TestimonialsGrid = () => {
    const [selectedTestimonial, setSelectedTestimonial] = React.useState(null);

    const testimonials = [
        {
            id: 1,
            name: 'Sari Wulandari',
            role: 'Peserta Komcad Matra Darat 2024',
            avatar: '/avatar_testimonial_1_1769031094268.png',
            shortReview: 'Pengalaman yang luar biasa! Pelatihan sangat terstruktur dan membentuk karakter saya...',
            fullReview: 'Pengalaman yang luar biasa! Pelatihan sangat terstruktur dan membentuk karakter saya menjadi lebih disiplin dan tangguh. Instruktur sangat profesional dan materi yang diberikan sangat bermanfaat untuk kehidupan sehari-hari. Saya merasa bangga bisa menjadi bagian dari Komponen Cadangan Indonesia. Semua fasilitas latihan sangat memadai dan suasana kekeluargaan antar peserta sangat kuat.'
        },
        {
            id: 2,
            name: 'Ahmad Rizki',
            role: 'Peserta Komcad Matra Laut 2024',
            avatar: '/avatar_testimonial_2_1769031110087.png',
            shortReview: 'Latihan yang menantang namun sangat mendidik. Saya belajar banyak tentang ketahanan fisik...',
            fullReview: 'Latihan yang menantang namun sangat mendidik. Saya belajar banyak tentang ketahanan fisik dan mental. Program pelatihan Komcad ini mengajarkan saya arti sebenarnya dari dedikasi untuk negara. Setiap sesi latihan dirancang dengan sangat baik, mulai dari latihan fisik, navigasi maritim, hingga survival training. Pengalaman ini membuka wawasan saya tentang pentingnya pertahanan maritim Indonesia.'
        },
        {
            id: 3,
            name: 'Dewi Kartika',
            role: 'Peserta Komcad Matra Udara 2023',
            avatar: '/avatar_testimonial_3_1769031127602.png',
            shortReview: 'Sangat membanggakan! Saya tidak menyangka akan mendapat pengalaman berharga seperti ini...',
            fullReview: 'Sangat membanggakan! Saya tidak menyangka akan mendapat pengalaman berharga seperti ini. Pelatihan Komcad membuka peluang bagi saya untuk berkontribusi langsung dalam pertahanan negara. Para instruktur sangat sabar dalam membimbing kami. Fasilitas pelatihan sangat modern dan lengkap. Saya juga mendapat banyak teman baru yang memiliki semangat yang sama untuk melayani bangsa.'
        },
        {
            id: 4,
            name: 'Budi Santoso',
            role: 'Peserta Komcad Matra Darat 2023',
            avatar: '/avatar_testimonial_4_1769031141171.png',
            shortReview: 'Program yang sangat terorganisir dengan baik. Belajar banyak tentang disiplin dan kerjasama tim...',
            fullReview: 'Program yang sangat terorganisir dengan baik. Belajar banyak tentang disiplin dan kerjasama tim. Setiap hari penuh dengan pembelajaran baru, dari taktik dasar militer hingga kepemimpinan. Yang paling berkesan adalah latihan lapangan dimana kami harus bekerja sama sebagai tim untuk menyelesaikan misi. Pengalaman ini telah mengubah cara pandang saya tentang tanggung jawab sebagai warga negara.'
        },
        {
            id: 5,
            name: 'Rina Melati',
            role: 'Peserta Komcad Matra Laut 2024',
            avatar: '/avatar_testimonial_1_1769031094268.png',
            shortReview: 'Pelatihan yang komprehensif dan aplikatif. Instruktur sangat berpengalaman...',
            fullReview: 'Pelatihan yang komprehensif dan aplikatif. Instruktur sangat berpengalaman dan selalu siap membantu. Saya mendapat kesempatan untuk belajar tentang operasi maritim, navigasi, dan berbagai teknik pertahanan laut. Fasilitas yang disediakan sangat memadai dan standar keamanan sangat ketat. Bangga bisa menjadi bagian dari pertahanan maritim Indonesia.'
        },
        {
            id: 6,
            name: 'Eko Prasetyo',
            role: 'Peserta Komcad Matra Udara 2023',
            avatar: '/avatar_testimonial_2_1769031110087.png',
            shortReview: 'Luar biasa! Mendapat kesempatan untuk belajar langsung tentang pertahanan udara...',
            fullReview: 'Luar biasa! Mendapat kesempatan untuk belajar langsung tentang pertahanan udara dan sistem keamanan pangkalan. Program pelatihan sangat detail dan terstruktur dengan baik. Kami diajarkan berbagai protokol keamanan dan prosedur operasional standar. Pengalaman ini sangat berharga dan membuat saya lebih menghargai kerja keras TNI AU dalam menjaga kedaulatan udara Indonesia.'
        },
        {
            id: 7,
            name: 'Fitri Handayani',
            role: 'Peserta Komcad Matra Darat 2024',
            avatar: '/avatar_testimonial_3_1769031127602.png',
            shortReview: 'Pengalaman tak terlupakan yang mengubah hidup saya. Setiap hari adalah pembelajaran baru...',
            fullReview: 'Pengalaman tak terlupakan yang mengubah hidup saya. Setiap hari adalah pembelajaran baru tentang ketahanan, disiplin, dan patriotisme. Para instruktur tidak hanya mengajarkan keterampilan militer, tapi juga nilai-nilai kehidupan. Latihan fisik yang keras membentuk mental saya menjadi lebih kuat. Saya sangat merekomendasikan program ini untuk siapa saja yang ingin berkontribusi untuk negara.'
        },
        {
            id: 8,
            name: 'Doni Kurniawan',
            role: 'Peserta Komcad Matra Laut 2023',
            avatar: '/avatar_testimonial_4_1769031141171.png',
            shortReview: 'Pelatihan yang menantang fisik dan mental. Membentuk karakter yang kuat dan tangguh...',
            fullReview: 'Pelatihan yang menantang fisik dan mental. Membentuk karakter yang kuat dan tangguh untuk menghadapi berbagai situasi. Program survival di laut sangat mengesankan dan mengajarkan banyak hal tentang ketahanan hidup. Fasilitas pelatihan sangat lengkap dengan peralatan modern. Bangga bisa menjadi bagian dari pertahanan laut Indonesia dan siap melayani kapan pun diperlukan.'
        }
    ];

    return (
        <>
            {/* Grid 4 columns */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
            }}>
                {testimonials.map((testimonial) => (
                    <motion.div
                        layoutId={`card-container-${testimonial.id}`}
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        onClick={() => setSelectedTestimonial(testimonial)}
                        style={{
                            background: 'white',
                            borderRadius: '16px',
                            padding: '1.5rem',
                            border: '1px solid #e5e7eb',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >
                        {/* Avatar */}
                        <motion.div
                            layoutId={`avatar-${testimonial.id}`}
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                marginBottom: '1rem',
                                border: '3px solid var(--primary-color)'
                            }}>
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </motion.div>

                        {/* Name & Role */}
                        <motion.h3
                            layoutId={`name-${testimonial.id}`}
                            style={{
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                color: '#111',
                                marginBottom: '0.25rem'
                            }}>
                            {testimonial.name}
                        </motion.h3>
                        <motion.p
                            layoutId={`role-${testimonial.id}`}
                            style={{
                                fontSize: '0.85rem',
                                color: 'var(--primary-color)',
                                marginBottom: '1rem',
                                fontWeight: '600'
                            }}>
                            {testimonial.role}
                        </motion.p>

                        {/* Review Preview */}
                        <motion.p
                            layoutId={`review-${testimonial.id}`}
                            style={{
                                fontSize: '0.95rem',
                                color: '#555',
                                lineHeight: '1.6',
                                marginBottom: '1rem'
                            }}>
                            {testimonial.shortReview}
                        </motion.p>

                        {/* Read More Link */}
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--primary-color)',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                transition: 'gap 0.3s ease'
                            }}>
                            Baca Selengkapnya <i className="fa-solid fa-arrow-right"></i>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Modal for Full Review - Animated Expansion */}
            <AnimatePresence>
                {selectedTestimonial && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedTestimonial(null)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0, 0, 0, 0.6)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                    >
                        <motion.div
                            layoutId={`card-container-${selectedTestimonial.id}`}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: 'white',
                                borderRadius: '24px',
                                padding: '3rem',
                                maxWidth: '800px',
                                width: '100%',
                                maxHeight: '85vh',
                                overflowY: 'auto',
                                position: 'relative',
                                boxShadow: '0 25px 80px rgba(0, 0, 0, 0.3)',
                                zIndex: 1001
                            }}
                        >
                            {/* Close Button */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                onClick={() => setSelectedTestimonial(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    background: '#f3f4f6',
                                    color: '#111',
                                    fontSize: '1.25rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 20
                                }}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </motion.button>

                            {/* Avatar Large */}
                            <motion.div
                                layoutId={`avatar-${selectedTestimonial.id}`}
                                style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    border: '4px solid var(--primary-color)',
                                    overflow: 'hidden',
                                    margin: '0 auto 1.5rem'
                                }}>
                                <img
                                    src={selectedTestimonial.avatar}
                                    alt={selectedTestimonial.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </motion.div>

                            {/* Name & Role */}
                            <motion.h2
                                layoutId={`name-${selectedTestimonial.id}`}
                                style={{
                                    fontSize: '2rem',
                                    fontWeight: '700',
                                    color: '#111',
                                    marginBottom: '0.5rem',
                                    textAlign: 'center'
                                }}>
                                {selectedTestimonial.name}
                            </motion.h2>
                            <motion.p
                                layoutId={`role-${selectedTestimonial.id}`}
                                style={{
                                    fontSize: '1rem',
                                    color: 'var(--primary-color)',
                                    marginBottom: '2rem',
                                    fontWeight: '600',
                                    textAlign: 'center'
                                }}>
                                {selectedTestimonial.role}
                            </motion.p>

                            {/* Decorative Line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    width: '60px',
                                    height: '4px',
                                    background: 'linear-gradient(90deg, var(--primary-color), var(--accent-gold))',
                                    margin: '0 auto 2rem',
                                    borderRadius: '2px'
                                }} />

                            {/* Full Review */}
                            <motion.div
                                layoutId={`review-${selectedTestimonial.id}`}
                                style={{
                                    marginBottom: '2rem'
                                }}
                            >
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#555',
                                    lineHeight: '1.8',
                                    textAlign: 'justify'
                                }}>
                                    "{selectedTestimonial.fullReview}"
                                </p>
                            </motion.div>

                            {/* Footer Stars */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    fontSize: '1.5rem',
                                    color: 'var(--accent-gold)'
                                }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <i key={star} className="fa-solid fa-star"></i>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

// Carousel Gallery Component
const CarouselGallery = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);

    const slides = [
        {
            image: '/carousel_training_military_1769030245776.png',
            title: 'Pelatihan Taktis',
            subtitle: 'Latihan Dasar dan Lanjutan',
            description: 'Anggota Komcad menjalani pelatihan intensif untuk meningkatkan kemampuan taktis dan kesiapan operasional.'
        },
        {
            image: '/carousel_ceremony_komcad_1769030260844.png',
            title: 'Upacara Pelantikan',
            subtitle: 'Dedikasi untuk Negara',
            description: 'Pelantikan resmi anggota Komponen Cadangan sebagai bagian dari kekuatan pertahanan nasional Indonesia.'
        },
        {
            image: '/carousel_naval_operations_1769030278889.png',
            title: 'Operasi Maritim',
            subtitle: 'Matra Laut',
            description: 'Operasi patroli dan pengamanan wilayah perairan Indonesia oleh Komcad Matra Laut.'
        },
        {
            image: '/carousel_air_defense_1769030293388.png',
            title: 'Pertahanan Udara',
            subtitle: 'Matra Udara',
            description: 'Dukungan operasional dan pertahanan pangkalan udara oleh Komcad Matra Udara.'
        }
    ];

    // Auto-play carousel
    React.useEffect(() => {
        if (!isDragging) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % slides.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isDragging, slides.length]);

    const handleDragEnd = (event, info) => {
        setIsDragging(false);
        const threshold = 50;
        if (info.offset.x > threshold && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (info.offset.x < -threshold && currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '600px', borderRadius: '24px', overflow: 'hidden' }}>
            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{
                    type: 'tween',
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{ display: 'flex', height: '100%', cursor: 'grab' }}
                whileTap={{ cursor: 'grabbing' }}
            >
                {slides.map((slide, index) => (
                    <motion.div
                        key={index}
                        style={{
                            minWidth: '100%',
                            height: '100%',
                            position: 'relative',
                            borderRadius: '24px',
                            overflow: 'hidden'
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Image */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                pointerEvents: 'none'
                            }}
                        />

                        {/* Gradient Overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                            zIndex: 1
                        }} />

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: currentIndex === index ? 1 : 0, y: currentIndex === index ? 0 : 30 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            style={{
                                position: 'absolute',
                                bottom: '3rem',
                                left: '3rem',
                                right: '3rem',
                                zIndex: 2,
                                color: 'white'
                            }}
                        >
                            <div style={{
                                display: 'inline-block',
                                padding: '0.5rem 1.25rem',
                                background: 'rgba(172, 0, 33, 0.9)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '50px',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '1rem'
                            }}>
                                {slide.subtitle}
                            </div>
                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                                marginBottom: '1rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.02em'
                            }}>
                                {slide.title}
                            </h3>
                            <p style={{
                                fontSize: '1.1rem',
                                maxWidth: '600px',
                                lineHeight: 1.6,
                                color: 'rgba(255,255,255,0.9)'
                            }}>
                                {slide.description}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Navigation Dots */}
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                right: '3rem',
                display: 'flex',
                gap: '0.75rem',
                zIndex: 10
            }}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                            width: currentIndex === index ? '40px' : '12px',
                            height: '12px',
                            borderRadius: '6px',
                            border: 'none',
                            background: currentIndex === index
                                ? 'var(--primary-color)'
                                : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                            boxShadow: currentIndex === index
                                ? '0 4px 12px rgba(172, 0, 33, 0.5)'
                                : 'none'
                        }}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
                style={{
                    position: 'absolute',
                    left: '2rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255,255,255,0.3)',
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    fontSize: '1.25rem',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = 'var(--primary-color)';
                    e.target.style.borderColor = 'var(--primary-color)';
                    e.target.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(0,0,0,0.5)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                    e.target.style.transform = 'translateY(-50%) scale(1)';
                }}
            >
                <i className="fa-solid fa-chevron-left"></i>
            </button>

            <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
                style={{
                    position: 'absolute',
                    right: '2rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255,255,255,0.3)',
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    fontSize: '1.25rem',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = 'var(--primary-color)';
                    e.target.style.borderColor = 'var(--primary-color)';
                    e.target.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(0,0,0,0.5)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                    e.target.style.transform = 'translateY(-50%) scale(1)';
                }}
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default Home;
