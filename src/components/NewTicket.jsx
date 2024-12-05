import React from 'react';
import './App.css';

const NewTicket = () => {
  return (
    <div className="new-ticket">
      <h1>Create New Ticket</h1>
      <form>
        <label>Ticket No.</label><input type="text" />
        <label>Date</label><input type="date" />
        <label>Name</label><input type="text" />
        <label>Department</label><input type="text" />
        <label>Subject</label><input type="text" />
        <label>Category</label><input type="text" />
        <label>Type</label><input type="text" />
        <label>Priority</label><input type="text" />
        <label>Description</label><textarea></textarea>
        <div>
          <input type="checkbox" /> I’m not a robot
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewTicket;
