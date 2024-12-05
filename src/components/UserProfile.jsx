import React from 'react';
import './App.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="profile-card">
        <p>Username</p>
        <p>Contact Number</p>
        <p>Email</p>
        <p>Department</p>
      </div>
      <div className="feedback">
        <h2>Give Your Feedback</h2>
        <textarea placeholder="Write your feedback here..."></textarea>
        <button>Submit Feedback</button>
      </div>
    </div>
  );
};

export default UserProfile;
