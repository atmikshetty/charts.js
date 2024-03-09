import React from 'react';
import './App.css';
import Analytics from './Analytics';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Analytics />} />
        
      </Routes>
    </div>
  );
}

export default App;
