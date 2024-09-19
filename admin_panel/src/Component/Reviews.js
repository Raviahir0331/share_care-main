import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const Admin = () =>{
    navigate('/Admin',{replace:true})
  }

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
        reviews.map((review) => (
          <div
            key={review._id}
            className="min-h-[355px] border-t-4 border-[#13588F] shadow-lg font-bold overflow-hidden py-10 px-12 relative mb-6 bg-white"
          >
            <div className="flex items-center pb-8">
              <div className="w-[70px]">
                <img
                  src={`http://localhost:5000/${review.profilePic}`} // Add your backend URL
                  alt="Client Profile"
                  className="rounded-full"
                />
              </div>
              <div className="text-4xl pl-5 text-[#ffbf00]">
                {"★".repeat(review.rating)}
              </div>
            </div>
            <div className="pb-5">{review.description}</div>
            <div className="text-[#13588F] text-lg pb-10">
              — {review.username}
            </div>
            {review.companyLogo && (
              <div className="absolute bottom-[-50px] right-[-70px] z-[-1]">
                <img
                  src={review.companyLogo}
                  alt="Company Logo"
                  className="filter brightness-0 invert sepia saturate-[10000%] hue-rotate-[180deg] brightness-110"
                />
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
      <button type="button" class="btn btn-danger" onClick={Admin}>Go Back</button>
    </div>
  );
};

export default Reviews;
