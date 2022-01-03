import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="menubar">
        <li>
          <i className="fal fa-house"></i>
          <Nav.Link style={{ color: "white" }}>
            <i class="far fa-home" style={{ backgroundColor: "white" }}></i> Add
            House
          </Nav.Link>
        </li>
        <li>
          <Nav.Link style={{ color: "white" }}>
            <i class="fal fa-address-book"></i> Manage Orders
          </Nav.Link>
        </li>
        <li>
          <Nav.Link style={{ color: "white" }}>Messages</Nav.Link>
        </li>
      </div>
      <div className="dashboard-body">
        <h3>Dashboard</h3>
      </div>
    </div>
  );
};

export default Dashboard;
