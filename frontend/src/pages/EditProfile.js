

import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import './EditProfile.css';

function EditProfile() {
  const navigate = useNavigate(); // <-- initialize navigate

  const [profile, setProfile] = useState({
    name: "",
    dob: "",
    nativeLanguage: "",
    secondLanguage: "",
    email: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) setProfile(docSnap.data());
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, profile);
      alert("Profile updated successfully!");
    }
  };

  // Back button handler
  const handleBack = () => {
    navigate(-1); // <-- goes back to previous page
  };

  //if (loading) return <p>Loading...</p>;

  return (
    <div className="edit-profile-wrapper">
      <div className="edit-profile-card">
        <button className="back-btn" onClick={handleBack}>← Back</button> {/* <-- back button */}
        <h2>Edit Profile</h2>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="date"
          name="dob"
          value={profile.dob}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nativeLanguage"
          value={profile.nativeLanguage}
          onChange={handleChange}
          placeholder="Native Language"
          required
        />
        <input
          type="text"
          name="secondLanguage"
          value={profile.secondLanguage || ""}
          onChange={handleChange}
          placeholder="Second Language (Optional)"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          disabled
        />
        <button className="update-btn" onClick={handleUpdate}>Update Profile</button>
      </div>
    </div>
  );
}

export default EditProfile;
