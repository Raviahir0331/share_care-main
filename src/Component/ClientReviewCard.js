import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";



const ClientReviewCard = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [rating, setRating] = useState(5); // Default 5 stars
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 
  const navigate = useNavigate();
  const pages = () =>{
    navigate('/pages')
  }

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the data
    const formData = new FormData();
    formData.append("profilePic", profilePic);
    formData.append("rating", rating);
    formData.append("username", username);
    formData.append("description", description);

    try {
      // Make a POST request to your backend API
      const response = await axios.post('http://localhost:5000/api/reviews', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        setSuccessMessage("Review submitted successfully!");
        // setReviews([response.data.review, ...reviews]);
        setErrorMessage(""); // Clear any previous errors
        // Clear the form fields after successful submission
        setProfilePic(null);
        setRating(5);
        setUsername("");
        setDescription("");
        toast.success('Review submitted successfully!')
        navigate('/')
      }
    } catch (error) {
      setErrorMessage("Error submitting the review. Please try again.");
      setSuccessMessage(""); // Clear any previous success message
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Submit a Review
        <FontAwesomeIcon icon={faSquareXmark} className="flex float-end text-black cursor-pointer" onClick={pages} />
        </h2>
        
        {/* Success or Error Message */}
        {successMessage && <p className="text-green-600 text-center mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 text-center mb-4">{errorMessage}</p>}

        {/* Username Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none"
            required
          />
        </div>

        {/* Star Rating (Display only) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Rating:</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} onClick={() => setRating(star)} className={`text-3xl ${star <= rating ? "text-yellow-500" : "text-gray-400"} cursor-pointer`}>
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Review Description:</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none"
            required
          ></textarea>
        </div>

        {/* Profile Picture Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Profile Picture:</label>
          <input
            type="file"
            onChange={handleProfilePicChange}
            className="mt-1 block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none">
            Submit Review
          </button>
        </div>
      </form>
      <div>
       
      </div>
    </div>
  );
};

export default ClientReviewCard;
