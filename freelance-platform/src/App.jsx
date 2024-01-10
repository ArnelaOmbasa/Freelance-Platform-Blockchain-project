// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import JobPage from './pages/JobsPage';
import LoginPage from './pages/LoginPage';
import AddJobModal from './components/AddJobModal';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import ViewJobDetailsModal from './components/JobDetailsModal';
import SubmitProposalModal from './components/SubmitProposalModal';
import ViewProposalModal from './components/ViewProposalModal'; // Import your ViewProposalModal component



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
