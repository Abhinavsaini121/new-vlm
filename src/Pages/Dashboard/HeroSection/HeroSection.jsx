import React from 'react';

const HeroSection = ({ navigate }) => (
  <section className="hero-banner glass-panel purple-glow-border mt-30">
    <div className="hb-left">
      <h1 className="hb-title">Unlock Limitless Learning with VLM Academy!</h1>
      <div className="hb-pricing mt-20">
        <div className="hb-price-line">AI + Live Classes at just <span className="text-cyan">₹999/mo</span></div>
        <div className="hb-price-line">Premium Family Plan at <span className="text-gold">₹4,999/mo</span></div>
      </div>
      <div className="hb-actions mt-30">
        <button className="btn-solid-purple" onClick={() => navigate("/startfree")}>Start 3-Day Free Trial</button>
        <div className="hb-code-box">
          <span className="code-lbl">Use code</span>
          <span className="code-val">VLM2026</span>
        </div>
        <div className="hb-validity">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Offer valid till <strong className="text-purple">Midnight</strong>
        </div>
      </div>
      <div className="hb-terms mt-20">*Applies to all new student & parent registrations.</div>
    </div>
    
    <div className="hb-right">
      <div className="hero-graphic">
        <div className="hg-text">AI</div>
        <div className="hg-sub">TUTOR</div>
        <svg className="hg-rings" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#00E5FF" strokeWidth="2" strokeDasharray="10 15" className="spin-slow" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#9A4BFF" strokeWidth="4" strokeDasharray="20 40" className="spin-fast-reverse" />
        </svg>
      </div>
    </div>
  </section>
);

export default HeroSection;