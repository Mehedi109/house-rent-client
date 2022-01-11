import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Register from "./Pages/Login/Register/Register";
import AddHouse from "./Pages/Dashboard/AddHouse/AddHouse";
import Houses from "./Pages/Dashboard/Houses/Houses";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import Order from "./Pages/Order/Order";
import Messages from "./Pages/Dashboard/Messages/Messages";
import Review from "./Pages/Dashboard/Review/Review";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/addHouse" element={<AddHouse />} />
              <Route path="/dashboard/showHouse" element={<Houses />} />
              <Route
                path="/dashboard/manageOrders"
                element={<ManageOrders />}
              />
              <Route path="/dashboard/messages" element={<Messages />} />
              <Route path="/dashboard/review" element={<Review />} />
              <Route path="/dashboard/myOrders" element={<MyOrders />} />
              <Route path="/dashboard/makeAdmin" element={<MakeAdmin />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
