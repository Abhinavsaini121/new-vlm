import React, { useState, useEffect, useRef } from 'react';
import './CoursesSection.css';

const COURSES_DATA = [
  {
    id: 1,
    title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
    author: "365 Careers",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
    rating: 4.6,
    reviews: "18,728",
    price: "₹569",
    oldPrice: "₹3,089",
    badge: "Bestseller"
  },
  {
    id: 2,
    title: "AI for Project Management: Real-World AI Use Cases for PMs",
    author: "365 Careers",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    reviews: "122",
    price: "₹549",
    oldPrice: "₹1,239",
    badge: "Bestseller"
  },
  {
    id: 3,
    title: "The Complete Full Stack AI Engineering Bootcamp",
    author: "Aritra Basak",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
    rating: 4.4,
    reviews: "17",
    price: "₹549",
    oldPrice: "₹1,919",
    badge: "Hot & New"
  },
  {
    id: 4,
    title: "AI Programming in C# - Beginner to Expert Course",
    author: "Robert Gioia",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=400",
    rating: 4.2,
    reviews: "262",
    price: "₹609",
    oldPrice: "₹2,869",
    badge: ""
  },
  {
    id: 5,
    title: "Deep Learning Specialization",
    author: "Andrew Ng",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    reviews: "45,000",
    price: "₹799",
    oldPrice: "₹4,500",
    badge: "Bestseller"
  }
];

const CourseCard = ({ course }) => (
  <div className="course-card">
    <div className="card-image-wrap">
      <img src={course.image} alt={course.title} />
    </div>
    <div className="card-content">
      <h3 className="course-title">{course.title}</h3>
      <p className="course-author">{course.author}</p>
      <div className="rating-box">
        <span>{course.rating} ★</span>
        <span className="review-count">({course.reviews})</span>
      </div>
      <div className="price-row">
        <span className="current-price">{course.price}</span>
        <span className="original-price">{course.oldPrice}</span>
      </div>
      {course.badge && (
        <div className="badge-row">
          <span className={`course-badge ${course.badge === 'Bestseller' ? 'badge-bestseller' : 'badge-new'}`}>
            {course.badge}
          </span>
        </div>
      )}
    </div>
  </div>
);

const CoursesSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
  const section = triggerRef.current;
  const track = sectionRef.current;
   
  const handleWheel = (e) => {
    if (!section || !track) return;

    const rect = section.getBoundingClientRect();

    // Check if section is in viewport
    useEffect(() => {
  const section = triggerRef.current;
  const track = sectionRef.current;

  const handleScroll = () => {
    if (!section || !track || isAnimating) return;

    const rect = section.getBoundingClientRect();

    // 👇 section viewport me aate hi
    if (rect.top <= 0 && rect.bottom > window.innerHeight) {
      setIsAnimating(true);

      let start = null;
      const duration = 3000; // ⏱️ 3 sec animation

      const maxScroll = track.scrollWidth - track.clientWidth;

      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        const percentage = Math.min(progress / duration, 1);

        track.scrollLeft = percentage * maxScroll;

        if (percentage < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);

          // 👇 unlock scroll after animation
          window.scrollBy(0, 1);
        }
      };

      requestAnimationFrame(animate);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [isAnimating]);
  };

  window.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };
}, []);

  return (
    <div className="courses-section-wrapper" ref={triggerRef}>
      <div className="sticky-container">
        <div className="courses-header">
          <h2>Skills to transform your career</h2>
          <p>Scroll down to explore our top-rated courses</p>
        </div>
        
        <div className="horizontal-scroll-track" ref={sectionRef}>
          {COURSES_DATA.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
          {/* Duplicate cards or add more to see the effect better */}
          {COURSES_DATA.map((course) => (
            <CourseCard key={`dup-${course.id}`} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;