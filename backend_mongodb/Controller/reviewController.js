const Review = require("../Model/reviewModel");

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { rating, username, description } = req.body;
    const profilePic = req.file.path; // Assuming multer is used for file handling

    const review = new Review({
      profilePic,
      rating,
      username,
      description,
    });

    await review.save();
    res.status(201).json({ message: "Review created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all reviews
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find(); // Fetch all reviews from the database
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
};
