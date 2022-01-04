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

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
