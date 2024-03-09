import React from "react";
import { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./Analytics.css"; // Assuming you have a CSS file
import StudentDetailsPage from "./Overall_Data";

const Analytics = () => {
  // const navigate = useNavigate();

  const [selectedStudent, setSelectedStudent] = useState(null);

  const studentData = [
    {
      name: "Student 1",
      emotionOverall: "Happy",
      emotionAudio: "Happy",
      emotionText: "Excited",
      emotionVideo: "Calm",
    },
    {
      name: "Student 2",
      emotionOverall: "Happy",
      emotionAudio: "Sad",
      emotionText: "Confused",
      emotionVideo: "Surprised",
    },
    {
      name: "Student 3",
      emotionOverall: "Happy",
      emotionAudio: "Confused",
      emotionText: "Happy",
      emotionVideo: "Bored",
    },
  ];

  const handleChartClick = () => {
    // Your existing code...

    // Set selected student data when a chart is clicked
    // For demonstration purposes, setting the first student's data
    setSelectedStudent(studentData[0]);
  };

  const audiochart = {
    labels: ["Happy", "Surprised", "Confused", "Bored", "Absent"],
    datasets: [
      {
        label: "Analytics Data",
        data: [10, 20, 20, 25, 25],
        backgroundColor: [
          "rgba(56, 142, 60, 255)",    
          "rgba(211,47,47,255)",    
          "rgba(25,118,210,255)",     
          "rgba(251,192,45,255)",
          "rgba(3,169,244,255)",
        ],
        borderColor: [
          "rgba(56, 142, 60, 255)",    
          "rgba(211,47,47,255)",    
          "rgba(25,118,210,255)",     
          "rgba(251,192,45,255)",
          "rgba(3,169,244,255)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const textchart = {
    labels: ["Happy", "Surprised", "Confused", "Bored", "Absent"],
    datasets: [
      {
        label: "Analytics Data",
        data: [10, 20, 20, 25, 25],
        backgroundColor: [
          "rgba(56, 142, 60, 255)",    
          "rgba(211,47,47,255)",    
          "rgba(25,118,210,255)",     
          "rgba(251,192,45,255)",
          "rgba(3,169,244,255)",
        ],
        borderColor: [
          "rgba(56, 142, 60, 255)",    
          "rgba(211,47,47,255)",    
          "rgba(25,118,210,255)",     
          "rgba(251,192,45,255)",
          "rgba(3,169,244,255)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const videochart = {
    labels: ["Happy", "Surprised", "Confused", "Bored", "Absent"],
    datasets: [
      {
        label: "Analytics Data",
        data: [10, 20, 20, 25, 25],
        backgroundColor: [
          "rgba(56, 142, 60, 255)",    
          "rgba(211,47,47,255)",    
          "rgba(25,118,210,255)",     
          "rgba(251,192,45,255)",
          "rgba(3,169,244,255)",
        ],
        borderColor: [
          "rgba(56, 142, 60, 255)",    
          "rgba(211,47,47,255)",    
          "rgba(25,118,210,255)",     
          "rgba(251,192,45,255)",
          "rgba(3,169,244,255)",
        ],
        
        borderWidth: 1,
      },
    ],
  };

  const overallData = {
    labels: ["Happy", "Surprised", "Confused", "Bored", "Absent"],
    datasets: [
      {
        label: "Analytics Data",
        data: [10, 20, 20, 25, 25],
        backgroundColor: [
          "rgba(56, 142, 60, 255)",    
          "rgba(211,47,47,255)",    
          "rgba(25,118,210,255)",     
          "rgba(251,192,45,255)",
          "rgba(3,169,244,255)",
        ],
        borderColor: [
          "rgba(56, 142, 60, 255)",    
          "rgba(211,47,47,255)",    
          "rgba(25,118,210,255)",     
          "rgba(251,192,45,255)",
          "rgba(3,169,244,255)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    // maintainAspectRatio: false,
    // responsive: true,
  };

  return (
    <div>
      <div className="analytics-container">
        <div className="overall-target ">
          <h3>Overall Chart</h3>
          <Bar
            data={overallData}
            options={chartOptions}
            onClick={handleChartClick}
          />
        </div>
        <div className="chart-row reduced-size">
          <div className="audio-target">
            <h3>Audio Chart</h3>
            <Pie
              data={audiochart}
              options={chartOptions}
              onClick={handleChartClick}
            />
          </div>

          <div className="text-target">
            <h3>Text Chart</h3>
            <Pie
              data={textchart}
              options={chartOptions}
              onClick={handleChartClick}
            />
          </div>
          <div className="video-target">
            <h3>Video Chart</h3>
            <Pie
              data={videochart}
              options={chartOptions}
              onClick={handleChartClick}
            />
          </div>
        </div>
      </div>

      <div className="overall-data">
        <StudentDetailsPage />
      </div>
    </div>
  );
};

export default Analytics;
