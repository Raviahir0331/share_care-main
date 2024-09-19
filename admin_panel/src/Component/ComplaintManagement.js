import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const ComplaintManagement = () => {
  const [complaints, setComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const Admin = () =>{
    navigate('/Admin',{replace:true})
  }

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    const response = await axios.get("http://localhost:5000/api/complaints");
    setComplaints(response.data);
  };

  const handleEdit = (complaint) => {
    setSelectedComplaint(complaint);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/complaints/${id}`);
    fetchComplaints();
  };

  const clearSelection = () => {
    setSelectedComplaint(null);
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Complaint Management</h1>

      {/* Complaint List */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Product</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint._id}>
              <td>{complaint.firstName} {complaint.lastName}</td>
              <td>{complaint.email}</td>
              <td>{complaint.phoneNumber}</td>
              <td>{complaint.productNameOrCode}</td>
              <td>{complaint.description}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(complaint)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => handleDelete(complaint._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedComplaint ? "Edit Complaint" : "Add Complaint"}
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => clearSelection()}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
             
              </div>
            </div>
          </div>
        </div>
      )}
      <button type="button" class="btn btn-danger" onClick={Admin}>Go Back</button>
    </div>
  );
};

export default ComplaintManagement;
