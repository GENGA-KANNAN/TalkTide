import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProfileDetails from './pages/ProfileDetails';
import EditProfile from './pages/EditProfile';
import PracticeSession from './pages/PracticeSession';
import LandingPage from './pages/LandingPage'; // 👈 new landing page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* landing page first */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfileDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/practice-session" element={<PracticeSession />} />
      </Routes>
    </Router>
  );
}

export default App;
