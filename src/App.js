import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import AddHouse from "./Pages/Dashboard/AddHouse/AddHouse";
import Houses from "./Pages/Dashboard/Houses/Houses";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/addHouse" element={<AddHouse />} />
            <Route path="/dashboard/showHouse" element={<Houses />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
