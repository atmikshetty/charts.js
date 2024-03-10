import React from 'react';
import './App.css';
import Analytics from './Analytics';
import { Route, Routes } from 'react-router-dom';
import TeacherAnalytics from './TeacherAnalytics';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Analytics />} />
        <Route path='/teacher' element={<TeacherAnalytics />} />
      </Routes>
    </div>
  );
}

export default App;
