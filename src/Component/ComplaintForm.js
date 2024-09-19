import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const ComplaintForm = ({ selectedComplaint}) => {
  const [complaint, setComplaint] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    productNameOrCode: "",
    description: ""
  });
  const navigate = useNavigate();
 
  useEffect(() => {
    if (selectedComplaint) {
      setComplaint(selectedComplaint);
    }
  }, [selectedComplaint]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaint({ ...complaint, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedComplaint) {
      // Update existing complaint
      await axios.put(`http://localhost:5000/api/complaints/${selectedComplaint._id}`, complaint);
    } else {
      // Submit new complaint
      await axios.post("http://localhost:5000/api/complaints", complaint);
      toast.success("Complaint has been recoded")
      navigate('/pages')
    }
    // onSubmit();
    // clearSelection();
  };

  return (
    <>
    
   
    <div className="flex justify-center items-center  ">
      <form onSubmit={handleSubmit} className="bg-green-100 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
          {selectedComplaint ? "Edit Complaint" : "Product Quality Complaint Form"}
        </h2>

        {/* Customer Name */}
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Customer Name:
            </label>
            <input
              type="text"
              name="firstName"
              value={complaint.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              name="lastName"
              value={complaint.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="mt-4 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email Address:
          </label>
          <input
            type="email"
            name="email"
            value={complaint.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number:
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={complaint.phoneNumber}
            onChange={handleChange}
            placeholder="### ### ####"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        {/* Product Name/Code */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Product Name/Code:
          </label>
          <input
            type="text"
            name="productNameOrCode"
            value={complaint.productNameOrCode}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description of Quality Issue:
          </label>
          <textarea
            name="description"
            value={complaint.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            {selectedComplaint ? "Update Complaint" : "Submit Complaint"}
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default ComplaintForm;
