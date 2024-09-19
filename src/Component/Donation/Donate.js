import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DonationForm.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Donate = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    category: '',
    productName: '',
    description: '',
    quality: '',
    quantity: '',
    donationImage: null,
    terms: false,
  });

  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
 const navigate = useNavigate();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cat');
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, donationImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'donationImage' && formData[key]) {
        data.append('donationImage', formData[key]); 
      } else {
        data.append(key, formData[key]);
      }
      navigate('/pages',{replace:true})
    });
  
    if (editId) {
      axios.put(`http://localhost:5000/api/products/${editId}`, data)
        .then(response => {
          setProducts(products.map(product => product._id === editId ? response.data : product));
          setEditId(null);
          setShowModal(false);
          resetForm();
        })
        .catch(error => {
          console.error('Error updating product:', error);
          toast.error('Error updating product');
        });
    } else {
      axios.post('http://localhost:5000/api/products', data)
        .then(response => {
          setProducts([...products, response.data]);
          resetForm();
          toast.success('Product added successfully');
        })
        .catch(error => {
          console.error('Error adding product:', error.response ? error.response.data : error.message);
          toast.error('Product not added');
        });
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      category: '',
      productName: '',
      description: '',
      quality: '',
      quantity: '',
      donationImage: null,
      terms: false,
    });
  };

 

  return (
    <div className="container-fluid enhanced-form">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="enhanced-donation-form" onSubmit={handleSubmit}>
            <h2>Donation Form</h2>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter your address" required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" name="category" value={formData.category} onChange={handleInputChange} required>
                <option value="" disabled>Select category</option>
                <option value="Books" >Books</option>
                {categories.map((category) => (
                  <option key={category._id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleInputChange} placeholder="Enter product name" required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} placeholder="Enter product description"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="quality">Quality</label>
              <select id="quality" name="quality" value={formData.quality} onChange={handleInputChange} required>
                <option value="" disabled>Select quality</option>
                <option value="normal">Normal</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleInputChange} placeholder="Enter quantity" required />
            </div>
            <div className="form-group">
              <label htmlFor="donationImage">Upload Image</label>
              <input type="file" id="donationImage" name="donationImage" onChange={handleFileChange}  accept="image/*"/>
            </div>
            <div className="form-group checkbox-label">
              <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleInputChange} required />
              <label htmlFor="terms" className="ms-2">I agree to the terms and conditions</label>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">{editId ? 'Update Product' : `Add Product`  }</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
