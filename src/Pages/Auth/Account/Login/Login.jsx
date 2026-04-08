import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Login.css";

// Assuming your image is in src/assets/login-illustration.png
import mainIllustration from "../../../../assets/auth_images/login.png";

const slides = [
  {
    id: 0,
    title: "Personalized Learning Paths",
    description: "Receive customized study plans based on individual strengths and weaknesses.",
    img: mainIllustration // Using the same image for demo, replace with others if available
  },
  {
    id: 1,
    title: "Track Your Progress",
    description: "Monitor your growth with detailed analytics and real-time performance reports.",
    img: "https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4766.jpg"
  },
  {
    id: 2,
    title: "Expert Mentorship",
    description: "Connect with top-tier educators and get your doubts cleared instantly.",
    img: "https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg"
  }
];

const Login = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  // 1. Auto-scroll logic (Changes every 3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // 2. 10-Number Validation Logic
  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length <= 10) {
      setMobile(value);
      setError("");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    // alert("Login successful! Redirecting...");
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      {/* LEFT PANE - Animated Carousel */}
      <div className="left-pane">
        <div className="logo-container">
          <span className="logo-text-red">VLM</span>
          <span className="logo-text-teal">Academy</span>
        </div>

        <div className="carousel-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="slide-content"
            >
              <div className="illustration-container">
                <img 
                  src={slides[currentSlide].img} 
                  alt="illustration" 
                  className="main-illustration" 
                />
              </div>
              <div className="text-content">
                <h2>{slides[currentSlide].title}</h2>
                <p>{slides[currentSlide].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>

      {/* RIGHT PANE - Login Form */}
      <div className="right-pane">
        <motion.div 
          className="login-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="card-body">
            <div className="login-header">
              <div className="header-text">
                <h3>Log in</h3>
                <p>Please login to your account.</p>
              </div>
              <div className="header-illustration">
                 <svg viewBox="0 0 24 24" fill="none" stroke="#D11A38" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                 </svg>
              </div>
            </div>

            <form className="login-form" onSubmit={handleLogin}>
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder="10-digit mobile number" 
                  value={mobile}
                  onChange={handleMobileChange}
                  className={error ? "input-error" : ""}
                  required 
                />
                {error && <span className="error-text">{error}</span>}
              </div>

              <div className="input-group password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <button 
                  type="button" 
                  className="eye-btn" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              <div className="forgot-password-link">
                <Link to="/forgot">Forgot Password ?</Link>
              </div>

              <div className="submit-btn-container">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" 
                  className="submit-btn"
                >
                  Log in
                </motion.button>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </motion.div>
      </div>

      <motion.div className="help-button" whileHover={{ scale: 1.1 }}>
        <span>Help</span>
      </motion.div>
    </div>
  );
};

export default Login;