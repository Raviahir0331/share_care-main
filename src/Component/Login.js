import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const Login = ({ handleLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleNormalLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/authlogin', {
        email,
        password
      });

      if (response.status === 200) {
        const data = response.data;
        handleLoginSuccess(data.user.email);
        navigate("/pages", { replace: true });
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleGoogleLoginSuccess = async (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      const serverResponse = await axios.post('http://localhost:5000/api/google-login', {
        email: decoded.email,
        name: decoded.name,
        googleId: decoded.sub,
      });

      if (serverResponse.status === 200) {
        const data = serverResponse.data;
        handleLoginSuccess(data.user.email);
        navigate("/pages");
      } else {
        console.error("Google login failed:", serverResponse.data.message);
      }
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google login failed:", error);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-green-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-fade-in-down">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">Login</h2>
        <form onSubmit={handleNormalLogin}>
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
            Not registered? <a href="/register" className="text-green-500 underline" onClick={() => navigate('/register')}>Register now</a>.
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>

        <div className="text-center my-4">OR</div>

        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
          shape="pill"
          theme="outline"
        />
      </div>
    </div>
  );
};

export default Login;
