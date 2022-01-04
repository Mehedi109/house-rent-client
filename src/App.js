import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import About from "./Pages/About/About";
<<<<<<< HEAD
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
=======
import Blog from "./Pages/Blog/Blog";
import AddHouse from "./Pages/Dashboard/AddHouse/AddHouse";
>>>>>>> Mehedi-Alam

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthProvider>
=======
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/addHouse" element={<AddHouse />} />
          </Route>
        </Routes>
      </Router>
>>>>>>> Mehedi-Alam
    </div>
  );
}

export default App;
