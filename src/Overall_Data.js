// StudentDetailsPage.js
import React, { useState } from 'react';
import './StudentDetailsPage.css';

const StudentDetailsPage = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const studentData = [
    { name: 'Student 1', emotionOverall: 'Happy', emotionAudio: 'Happy', emotionText: 'Excited', emotionVideo: 'Calm' },
    { name: 'Student 2', emotionOverall: 'Happy', emotionAudio: 'Sad', emotionText: 'Confused', emotionVideo: 'Surprised' },
    { name: 'Student 3', emotionOverall: 'Happy', emotionAudio: 'Confused', emotionText: 'Happy', emotionVideo: 'Bored' },
  ];

  const handleStudentClick = (name) => {
    setSelectedStudent((prevSelected) => (prevSelected === name ? null : name));
  };

  return (
    <div>
      <h3>Overall Analysis for Each Student</h3>
      {studentData.map((student, index) => (
        <div
          key={index}
          className={`student-container ${selectedStudent === student.name ? 'show-details' : ''}`}
          onClick={() => handleStudentClick(student.name)}
        >
          <p>Name: {student.name}</p>
          <p>Overall Emotion: {student.emotionOverall}</p>
          {selectedStudent === student.name && (
            <div className="student-details">
              <p>Emotion (Audio): {student.emotionAudio}</p>
              <p>Emotion (Text): {student.emotionText}</p>
              <p>Emotion (Video): {student.emotionVideo}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StudentDetailsPage;
