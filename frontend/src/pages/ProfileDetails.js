// // frontend/src/pages/ProfileDetails.js
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { db } from '../firebase';
// import { doc, setDoc } from 'firebase/firestore';

// const ProfileDetails = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { uid, email } = location.state; // 👈 get uid + email from Signup page

//   const [name, setName] = useState('');
//   const [dob, setDob] = useState('');
//   const [nativeLang, setNativeLang] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Save profile details in Firestore
//       await setDoc(doc(db, 'users', uid), {
//         name,
//         dob,
//         nativeLanguage: nativeLang,
//         email, // 👈 store email also
//       }, { merge: true });

//       alert('Profile saved successfully!');
//       navigate('/'); // redirect to login page
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Complete Your Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         /><br /><br />
//         <input
//           type="date"
//           value={dob}
//           onChange={(e) => setDob(e.target.value)}
//           required
//         /><br /><br />
//         <input
//           type="text"
//           placeholder="Native Language"
//           value={nativeLang}
//           onChange={(e) => setNativeLang(e.target.value)}
//           required
//         /><br /><br />
//         <button type="submit">Save Profile</button>
//       </form>
//     </div>
//   );
// };

// export default ProfileDetails;
// frontend/src/pages/ProfileDetails.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const ProfileDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { uid, email } = location.state; // UID + email from Signup

  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [nativeLang, setNativeLang] = useState('');
  const [secondLang, setSecondLang] = useState(''); // optional

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'users', uid), {
        name,
        dob,
        nativeLanguage: nativeLang,
        secondLanguage: secondLang || null, // store null if empty
        email,
      }, { merge: true });

      alert('Profile saved successfully!');
      navigate('/'); // redirect to login
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        /><br /><br />
        <input
          type="text"
          placeholder="Native Language"
          value={nativeLang}
          onChange={(e) => setNativeLang(e.target.value)}
          required
        /><br /><br />
        <input
          type="text"
          placeholder="Second Language (Optional)"
          value={secondLang}
          onChange={(e) => setSecondLang(e.target.value)}
        /><br /><br />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileDetails;
