import React from 'react';

const Contact = () => (
    <div className="container section-padding" style={{ paddingTop: '150px', minHeight: '80vh' }}>
         <h1 className="section-title">Citizen <span className="highlight">Support</span></h1>
         <div style={{ maxWidth: '600px', background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
            <input type="text" placeholder="Enter your full name" className="form-input" />
            
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
            <input type="email" placeholder="name@email.com" className="form-input" />
            
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Inquiry</label>
            <textarea placeholder="How can we help you?" className="form-input" style={{ height: '150px' }}></textarea>
            
            <button className="btn btn-primary" style={{ width: '100%' }}>Submit Inquiry</button>
         </div>
    </div>
);

export default Contact;
