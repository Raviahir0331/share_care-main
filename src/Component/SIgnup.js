import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [first_name, setFirstName] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      first_name,
      middle_name,
      last_name,
      email,
      password,
      city,
      contact_number,
      address,
    };
    axios
      .post("http://localhost:5000/api/adduser", data)
      .then(() => {
        toast.success("Registration successful!");
        navigate("/signin");
      })
      .catch((err) => {
        console.log(`Something went wrong during signup: ${err}`);
        toast.error("Signup failed, please try again");
      });
  };

  return (
    <>
      <section
        className="bg-cover bg-center h-scrolled flex items-center justify-center"
        style={{
          backgroundImage: `url('https://c0.wallpaperflare.com/preview/287/860/54/team-ethnicity-group-hands.jpg')`,
        }}
      >
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-10 rounded-lg shadow-lg col-md-6">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Sign Up
          </h1>

          <form className="space-y-6">
            {/* First Name Input */}
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-300">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-400 bg-transparent text-white placeholder-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
              />
            </div>

            {/* Middle Name Input */}
            <div>
              <label htmlFor="middle_name" className="block text-sm font-medium text-gray-300">
                Middle Name
              </label>
              <input
                type="text"
                id="middle_name"
                className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-400 bg-transparent text-white placeholder-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setMiddleName(e.target.value)}
                placeholder="Enter your middle name"
              />
            </div>

            {/* Last Name Input */}
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-400 bg-transparent text-white placeholder-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-400 bg-transparent text-white placeholder-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-400 bg-transparent text-white placeholder-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            {/* City Input */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-300">
                City
              </label>
              <input
                type="text"
                id="city"
                className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-400 bg-transparent text-white placeholder-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your city"
              />
            </div>

            {/* Contact Number Input */}
            <div>
              <label htmlFor="contact_number" className="block text-sm font-medium text-gray-300">
                Contact Number
              </label>
              <input
                type="text"
                id="contact_number"
                className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-400 bg-transparent text-white placeholder-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Enter your contact number"
              />
            </div>

            {/* Address Input */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-300">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-400 bg-transparent text-white placeholder-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
              />
            </div>

            {/* Register Button */}
            <div>
              <button
                type="button"
                className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>

          {/* Signin Link */}
          <p className="mt-6 text-center text-sm text-gray-300">
            Already have an account? <Link to="/signin" className="text-indigo-400 hover:underline">Sign In</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Signup;
