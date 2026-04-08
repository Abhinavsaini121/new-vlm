import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Startfree = () => {
    const navigate = useNavigate();
  const plans = [
    {
      name: "Basic Plan",
      oldPrice: "₹1999/mo",
      price: "₹999/mo",
      color: "#00e5ff",
      shadow: "rgba(0, 229, 255, 0.3)",
      features: ["100 AI credits", "5 human chat credits", "60 audio/video minutes", "1 Live class access"]
    },
    {
      name: "Pro Plan",
      oldPrice: "₹4999/mo",
      price: "₹2499/mo",
      color: "#3d5afe",
      shadow: "rgba(61, 90, 254, 0.3)",
      features: ["1000 AI credits", "50 human chat credits", "600 audio/video minutes", "10 Live class access"]
    },
    {
      name: "Premium Plan",
      oldPrice: "₹9999/mo",
      price: "₹4999/mo",
      recommended: true,
      color: "#ffab00",
      shadow: "rgba(255, 171, 0, 0.4)",
      features: ["Unlimited AI credits", "500 human chat credits", "Unlimited audio/video minutes", "Unlimited Live class access"]
    }
  ];

  return (
    <div className="vlm-wrapper">
      {/* Background Decorative Glows */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      {/* Header Section */}
      <header className="vlm-header">
    <div className="back-button" onClick={() => navigate(-1)}>
  <ArrowLeft size={22} />
</div>
        <div className="logo-box">
          <div className="v-icon">V</div>
          <span className="brand-name">VLM ACADEMY</span>
        </div>
        <div style={{ width: '40px' }}></div>
      </header>

      {/* Content Section */}
      <main className="vlm-content">
        <h1 className="title">Choose Your Learning Plan</h1>
        
        <div className="plans-container">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className="plan-card" 
              style={{ 
                borderColor: plan.color, 
                boxShadow: `0 0 25px ${plan.shadow}` 
              }}
            >
              {plan.recommended && <div className="recommended-badge">RECOMMENDED</div>}
              
              <h2 className="plan-title">{plan.name}</h2>
              
              <div className="price-tag">
                <span className="strikethrough">{plan.oldPrice}</span>
                <p className="discount-text">Discount price</p>
                <h3 className="final-price" style={{ color: plan.color }}>{plan.price}</h3>
                <div className="trial-button">3 Days Free Trial</div>
              </div>

              <ul className="features-list">
                {plan.features.map((feat, index) => (
                  <li key={index} className="feature-item">
                    <span className="icon" style={{ color: plan.color }}>✦</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="vlm-footer">
        <p className="activate-text">Activate trial for <b>₹1</b></p>
        <button className="main-cta">START 3-DAY TRIAL</button>
      </footer>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .vlm-wrapper {
          background: radial-gradient(circle at 20% 20%, #0f172a, #020617 70%);
          min-height: 100vh;
          width: 100%;
          color: white;
          font-family: 'Inter', -apple-system, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow-x: hidden;
          padding: 20px;
        }

        /* Background Effects */
        .bg-glow-1 { position: absolute; top: -100px; left: -100px; width: 400px; height: 400px; background: rgba(88, 28, 135, 0.2); filter: blur(100px); border-radius: 50%; pointer-events: none; }
        .bg-glow-2 { position: absolute; bottom: 50px; right: -50px; width: 350px; height: 350px; background: rgba(30, 58, 138, 0.15); filter: blur(100px); border-radius: 50%; pointer-events: none; }

        .vlm-header { width: 100%; max-width: 1200px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; z-index: 10; }
        .back-arrow { font-size: 32px; cursor: pointer; opacity: 0.6; padding: 0 10px; }
        .logo-box { text-align: center; }
        .v-icon { 
          width: 44px; height: 44px; background: linear-gradient(145deg, #eab308, #fde047); 
          border-radius: 50%; color: black; font-weight: 900; font-size: 22px; 
          display: flex; align-items: center; justify-content: center; margin: 0 auto 8px;
          box-shadow: 0 0 15px rgba(234, 179, 8, 0.4);
        }
        .brand-name { font-size: 11px; letter-spacing: 3px; font-weight: 800; opacity: 0.9; }

        .vlm-content { width: 100%; flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 10; }
        .title { font-size: 26px; font-weight: 700; margin-bottom: 50px; text-align: center; }

        .plans-container {
          display: flex;
          gap: 25px;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
          max-width: 1100px;
          padding: 20px 0 60px;
        }

        .plan-card {
          width: 300px;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid;
          border-radius: 35px;
          padding: 40px 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          transition: transform 0.3s ease;
        }
        .plan-card:hover { transform: translateY(-5px); }

        .recommended-badge {
          position: absolute;
          top: -14px;
          background: #ffab00;
          color: black;
          font-size: 10px;
          font-weight: 900;
          padding: 6px 14px;
          border-radius: 8px;
          letter-spacing: 0.5px;
        }

        .plan-title { font-size: 22px; font-weight: 800; margin-bottom: 25px; }
        .price-tag { text-align: center; margin-bottom: 30px; }
        .strikethrough { text-decoration: line-through; opacity: 0.4; font-size: 14px; }
        .discount-text { font-size: 11px; opacity: 0.5; margin: 4px 0; }
        .final-price { font-size: 38px; font-weight: 900; margin-bottom: 18px; }
        .trial-button { 
          background: #facc15; color: black; font-size: 11px; font-weight: 800; 
          padding: 8px 20px; border-radius: 25px; display: inline-block;
        }

        .features-list { width: 100%; list-style: none; border-top: 1px solid rgba(255,255,255,0.1); paddingTop: 25px; }
        .feature-item { display: flex; align-items: center; margin-bottom: 18px; font-size: 14px; font-weight: 500; color: #e2e8f0; }
        .icon { margin-right: 12px; font-size: 18px; }

        .vlm-footer {
          width: 100%;
          max-width: 450px;
          text-align: center;
          padding: 40px 0;
          z-index: 20;
        }
        .activate-text { font-size: 15px; margin-bottom: 15px; opacity: 0.9; }
        .main-cta {
          width: 100%;
          padding: 18px;
          border-radius: 50px;
          background: linear-gradient(90deg, #2563eb, #06b6d4);
          border: 1px solid #00e5ff;
          color: white;
          font-weight: 800;
          font-size: 15px;
          letter-spacing: 2px;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4);
          transition: all 0.2s ease;
        }
        .main-cta:active { transform: scale(0.98); }

        /* Responsive Mobile Settings */
        @media (max-width: 768px) {
          .plans-container { flex-direction: row; flex-wrap: nowrap; overflow-x: auto; justify-content: flex-start; padding-left: 20px; }
          .plan-card { min-width: 280px; }
          .title { font-size: 22px; margin-bottom: 30px; }
        }
          .back-button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.25s ease;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.08);
  box-shadow: 0 0 15px rgba(0, 229, 255, 0.3);
}

.back-button svg {
  color: #e2e8f0;
}
      `}</style>
    </div>
  );
};

export default Startfree;