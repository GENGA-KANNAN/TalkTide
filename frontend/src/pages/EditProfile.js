import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

function EditProfile() {
  const [profile, setProfile] = useState({
    name: "",
    dob: "",
    nativeLanguage: "",
    secondLanguage: "",
    email: ""
  });

  const [loading, setLoading] = useState(true);

  // Fetch current user data
  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  // Update Firestore
  const handleUpdate = async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, profile);
      alert("Profile updated successfully!");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Edit Profile</h2>
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
      /><br /><br />
      <input
        type="date"
        name="dob"
        value={profile.dob}
        onChange={handleChange}
        required
      /><br /><br />
      <input
        type="text"
        name="nativeLanguage"
        value={profile.nativeLanguage}
        onChange={handleChange}
        placeholder="Native Language"
        required
      /><br /><br />
      <input
        type="text"
        name="secondLanguage"
        value={profile.secondLanguage || ""}
        onChange={handleChange}
        placeholder="Second Language (Optional)"
      /><br /><br />
      <input
        type="email"
        name="email"
        value={profile.email}
        disabled
      /><br /><br />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
}

export default EditProfile;
