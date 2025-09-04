

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css'; // separate CSS similar to Login.css

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      navigate('/profile', { state: { uid: userCredential.user.uid, email: userCredential.user.email } });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-wrapper">
      {/* LEFT SIDE */}
      <div className="login-left">
        <img 
          src="images/Person.png" 
          alt="Learn Languages" 
          className="login-left-img" 
        />
        <h1 className="animated-text">Start Your Language Journey</h1>
        <p className="sub-text">
          Sign up and join thousands of learners. Practice languages, unlock opportunities, and discover new cultures.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
