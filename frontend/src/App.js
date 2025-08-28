import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProfileDetails from './pages/ProfileDetails';
import EditProfile from './pages/EditProfile';
import LanguageSelect from './pages/LanguageSelect'; // 👈 add this
import PracticeSession from './pages/PracticeSession'; // 👈 add this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfileDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/language-select" element={<LanguageSelect />} /> {/* for choosing languages */}
        <Route path="/practice-session" element={<PracticeSession />} /> {/* actual practice session */}
      </Routes>
    </Router>
  );
}

export default App;
