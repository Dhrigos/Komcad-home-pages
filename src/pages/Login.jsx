import React from 'react';

const Login = () => (
    <div className="container section-padding" style={{ paddingTop: '150px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ maxWidth: '400px', width: '100%', padding: '2.5rem', border: '1px solid #e5e5e5', borderRadius: '16px', background: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '2rem' }}>Citizen Login</h2>
            <input type="email" placeholder="Email / Citizen ID" className="form-input" />
            <input type="password" placeholder="Password" className="form-input" />
            <button className="btn btn-primary" style={{ width: '100%' }}>Secure Login</button>
            <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#666', fontSize: '0.9rem' }}>New User? <a href="/register" className="highlight">Register ID</a></p>
        </div>
    </div>
);

export default Login;
