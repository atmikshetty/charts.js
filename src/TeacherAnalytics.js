import React from 'react';
import { Line } from 'react-chartjs-2';
import './TeacherAnalytics.css'; // Create a CSS file for styling

const TeacherAnalytics = () => {
  const weeklySessionsData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // Add more weeks as needed
    datasets: [
      {
        label: 'Sessions Conducted - Class A',
        data: [5, 8, 10, 7], // Replace with your actual data
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
      {
        label: 'Sessions Conducted - Class B',
        data: [3, 6, 8, 5], // Replace with your actual data for Class B
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
        tension: 0.1,
      },
      {
        label: 'Sessions Conducted - Class C',
        data: [1,2,3,4], // Replace with your actual data for Class B
        fill: false,
        borderColor: 'rgba(251,192,45,255)',
        tension: 0.1,
      },
      {
        label: 'Sessions Conducted - Class D',
        data: [9,3,5,7], // Replace with your actual data for Class B
        fill: false,
        borderColor: 'rgba(25,118,210,255)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Weeks',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sessions Conducted',
        },
      },
    },
  };

  return (
    <div className="teacher-analytics-container">
      <h3>Weekly Sessions Conducted</h3>
      <Line data={weeklySessionsData} options={chartOptions} />
    </div>
  );
};

export default TeacherAnalytics;
