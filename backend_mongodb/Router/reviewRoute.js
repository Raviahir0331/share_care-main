// const express = require("express");
// const router = express.Router();
// const multer = require("multer"); // For handling file uploads
// const { createReview, getReviews } = require("../Controller/reviewController");

// const upload = multer({ dest: "uploads/" }); // Set file upload destination

// router.post("/reviews", upload.single("profilePic"), createReview); // Endpoint to create review with file upload
// router.get("/reviews", getReviews); // Endpoint to get all reviews

// module.exports = router;

// In your routes/review.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createReview ,getReviews,getAllReviews} = require('../Controller/reviewController');

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// POST /api/reviews (with file upload)
router.post("/reviews", upload.single("profilePic"), createReview); // Endpoint to create review with file upload
router.get("/reviews", getReviews); // Endpoint to get all reviews
router.get("/getAllReviews", getAllReviews); // Endpoint to get all reviews

module.exports = router;
