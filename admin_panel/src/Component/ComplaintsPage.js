import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function ComplaintsPage() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    async function fetchComplaints() {
      try {
        const response = await axios.get('http://localhost:5000/api/complaints');
        setComplaints(response.data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    }

    fetchComplaints();
  }, []);

  return (
    <div className="container">
      <h1>Complaints</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(complaint => (
            <tr key={complaint._id}>
              <td>{complaint._id}</td>
              <td>{complaint.user}</td>
              <td>{complaint.description}</td>
              <td>{complaint.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComplaintsPage;
