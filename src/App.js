import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Component/Signin";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Signup, { SIgnup } from "./Component/SIgnup";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Gallery from "./Component/Gallery";
import Donate from "./Component/Donation/Donate";
import Contact from "./Component/Contact";
import $ from "jquery";
import Pages from "./Component/Pages";
// window.$ = $; // Ensure jQuery is available globally
import "@fancyapps/fancybox/dist/jquery.fancybox.css";
import "@fancyapps/fancybox";
import Notification from "./Component/Notification";
import Login from "./Component/Login";
import Register from "./Component/Register";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import ComplaintForm from "./Component/ComplaintForm";
import ClientReviewCard from "./Component/ClientReviewCard";
import Reviews from "./Component/Reviews";

function App() {
  const [user, setUser] = useState(null);
  const handleLoginSuccess = (email) => {
    setUser(email); // Set the user email or whatever you want to track after login
    console.log("Login successful for:", email);
  };
 

  return (

    <>
      <BrowserRouter>
      <GoogleOAuthProvider clientId="669379484831-mqcc6tavvpr01ip6eqeunebopous2itm.apps.googleusercontent.com">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="donate" element={<Donate />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pages" element={<Pages  user={user} />} />
          <Route path="/ComplaintForm" element={<ComplaintForm />} />
          <Route path="/ClientReviewCard" element={<ClientReviewCard />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/login" element={<Login   handleLoginSuccess={handleLoginSuccess}/>} />
          <Route path="/register" element={<Register  handleLoginSuccess={handleLoginSuccess} />} />
        </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
      <Notification />
      
    </>
  );
}

export default App;
