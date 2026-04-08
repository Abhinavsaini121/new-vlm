import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Dashboard.css';

// Component Imports
import TopHeader from '../Components/TopHeader';
import HeroSection from '../Dashboard/HeroSection/HeroSection';
import FeaturesSection from '../Dashboard/FeaturesSection/FeaturesSection';
import TopTeachersSection from './TopTeachers/TopTeachers';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import CoursesSection from './CoursesSection/CoursesSection';

const BackgroundGlows = () => (
  <div className="desk-bg-glows">
    <div className="desk-orb orb-1"></div>
    <div className="desk-orb orb-2"></div>
    <div className="desk-orb orb-3"></div>
    <div className="float-star s1">✦</div><div className="float-star s2">★</div><div className="float-star s3">✦</div><div className="float-star s4">★</div>
    <svg className="desk-net-lines" viewBox="0 0 1440 900" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5">
      <circle cx="1200" cy="300" r="100" strokeDasharray="5 10"/>
      <path d="M -100 400 Q 400 200 1500 500" strokeDasharray="5 10"/>
      <path d="M -100 700 Q 600 900 1500 600" strokeDasharray="5 10"/>
      <circle cx="200" cy="600" r="2" fill="rgba(0, 229, 255, 0.5)" filter="drop-shadow(0 0 5px #00E5FF)"/>
      <circle cx="1100" cy="400" r="3" fill="rgba(154, 75, 255, 0.5)" filter="drop-shadow(0 0 5px #9A4BFF)"/>
    </svg>
  </div>
);

const MainNavigation = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const navigate = useNavigate();
  const tabs = ['Overview', 'Live Classes', 'AI Doubt Solver', 'Video Reels', 'Leaderboard', 'Parent Portal', 'Pricing Plans'];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Pricing Plans") navigate("/startfree");
  };

  return (
    <nav className="main-nav">
      {tabs.map(tab => (
        <div key={tab} className={`nav-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => handleTabClick(tab)}>
          {tab}
        </div>
      ))}
    </nav>
  );
};

export default function DesktopDashboard() {
  const navigate = useNavigate();

  return (
    <div className="desktop-layout splash-bg">
      <BackgroundGlows />
      <TopHeader navigate={navigate} />

      <main className="main-container">
        <MainNavigation />
        <HeroSection navigate={navigate} />
        <FeaturesSection navigate={navigate} />
        <CoursesSection/>
        <TopTeachersSection />
        <ContactUs />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fab-container">
         <div className="fab-label-btn glass-panel border-cyan">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>
            <span>Ask AI Tutor</span>
         </div>
         <button className="fab-circle-btn glass-panel border-cyan">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
         </button>
      </div>
    </div>
  );
}