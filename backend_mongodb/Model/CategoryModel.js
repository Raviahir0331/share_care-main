const mongoose = require('mongoose');

// Define the schema for the Category
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true // Ensures that the category name is unique
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Create and export the Category model
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
