
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/login'); // redirect to login page
    };

    return (
        <div className="landing-page">
            <div className="logo-container">
                <img 
                    src="/images/TalkTide logo.png" 
                    alt="Talktide Logo" 
                    className="logo-image"
                />
                <span className="logo-text">Talktide</span>
            </div>
            <button className="start-btn" onClick={handleStart}>Start</button>
        </div>
    );
};

export default LandingPage;
