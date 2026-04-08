import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Signup.css"; // Reusing the same CSS file for consistency

const slides = [
  {
    id: 0,
    title: "Personalized Learning Paths",
    description: "Receive customized study plans based on individual strengths and weaknesses.",
    img: "https://img.freepik.com/premium-vector/have-look-this-flat-illustration-account-login_142112-1616.jpg"
  },
  {
    id: 1,
    title: "Track Your Progress",
    description: "Monitor your growth with detailed analytics and real-time performance reports.",
    img: "https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4766.jpg"
  }
];

const Signup = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Form States
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    referral: ""
  });
  const [errors, setErrors] = useState({});

  // Auto-scroll Carousel logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // 10-Digit Mobile Validation Logic
    if (name === "mobile") {
      const val = value.replace(/\D/g, ""); // Remove non-digits
      if (val.length <= 10) {
        setFormData({ ...formData, [name]: val });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    // Clear error when user types
    setErrors({ ...errors, [name]: "" });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (formData.mobile.length !== 10) {
      newErrors.mobile = "Mobile number must be 10 digits.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // alert("Registration Successful!");
    navigate("/"); // Redirect to login
  };

  return (
    <div className="login-container">
      {/* LEFT PANE */}
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
              <img src={slides[currentSlide].img} alt="img" className="main-illustration" />
              <div className="text-content">
                <h2>{slides[currentSlide].title}</h2>
                <p>{slides[currentSlide].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT PANE - Signup Form */}
      <div className="right-pane">
        <motion.div 
          className="login-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="card-body">
            <div className="login-header">
               <div className="header-text">
                  <h3 style={{fontSize: '24px'}}>Register</h3>
               </div>
            </div>

            <form className="login-form"  >
              <div className="input-group">
                <input type="text" name="fullName" placeholder="Full name" required onChange={handleChange} />
              </div>

              <div className="input-group">
                <input 
                  type="text" 
                  name="mobile" 
                  placeholder="Mobile number" 
                  value={formData.mobile}
                  className={errors.mobile ? "input-error" : ""}
                  required 
                  onChange={handleChange} 
                />
                {errors.mobile && <span className="error-text">{errors.mobile}</span>}
              </div>

              <div className="input-group">
                <input type="email" name="email" placeholder="Email address" required onChange={handleChange} />
              </div>

              <div className="input-group password-group">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
                <button type="button" className="eye-btn" onClick={() => setShowPass(!showPass)}>
                   <EyeIcon />
                </button>
              </div>

              <div className="input-group password-group">
                <input
                  type={showConfirmPass ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className={errors.confirmPassword ? "input-error" : ""}
                  required
                  onChange={handleChange}
                />
                <button type="button" className="eye-btn" onClick={() => setShowConfirmPass(!showConfirmPass)}>
                   <EyeIcon />
                </button>
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
              </div>

              <div className="input-group">
                <input type="text" name="referral" placeholder="Referral code (Optional)" onChange={handleChange} />
              </div>

              <div className="submit-btn-container" style={{marginTop: '10px'}}>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="submit-btn" 
                  style={{width: '100%'}} // Matches your image (full width submit)
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </div>

          <div className="card-footer">
            <p>Already have an account? <Link to="/">Log in</Link></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Small helper component for the Eye Icon
const EyeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

export default Signup;