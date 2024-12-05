import React from 'react';
import './App.css';

const MyTickets = () => {
  return (
    <div className="my-tickets">
      <h1>List of Tickets</h1>
      <table>
        <thead>
          <tr>
            <th>Ticket No.</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Support By</th>
            <th>Date</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1234</td>
            <td>Login Issue</td>
            <td>In Progress</td>
            <td>Tech Support</td>
            <td>13/08/21</td>
            <td>⭐</td>
          </tr>
          {/* Add other rows as necessary */}
        </tbody>
      </table>
    </div>
  );
};

export default MyTickets;
