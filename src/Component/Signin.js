import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    axios
      .post("http://localhost:5000/api/signin", { email, password })
      .then(() => {
        // alert("Log in success");
        toast.success('Log in success')
        navigate("/Donate");
      })
      .catch((err) => {
        console.log(`Something went wrong, can't login ${err}`);
        // alert("Login failed, please try again");
        toast.error('Login failed, please try again')
      });
  };

  return (
    <>
      <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url('https://c0.wallpaperflare.com/preview/287/860/54/team-ethnicity-group-hands.jpg')` }}>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Sign In</h1>

          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">E-mail</label>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-400 bg-transparent text-white placeholder-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            {/* Reset Password */}
            <div className="text-right">
              <Link to="/reset-password" className="text-sm text-indigo-400 hover:underline">Reset Password</Link>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="button"
                className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
                onClick={handleClick}
              >
                Login
              </button>
            </div>
          </form>

          {/* Signup Link */}
          <p className="mt-6 text-center text-sm text-gray-300">
            Don't have an account? <Link to="/signup" className="text-indigo-400 hover:underline">Sign up now</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Signin;
