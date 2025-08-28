// // frontend/src/pages/Dashboard.js
// import React from 'react';
// import { signOut } from 'firebase/auth';
// import { auth } from '../firebase';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       alert('Logged out successfully!');
//       navigate('/'); // redirect to login page
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Dashboard</h2>
//       <p>Welcome to TalkTide!</p>
//       <button onClick={handleLogout} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Dashboard;

// frontend/src/pages/Dashboard.js
// import React from 'react';
// import { signOut } from 'firebase/auth';
// import { auth } from '../firebase';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       alert('Logged out successfully!');
//       navigate('/'); // redirect to login page
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleEditProfile = () => {
//     navigate('/edit-profile'); // redirect to EditProfile page
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Dashboard</h2>
//       <p>Welcome to TalkTide!</p>
//       <button 
//         onClick={handleEditProfile} 
//         style={{ marginRight: '10px', padding: '10px 20px', cursor: 'pointer' }}
//       >
//         Edit Profile
//       </button>
//       <button 
//         onClick={handleLogout} 
//         style={{ padding: '10px 20px', cursor: 'pointer' }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
      navigate('/'); // redirect to login page
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEditProfile = () => {
    navigate('/edit-profile'); // redirect to EditProfile page
  };

  const handleStartPractice = () => {
    navigate('/language-select'); // navigate to language selection page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Dashboard</h2>
      <p>Welcome to TalkTide!</p>

      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={handleEditProfile} 
          style={{ marginRight: '10px', padding: '10px 20px', cursor: 'pointer' }}
        >
          Edit Profile
        </button>
        <button 
          onClick={handleLogout} 
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Logout
        </button>
      </div>

      <div style={{ marginTop: '40px' }}>
        <button 
          onClick={handleStartPractice} 
          style={{ padding: '15px 30px', cursor: 'pointer', fontSize: '16px' }}
        >
          Start Practice
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
