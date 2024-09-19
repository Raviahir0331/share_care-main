// src/components/Sidebar.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaDonate, FaChartPie, FaRev } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const DonaitonLink = () =>{
    navigate('/donation',{replace:true})
   } 
   const ComplaintManagement = () =>{
    navigate('/ComplaintManagement')
   }
   const Reviews = () =>{
    navigate('/Reviews')
   }
  return (
    <motion.div 
      className="w-64 bg-slate-300 text-white min-h-screen"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-black">Admin Panel</h2>
      </div>
      <nav className="mt-10">
  <NavLink
    to="/admin"
    className="block py-2.5 px-4 rounded hover:bg-blue-600 transition duration-300 text-lg font-semibold text-gray-700 hover:text-white"
  >
    <FaHome className="inline-block mr-2" /> Dashboard
  </NavLink>
  <NavLink
    to="/admin/users"
    className="block py-2.5 px-4 rounded hover:bg-blue-600 transition duration-300 text-lg font-semibold text-gray-700 hover:text-white"
  >
    <FaUser className="inline-block mr-2" /> Users
  </NavLink>
  <NavLink
   onClick={DonaitonLink}
    to="/donation"
    className="block py-2.5 px-4 rounded hover:bg-blue-600 transition duration-300 text-lg font-semibold text-gray-700 hover:text-white"
  >
    <FaDonate className="inline-block mr-2" /> Donations
  </NavLink>
  <NavLink
    to="/category"
    className="block py-2.5 px-4 rounded hover:bg-blue-600 transition duration-300 text-lg font-semibold text-gray-700 hover:text-white"
  >
    <FaChartPie className="inline-block mr-2" /> Categories
  </NavLink>
  <NavLink
   onClick={ComplaintManagement}
    to="/ComplaintManagement"
    className="block py-2.5 px-4 rounded hover:bg-blue-600 transition duration-300 text-lg font-semibold text-gray-700 hover:text-white"
  >
    <FaDonate className="inline-block mr-2" /> Complaints
  </NavLink>
  <NavLink
   onClick={Reviews}
    to="/Reviews"
    className="block py-2.5 px-4 rounded hover:bg-blue-600 transition duration-300 text-lg font-semibold text-gray-700 hover:text-white"
  >
    <FaRev className="inline-block mr-2" /> Reviews
  </NavLink>
</nav>

    </motion.div>
  );
};

export default Sidebar;
