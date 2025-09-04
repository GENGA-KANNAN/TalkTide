
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import './ProfileDetails.css';

const ProfileDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { uid, email } = location.state; 

  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [nativeLang, setNativeLang] = useState('');
  const [secondLang, setSecondLang] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(
        doc(db, 'users', uid),
        {
          name,
          dob,
          nativeLanguage: nativeLang,
          secondLanguage: secondLang || null,
          email,
        },
        { merge: true }
      );
      alert('Profile saved successfully!');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <h1>Complete Your Profile</h1>
        <p>Help us get to know you better. Fill in your personal and language details.</p>
      </div>
      <div className="profile-card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Native Language"
            value={nativeLang}
            onChange={(e) => setNativeLang(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Second Language (Optional)"
            value={secondLang}
            onChange={(e) => setSecondLang(e.target.value)}
          />
          <button type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetails;
