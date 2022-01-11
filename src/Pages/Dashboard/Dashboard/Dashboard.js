import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="menubar">
        <li>
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/dashboard/showHouse"
          >
            {" "}
            Houses
          </Nav.Link>
        </li>
        <li>
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/dashboard/addHouse"
          >
            {" "}
            Add House
          </Nav.Link>
        </li>
        <li>
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/dashboard/manageOrders"
          >
            Manage Orders
          </Nav.Link>
        </li>
        <li>
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/dashboard/messages"
          >
            Messages
          </Nav.Link>
        </li>
        <li>
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/dashboard/makeAdmin"
          >
            Make Admin
          </Nav.Link>
        </li>
        <li>
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/dashboard/myOrders"
          >
            My Orders
          </Nav.Link>
        </li>
        <li>
          <Nav.Link style={{ color: "white" }} as={Link} to="/dashboard/review">
            Review
          </Nav.Link>
        </li>
      </div>
      <div className="dashboard-body">
        <h4 className="">Dashboard</h4>
        <Container>
          <Outlet></Outlet>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
