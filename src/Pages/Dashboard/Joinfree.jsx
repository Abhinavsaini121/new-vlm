import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Joinfree = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  return (
    <div className="join-page-wrapper">
      {/* Background Decorative Glows (Dashboard Style) */}
      <div className="bg-glow-purple"></div>
      <div className="bg-glow-cyan"></div>

      {/* Main Modal Container */}
      <div className="join-card">
        {/* Close Button */}
        <button className="close-btn" onClick={() => navigate(-1)}>✕</button>

        <div className="content-box">
          <h1 className="join-title">Join VLM Academy</h1>
          <p className="login-subtext">
            or <span className="highlight-link">login to your account</span>
          </p>

          {/* Phone Input Group */}
          <div className="input-container">
            <div className="country-selector">
              <img 
                src="https://flagcdn.com/w20/in.png" 
                alt="India" 
                className="flag-icon"
              />
              <span className="country-code">+91</span>
              <span className="arrow-down">▾</span>
            </div>
            <input 
              type="tel" 
              placeholder="Enter your mobile number" 
              className="phone-input"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {/* Continue Button (Dashboard Gradient Style) */}
          <button className={`continue-btn ${phoneNumber.length >= 10 ? 'active' : ''}`}>
            Continue
          </button>
        </div>

        {/* Footer Legal Text */}
        <p className="legal-text">
          By signing up, you agree to <span className="legal-link">Terms & Conditions</span> and <span className="legal-link">Privacy Policy</span>
        </p>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .join-page-wrapper {
          background-color: #05061b; /* Dashboard Dark */
          min-height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        /* Dashboard Glows */
        .bg-glow-purple { position: absolute; top: -10%; left: -10%; width: 500px; height: 500px; background: rgba(139, 92, 246, 0.15); filter: blur(120px); border-radius: 50%; }
        .bg-glow-cyan { position: absolute; bottom: -10%; right: -10%; width: 500px; height: 500px; background: rgba(6, 182, 212, 0.15); filter: blur(120px); border-radius: 50%; }

        .join-card {
          width: 100%;
          max-width: 480px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 40px;
          position: relative;
          z-index: 10;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          min-height: 500px;
        }

        .close-btn {
          position: absolute;
          top: 25px;
          left: 25px;
          background: transparent;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
          opacity: 0.5;
          transition: 0.3s;
        }
        .close-btn:hover { opacity: 1; transform: rotate(90deg); }

        .content-box { flex: 1; margin-top: 40px; }

        .join-title {
          font-size: 32px;
          font-weight: 800;
          color: white;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }

        .login-subtext {
          color: rgba(255, 255, 255, 0.6);
          font-size: 16px;
          margin-bottom: 40px;
        }

        .highlight-link {
          color: #00e5ff; /* Cyan from Dashboard */
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline dotted;
          text-underline-offset: 4px;
        }

        .input-container {
          display: flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.2);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 5px 15px;
          margin-bottom: 25px;
          transition: 0.3s;
        }
        .input-container:focus-within {
          border-color: #00e5ff;
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.2);
        }

        .country-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-right: 15px;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
        }

        .flag-icon { width: 22px; border-radius: 2px; }
        .country-code { color: white; font-weight: 600; font-size: 15px; }
        .arrow-down { color: rgba(255, 255, 255, 0.4); font-size: 12px; }

        .phone-input {
          flex: 1;
          background: transparent;
          border: none;
          color: white;
          padding: 15px;
          font-size: 16px;
          outline: none;
        }
        .phone-input::placeholder { color: rgba(255, 255, 255, 0.3); }

        .continue-btn {
          width: 100%;
          padding: 18px;
          border-radius: 14px;
          border: none;
          background: rgba(255, 255, 255, 0.05); /* Disabled state */
          color: rgba(255, 255, 255, 0.3);
          font-size: 16px;
          font-weight: 700;
          cursor: not-allowed;
          transition: 0.4s;
        }

        .continue-btn.active {
          background: linear-gradient(90deg, #00e5ff, #0081ff); /* Dashboard Cyan-Blue Gradient */
          color: white;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(0, 129, 255, 0.3);
        }
        .continue-btn.active:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        .legal-text {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.6;
          margin-top: 20px;
        }

        .legal-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: underline;
          cursor: pointer;
        }

        /* Mobile Adjustments */
        @media (max-width: 500px) {
          .join-card { margin: 15px; padding: 30px; border-radius: 24px; }
          .join-title { font-size: 26px; }
        }
      `}</style>
    </div>
  );
};

export default Joinfree;