import React, { useEffect, useState } from "react";
import axios from "axios";
import './Header.css'; // Import the CSS file for animation

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from the backend API when the component mounts
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/reviews"); // Replace with your API endpoint
        setReviews(response.data); // Set the fetched reviews into the state
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto py-10">
      {reviews.length > 0 ? (
        <div className="review-container flex space-x-4 overflow-hidden"> {/* Apply animation class */}
          {reviews.map((review) => (
            <div
              key={review._id}
              className="review-card min-h-[355px] max-w-[400px] flex-shrink-0 border-t-4 border-[#13588F] shadow-lg font-bold overflow-hidden py-10 px-12 bg-white"
            >
              <div className="flex items-center pb-8">
                <div className="w-[70px]">
                  <img
                    src={`http://localhost:5000/${review.profilePic}`} // Make sure the URL is correct
                    alt="Client Profile"
                    className="rounded-full"
                  />
                </div>
                <div className="text-4xl pl-5 text-[#ffbf00]">
                  {"★".repeat(review.rating)}
                </div>
              </div>
              <div className="pb-5">{review.description}</div>
              <div className="text-[#13588F] text-lg pb-10">— {review.username}</div>
              {review.companyLogo && (
                <div className="absolute bottom-[-50px] right-[-70px] z-[-1]">
                  <img
                    src={`http://localhost:5000/${review.companyLogo}`} // Make sure the URL is correct
                    alt="Company Logo"
                    className="filter brightness-0 invert sepia saturate-[10000%] hue-rotate-[180deg] brightness-110"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default Reviews;
