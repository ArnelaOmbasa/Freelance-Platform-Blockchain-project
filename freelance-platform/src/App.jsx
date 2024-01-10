// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import JobPage from './pages/JobsPage';
import LoginPage from './pages/LoginPage';




const App = () => {


 
  return (
    <>


     <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>



  </>
  );
};

export default App;
