const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Product = require('../Model/donationModel');
const { sendEmail } = require('../Model/EmailService');

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images only!');
    }
  }
});

// Create a new product
// Create a new product route
router.post('/products', upload.single('donationImage'), async (req, res) => {
  // Ensure req.file exists and has the correct field name
  console.log('File received:', req.file); // Check what file is being received
  console.log('Body received:', req.body); // Check the rest of the form fields
  try {
    const product = new Product({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      category: req.body.category,
      productName: req.body.productName,
      description: req.body.description,
      quality: req.body.quality,
      quantity: req.body.quantity || 1,
      donationImage: req.file ? req.file.path : null,
      terms: req.body.terms,
    });

    await product.save();

    // Send email to user
    const emailContent = `
      Hello ${product.fullName} (${product.email}),
      Thank you for donating ${product.productName}.
    `;

    await sendEmail(product.email, 'Product Details', emailContent);

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

  
 //request for products
router.post('/requestproducts', async (req, res) => {
  console.log('Received request:', req.body);
  try {
    const { productId, fullName, email,user } = req.body;
    if (!productId || !fullName || !email) {
      console.log('Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const product = await Product.findById(productId);
    if (!product) {
      console.log('Product not found');
      return res.status(404).json({ error: 'Product not found' });
    }
    
    const emailContent = `
    Hello ${fullName},
  
    I hope this message finds you well. My Email is ${user}, and I am interested in the ${product.productName} that was recently donated. 
  
    Could you kindly let me know if this item is still available? Additionally, I would appreciate any guidance on the process to request or obtain it.
  
    Thank you very much for your time and assistance.
  
    Best regards,
    ${user}
  `;
  
  

    await sendEmail(email, 'Product Details', emailContent);

    res.status(200).json({ message: 'Request processed successfully' });
  } catch (error) {
    console.error('Error in request-products route:', error);
    res.status(500).json({ error: error.message });
  }
});


// Get a single product by ID
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a product by ID
router.put('/products/:id', upload.single('donationImage'), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    product.fullName = req.body.name || product.fullName;
    product.email = req.body.email || product.email;
    product.phone = req.body.phone || product.phone;
    product.address = req.body.address || product.address;
    product.category = req.body.category || product.category;
    product.productName = req.body.productName || product.productName;
    product.description = req.body.description || product.description;
    product.quality = req.body.quality || product.quality;
    product.quantity = req.body.quantity || product.quantity;
    product.donationImage = req.file ? req.file.path : product.donationImage;
    product.terms = req.body.terms || product.terms;

    await product.save();
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a product by ID
router.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/products', async (req, res) => {
  try {
    // console.log('Fetching all products...');
    const products = await Product.find();
    if (!products || products.length === 0) {
      console.log('No products found');
      return res.status(404).send('No products found'); // Using res.send for string message
    }
    // console.log('Fetched products:', products);
    res.status(200).send(products); // Send the data directly
  } catch (error) {
    console.error('Error fetching products:', error.message); // Log detailed error
    res.status(400).send('Failed to fetch products'); // Provide a user-friendly error message
  }
});



module.exports = router;
