import React, { useState } from 'react';
import './Onboard.css';

const Onboard = () => {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({
    language: 'English',
    class: '',
    exams: []
  });

  const steps = [
    {
      id: 'language',
      category: 'IIT JEE',
      title: 'Select the language you want to learn in',
      type: 'checkbox',
      options: ['English', 'Hindi', 'Hinglish']
    },
    {
      id: 'class',
      category: 'IIT JEE',
      title: 'Which class are you in?',
      type: 'radio',
      options: ['Class 10', 'Class 11', 'Class 12', 'Dropper']
    },
    {
      id: 'exam',
      category: 'IIT JEE',
      title: 'Which exam(s) are you targeting?',
      type: 'checkbox',
      options: ['IIT JEE 2026', 'IIT JEE 2027', 'IIT JEE 2028']
    }
  ];

  const currentStepData = steps[step];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      alert('Onboarding Complete!');
    }
  };

  const handleOptionChange = (option) => {
    if (currentStepData.type === 'radio') {
      setSelections({ ...selections, [currentStepData.id]: option });
    } else {
      // Toggle logic for checkboxes (like the first and last screens)
      const currentSelections = selections[currentStepData.id] || [];
      const newSelections = typeof currentSelections === 'string' ? [currentSelections] : [...currentSelections];
      
      if (newSelections.includes(option)) {
        setSelections({ ...selections, [currentStepData.id]: newSelections.filter(i => i !== option) });
      } else {
        setSelections({ ...selections, [currentStepData.id]: [...newSelections, option] });
      }
    }
  };

  // Check if button should be enabled
  const isSelected = (option) => {
    const val = selections[currentStepData.id];
    return Array.isArray(val) ? val.includes(option) : val === option;
  };

  const isStepValid = () => {
    const val = selections[currentStepData.id];
    return Array.isArray(val) ? val.length > 0 : val !== '';
  };

  return (
    <div className="onboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">unacademy</div>
        <div className="nav-icons">
          <span className="icon-gift">🎁</span>
          <div className="profile-circle"></div>
        </div>
      </nav>

      <div className="main-content">
        {/* Left Section: Illustration */}
        <div className="illustration-section">
          <div className="illustration-wrapper">
             {/* Replace with actual image path */}
            <img src="https://via.placeholder.com/400x400?text=Illustration" alt="Learning Desk" />
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="form-section">
          <div className="form-header">
            <p className="category-label">{currentStepData.category}</p>
            <h1>{currentStepData.title}</h1>
          </div>

          <div className="options-list">
            {currentStepData.options.map((option) => (
              <div 
                key={option} 
                className={`option-card ${isSelected(option) ? 'selected' : ''}`}
                onClick={() => handleOptionChange(option)}
              >
                <div className="input-indicator">
                  {currentStepData.type === 'radio' ? (
                    <div className={`radio-dot ${isSelected(option) ? 'checked' : ''}`}></div>
                  ) : (
                    <div className={`checkbox-square ${isSelected(option) ? 'checked' : ''}`}>
                      {isSelected(option) && '✓'}
                    </div>
                  )}
                </div>
                <span className="option-text">{option}</span>
              </div>
            ))}
          </div>

          <div className="footer-action">
            <button 
              className={`primary-btn ${!isStepValid() ? 'disabled' : ''}`}
              onClick={handleNext}
              disabled={!isStepValid()}
            >
              {step === steps.length - 1 ? 'Done' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboard;