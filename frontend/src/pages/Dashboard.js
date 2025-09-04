import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  const handleStartPractice = () => {
    navigate('/practice-session');
  };

  return (
    <div className="dashboard-wrapper">
      {/* Top Navbar */}
      <header className="dashboard-header">
        <div className="logo-title">
          <img src="images/Talktide logo.png" alt="TalkTide Logo" className="logo" />
          <span className="title">TalkTide</span>
        </div>

        {/* Profile section with initials */}
        <div className="profile-section">
  <div
    className="profile-svg"
    onClick={() => setShowDropdown(!showDropdown)}
  >
    {/* SVG Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000">
      <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/>
    </svg>
  </div>

  {showDropdown && (
    <div className="dropdown-menu">
      <button onClick={handleEditProfile}>Edit Profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )}
</div>

      </header>

      {/* Main content */}
      <main className="dashboard-main">
        <h1>Welcome to TalkTide!</h1>
        <p>Learn languages faster and track your progress.</p>
        <button onClick={handleStartPractice} className="start-btn">
          Start Practice
        </button>
      </main>
    </div>
  );
};

export default Dashboard;
