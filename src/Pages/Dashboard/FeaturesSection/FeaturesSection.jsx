import React from 'react';

const FeatureCard = ({ icon, title, desc, highlightColor }) => (
  <div className={`feature-card glass-panel hover-glow-${highlightColor}`}>
     <div className="fc-header">
       <div className={`fc-icon text-${highlightColor}`}>{icon}</div>
       <h3 className="fc-title">{title}</h3>
       <svg className="fc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
     </div>
     <p className="fc-desc">{desc}</p>
  </div>
);

const FeaturesSection = ({ navigate }) => (
  <>
    <section className="action-area mt-40">
      <div className="aa-left">
        <h2 className="aa-title">Master Any Subject with VLM</h2>
        <p className="aa-subtitle">Over <span className="text-cyan font-bold">500,000</span> students trust our AI & Expert Faculty.</p>
      </div>
      <div className="aa-right">
        <div className="aa-buttons-row">
          <button className="btn-outline-cyan">Try AI Doubt Solver</button>
          <button className="btn-solid-cyan" onClick={() => navigate("/startfree")}>View Subscription Plans</button>
        </div>
        <div className="aa-offer-link mt-10 text-gold">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4M8 12h8"/></svg>
          <span>Explore Parent Controls & Analytics</span>
        </div>
      </div>
    </section>

    <section className="features-grid mt-40 mb-40">
      <FeatureCard highlightColor="cyan" title="24/7 AI Tutor" desc="Instant doubt resolution. Snap a photo, send audio, or chat directly." icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>} />
      <FeatureCard highlightColor="blue" title="Live Classes" desc="Real-time interactive sessions with top faculty and whiteboards." icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>} />
      <FeatureCard highlightColor="purple" title="Video Reels" desc="Master complex topics quickly with 90-second educational reels." icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/></svg>} />
      <FeatureCard highlightColor="gold" title="Parent Dashboard" desc="Track progress, study hours, and set app usage limits." icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>} />
      <FeatureCard highlightColor="orange" title="Analytics" desc="Detailed insights into MCQ accuracy and weak subjects." icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>} />
      <FeatureCard highlightColor="green" title="Gamified" desc="Earn points, climb the leaderboard, and spin the wheel." icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>} />
    </section>
  </>
);

export default FeaturesSection;