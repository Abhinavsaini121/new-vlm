import React from 'react';

const VlmShieldLogo = () => (
  <svg viewBox="0 0 100 100" width="36" height="36" fill="none">
    <defs>
      <linearGradient id="gold-grad-desk" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF5C3" /><stop offset="50%" stopColor="#D4AF37" /><stop offset="100%" stopColor="#AA7A00" />
      </linearGradient>
    </defs>
    <path d="M 25 75 C 5 50 15 20 30 15" stroke="url(#gold-grad-desk)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 20 65 Q 25 55 20 45" fill="url(#gold-grad-desk)"/>
    <path d="M 17 50 Q 22 40 17 30" fill="url(#gold-grad-desk)"/>
    <path d="M 22 35 Q 27 25 22 15" fill="url(#gold-grad-desk)"/>
    <path d="M 75 75 C 95 50 85 20 70 15" stroke="url(#gold-grad-desk)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 80 65 Q 75 55 80 45" fill="url(#gold-grad-desk)"/>
    <path d="M 83 50 Q 78 40 83 30" fill="url(#gold-grad-desk)"/>
    <path d="M 78 35 Q 73 25 78 15" fill="url(#gold-grad-desk)"/>
    <path d="M 35 15 L 50 25 L 65 15 L 65 50 C 65 70 50 85 50 85 C 50 85 35 70 35 50 Z" fill="#152042" stroke="url(#gold-grad-desk)" strokeWidth="3"/>
    <path d="M 42 45 Q 46 40 50 45 Q 54 40 58 45 L 58 55 Q 54 58 50 55 Q 46 58 42 55 Z" fill="url(#gold-grad-desk)"/>
    <line x1="50" y1="45" x2="50" y2="55" stroke="#152042" strokeWidth="1.5"/>
    <path d="M 50 30 Q 54 35 50 40 Q 46 35 50 30" fill="url(#gold-grad-desk)"/>
  </svg>
);

const TopHeader = ({ navigate }) => (
  <header className="desk-header glass-panel">
    <div className="header-left">
      <div className="logo-section">
        <VlmShieldLogo />
        <span className="brand-text">VLM Academy</span>
        <div className="role-badge">STUDENT</div>
      </div>
    </div>

    <div className="header-center">
      <div className="search-bar glass-input-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="Search live classes, short videos, or AI topics..." />
      </div>
    </div>

    <div className="header-right">
      <div className="contact-info">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 2.6 3.41l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <div className="ci-texts">
          <span className="ci-lbl">Teacher Support</span>
          <span className="ci-num">+91-8000-VLM-EDU</span>
        </div>
      </div>
      
      <div className="gift-icon" title="Refer & Earn">
        <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
      </div>

      <button className="btn-outline" onClick={() => navigate("/login")}>Log in</button>
      <button className="btn-solid-cyan" onClick={() => navigate("/Joinfree")}>Join for free</button>
    </div>
  </header>
);

export default TopHeader;