import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import AdminLogin from "./Component/AdminLogin";
import AdminDashboard from "./Component/AdminDashboard";
import AdminRegistion from "./Component/AdminRegistation";
import Donation from "./Component/Donation";
import Category from "./Component/Category";
import AddCat from "./Component/AddCat";
import ComplaintsPage from "./Component/ComplaintsPage";
import ComplaintManagement from "./Component/ComplaintManagement";
import Reviews from "./Component/Reviews";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/adminregistion" element={<AdminRegistion />} />
          <Route path="/admin" element={<AdminDashboard />} /> 
          <Route path="/donation" element={<Donation />} />
          <Route path="/category" element={<Category />} />
          <Route path="/addcat" element={<AddCat />} />
          <Route path="/Complaint" element={<ComplaintsPage/>}/>
          <Route path="/Reviews" element={<Reviews/>}/>
          <Route path="/ComplaintManagement" element={<ComplaintManagement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
