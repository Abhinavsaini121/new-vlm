import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-wrapper mt-40 mb-40">
      {/* Header Area */}
      <div className="contact-header">
        <h2 className="aa-title">Mission Control Support</h2>
        <p className="aa-subtitle">Have questions? Reach out to our expert faculty and support team.</p>
      </div>

      <div className="contact-grid mt-30">
        
        {/* Left Side: Contact Info Cards */}
        <div className="contact-info-column">
          <div className="info-glass-card glass-panel hover-glow-cyan">
            <div className="info-icon-box text-cyan">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 2.6 3.41l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div className="info-details">
              <h4>Call Center</h4>
              <p>+91-8000-VLM-EDU</p>
            </div>
          </div>

          <div className="info-glass-card glass-panel hover-glow-purple">
            <div className="info-icon-box text-purple">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div className="info-details">
              <h4>Email Transmission</h4>
              <p>support@vlmacademy.com</p>
            </div>
          </div>

          <div className="info-glass-card glass-panel hover-glow-gold">
            <div className="info-icon-box text-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="info-details">
              <h4>Academy HQ</h4>
              <p>Digital Plaza, Sector 12, India</p>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="contact-form-card glass-panel purple-glow-border">
          <form className="vlm-form">
            <div className="vlm-form-row">
              <div className="vlm-input-group">
                <label>Student Name</label>
                <div className="glass-input-box">
                  <input type="text" placeholder="Enter your full name" />
                </div>
              </div>
              <div className="vlm-input-group">
                <label>Email Address</label>
                <div className="glass-input-box">
                  <input type="email" placeholder="example@vlm.com" />
                </div>
              </div>
            </div>

            <div className="vlm-input-group mt-20">
              <label>Select Department</label>
              <div className="glass-input-box">
                <select className="vlm-select">
                  <option>General Inquiry</option>
                  <option>AI Course Support</option>
                  <option>Parent Portal Help</option>
                  <option>Technical Issue</option>
                </select>
              </div>
            </div>

            <div className="vlm-input-group mt-20">
              <label>Your Message</label>
              <div className="glass-input-box">
                <textarea rows="4" placeholder="How can we help you today?"></textarea>
              </div>
            </div>

            <button type="submit" className="btn-solid-cyan mt-30 w-full-btn">
              Transmit Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;