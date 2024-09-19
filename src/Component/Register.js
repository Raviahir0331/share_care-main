import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = ({ handleLoginSuccess }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleNormalRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/authregister', {
        userName,
        email,
        password
      });

      if (response.status === 201) {
        const data = response.data;
        console.log("Registration successful:", data);

        if (data.user && data.user.email) {
          handleLoginSuccess(data.user.email);
          navigate("/login");
        } else {
          console.error("Unexpected response format", data);
        }
      } else {
        console.error("Registration failed:", response.data.message);
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Registration failed:", error.response.data.message);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("An error occurred:", error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-green-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-fade-in-down">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">Register</h2>
        <form onSubmit={handleNormalRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="userName">Username:</label>
            <input
              id="userName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className="text-center text-gray-600 mb-4">
            Already have an account? <a href="/login" className="text-green-500 underline" onClick={() => navigate('/login')}>Login</a>.
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
