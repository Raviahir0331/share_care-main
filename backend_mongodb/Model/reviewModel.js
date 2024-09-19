const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  profilePic: {
    type: String, // URL or file path to the profile picture
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 5, // Default rating is 5 stars
  },
  username: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
