import React from 'react';
import './demo.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="cards">
        <div className="card blue">Total Tickets: 12</div>
        <div className="card green">Total Solved: 8</div>
        <div className="card red">Total Awaiting Approval: 2</div>
        <div className="card yellow">Total in Progress: 2</div>
      </div>
    </div>
  );
};

export default Dashboard;
