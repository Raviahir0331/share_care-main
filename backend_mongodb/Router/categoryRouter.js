const express = require('express');
const router = express.Router();
const Category = require('../Model/CategoryModel');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// Create a new category
router.post('/cat', async (req, res) => {
  try {
    const category = new Category({
      name: req.body.name
    });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all categories
router.get('/cat', async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single category by ID
router.get('/cat/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a category by ID
// router.put('/cat/:id', async (req, res) => {
  // try {
  //   const category = await Category.findByIdAndUpdate(
  //     req.params.id,
  //     { name: req.body.name },
  //     { new: true } // Return the updated document
  //   );
  //   if (category) {
  //     res.status(200).json(category);
  //   } else {
  //     res.status(404).json({ message: 'Category not found' });
  //   }
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
  
  // router.put('/cat/:id', async (req, res) => {
  //   const { id } = req.params;  // Get the ID from the URL parameters
  //   const { name } = req.body;  // Get the new name from the request body
  
  //   try {
  //     // Validate the ID format to ensure it's correct
  //     if (!mongoose.Types.ObjectId.isValid(id)) {
  //       return res.status(400).send({ message: 'Invalid ID format' });
  //     }
  
  //     // Update only the name field using findByIdAndUpdate
  //     const updatedCategory = await Category.findByIdAndUpdate(
  //       id,   // Use the id directly here
  //       { name },   // Update the name field
  //       { new: true, runValidators: true }  // Ensure new document is returned and validation is run
  //     );
  
  //     if (!updatedCategory) {
  //       return res.status(404).send({ message: 'Category not found' });
  //     }
  
  //     res.send({ message: 'Category updated successfully', updatedCategory });
  //   } catch (error) {
  //     console.error('Error updating category:', error);
  //     res.status(500).send({
  //       message: 'An error occurred while updating the category',
  //       error: error.message,
  //     });
  //   }
  // });
  
  router.put('/cat/:id', async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) return res.status(404).json({ error: 'Category not found' });
  
      // Only update the name field if it's provided in the request body
      category.name = req.body.name || category.name;
  
      await category.save();
      res.json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
// Delete a category by ID
router.delete('/cat/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (category) {
      res.status(200).json({ message: 'Category deleted' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
