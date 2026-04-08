import React from 'react';
import './Footer.css';

const VlmShieldLogo = () => (
  <svg viewBox="0 0 100 100" width="30" height="30" fill="none">
    <defs>
      <linearGradient id="gold-grad-footer" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF5C3" /><stop offset="50%" stopColor="#D4AF37" /><stop offset="100%" stopColor="#AA7A00" />
      </linearGradient>
    </defs>
    <path d="M 35 15 L 50 25 L 65 15 L 65 50 C 65 70 50 85 50 85 C 50 85 35 70 35 50 Z" fill="#152042" stroke="url(#gold-grad-footer)" strokeWidth="3"/>
    <path d="M 42 45 Q 46 40 50 45 Q 54 40 58 45 L 58 55 Q 54 58 50 55 Q 46 58 42 55 Z" fill="url(#gold-grad-footer)"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="vlm-footer">
      <div className="main-container">
        <div className="footer-top-grid">
          
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <VlmShieldLogo />
              <span className="brand-text">VLM Academy</span>
            </div>
            <p className="brand-desc">
              VLM Academy is democratising education, making it accessible to all. 
              Join the revolution, learn on India's most advanced AI-powered learning platform.
            </p>
            <div className="app-buttons">
              <div className="store-btn glass-panel">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
              </div>
              <div className="store-btn glass-panel">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" />
              </div>
            </div>
            
            <div className="reach-out mt-40">
              <h4 className="footer-heading">Reach out to us</h4>
              <p>Get your questions answered about learning with VLM.</p>
              <div className="footer-call text-cyan">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 2.6 3.41l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>Call +91 80000 00000</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-grid">
            <div className="link-group">
              <h4 className="footer-heading">Company</h4>
              <ul>
                <li>About Us</li>
                <li>VLM Shikshodaya</li>
                <li>Careers</li>
                <li>Blogs</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>

            <div className="link-group">
              <h4 className="footer-heading">Help & Support</h4>
              <ul>
                <li>User Guidelines</li>
                <li>Site Map</li>
                <li>Refund Policy</li>
                <li>Takedown Policy</li>
                <li>Grievance Redressal</li>
              </ul>

              <h4 className="footer-heading mt-30">Popular Goals</h4>
              <ul>
                <li>IIT JEE</li>
                <li>UPSC</li>
                <li>SSC</li>
                <li>AI Foundation</li>
                <li>NEET UG</li>
              </ul>
            </div>

            <div className="link-group">
              <h4 className="footer-heading">Our Apps</h4>
              <div className="app-link-item">
                <div className="app-icon-small bg-blue"><svg viewBox="0 0 24 24" fill="white"><path d="M12 2L1 21h22L12 2z"/></svg></div>
                <span>Learner App</span>
              </div>
              <div className="app-link-item">
                <div className="app-icon-small bg-purple"><svg viewBox="0 0 24 24" fill="white"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>
                <span>Educator App</span>
              </div>
              <div className="app-link-item">
                <div className="app-icon-small bg-cyan"><svg viewBox="0 0 24 24" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
                <span>Parent App</span>
              </div>

              <h4 className="footer-heading mt-30">Study Material</h4>
              <ul>
                <li>UPSC Study Material</li>
                <li>NEET UG Material</li>
                <li>CA Foundation</li>
                <li>JEE Study Material</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copy-text">© 2026 VLM Learning Technologies Pvt Ltd</div>
          <div className="social-links">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;