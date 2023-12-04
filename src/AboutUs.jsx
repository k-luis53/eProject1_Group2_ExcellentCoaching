import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>Who We Are?</h1>
      <h2>Courses/Subjects</h2>
      <p>Here you can find the complete list of courses and subjects taught at our classes. These courses cover various fields like Mathematics, Science, and Language to provide our students with a comprehensive and well-rounded education.</p>

      <h2>Faculty/Teachers</h2>
      <p>Our Faculty/Teachers are highly qualified professionals with years of experience in their respective fields. They have been specially selected to ensure that our students receive the best possible education and guidance.</p>

      <h2>Success Stories</h2>
      <p>Previous year's success stories are listed here. These stories are testimonials to the effectiveness of our teaching methods and the potential of our students. They are also an inspiration for current students to work hard and achieve their goals.</p>
      <h2>Our Favorite Teachers</h2>
      <ol>
        <li>
          <strong>Teacher ? (Subject: /)</strong> - Formerly a teacher and always praised by students. A student of this teacher has successfully completed a year with the teacher. The student's performance: A
        </li>
        <li>
          <strong>Teacher ? (Subject: /)</strong> - A highly skilled teacher with many years of experience in the field. This teacher has been specifically selected to ensure that our students receive the best possible education and guidance.
        </li>
      </ol>
      <h2>Student Achievements</h2>
      <ol>
        <li>
          <strong>Students</strong> - Completed Year 1 with Teacher ? and scored an A in the final exams.
        </li>
        <li>
          <strong>Students</strong> - Completed Year 2 with Teacher ? and scored a perfect 10 in the final exams.
        </li>
        <li>
          <strong>Students</strong> - Completed Year 3 with Teacher ? and scored an A+ in the final exams.
        </li>
      </ol>
    </div>
  );
};

export default AboutUs;