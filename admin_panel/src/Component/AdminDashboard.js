import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FaUser, FaDonate, FaChartLine } from 'react-icons/fa';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
 const navigate = useNavigate();
 const DonaitonLink = () =>{
  navigate('/donation',{replace:true})
 }
 const Reviews = () =>{
  navigate('/Reviews',{replace:true})
 }
 

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
        .then(response => {
            if (response.data && Array.isArray(response.data)) {
                setProducts(response.data);
            } else {
                console.error('Unexpected data format:', response.data);
            }
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}, []);
  useEffect(() => {
    // Fetch products and users data when component mounts
    const fetchData = async () => {
      try {
        const productResponse = await axios.get('http://localhost:5000/api/products');
        const userResponse = await axios.get('http://localhost:5000/api/getalluser'); // Assuming you have a route for fetching users
        setProducts(productResponse.data);
        setUsers(userResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Prepare data for Bar chart based on fetched products
  const donationData = products.map(product => product.quantity);
  const donationLabels = products.map(product => product.productName);

  const data = {
    labels: donationLabels,
    datasets: [
      {
        label: 'Donations',
        data: donationData,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <motion.div 
        className="flex-1 p-6"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center">
              <FaUser className="text-blue-500 text-3xl mr-4" />
              <div>
                <h2 className="text-xl font-bold">Users</h2>
                <p className="text-gray-600">{users.length} Users Registered</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center" >
              <FaDonate className="text-green-500 text-3xl mr-4" />
              <div onClick={DonaitonLink} >
                <h2 className="text-xl font-bold">Donations</h2>
                <p className="text-gray-600">{products.length} Donations Made</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center" onClick={Reviews}>
              <FaChartLine className="text-red-500 text-3xl mr-4" />
              <div>
                <h2 className="text-xl font-bold">Analytics</h2>
                <p className="text-gray-600">View performance analytics</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Donation Statistics</h2>
          <Bar data={data} />
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
