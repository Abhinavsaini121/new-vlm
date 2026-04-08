import React from 'react';
import './TopTeachers.css';

const teachers = [
  { id: 1, name: "Dr. Aris Thorne", subject: "Quantum Physics", rating: "4.9", color: "cyan", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Sarah Jenkins", subject: "AI & Machine Learning", rating: "5.0", color: "purple", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Prof. Vikram", subject: "Advanced Mathematics", rating: "4.8", color: "gold", img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { id: 4, name: "Elena Rodriguez", subject: "Organic Chemistry", rating: "4.9", color: "blue", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 5, name: "Marcus Webb", subject: "Data Structures", rating: "4.7", color: "cyan", img: "https://randomuser.me/api/portraits/men/85.jpg" },
  { id: 6, name: "Dr. Amara", subject: "Astrophysics", rating: "5.0", color: "purple", img: "https://randomuser.me/api/portraits/women/22.jpg" },
];

const TopTeachers = () => {
  return (
    <section className="teachers-section mt-40">
      <div className="teachers-header">
        <h2 className="aa-title">Meet Our Elite Faculty</h2>
        <p className="aa-subtitle">Learn from the brightest minds in the galaxy.</p>
      </div>

      <div className="teachers-scroll-container">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="teacher-card-item">
            {/* The Circular Profile Part */}
            <div className={`teacher-circle-wrapper glow-${teacher.color}`}>
              <div className="inner-orbit"></div>
              <img src={teacher.img} alt={teacher.name} className="teacher-img-circle" />
            </div>

            {/* Teacher Info */}
            <div className="teacher-info mt-20">
              <h4 className="t-name">{teacher.name}</h4>
              <p className="t-subject">{teacher.subject}</p>
              <div className="t-rating">
                <span className="star">★</span> {teacher.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopTeachers;