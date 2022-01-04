import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [loginData, setloginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setloginData(newLoginData);
  };
  const handleLoginSub = (e) => {
    loginUser(loginData.email, loginData.password);
    e.preventDefault();
  };
  return (
    // <Container>
    <div className="login-form shadow-lg mt-5">
      <h3>Login</h3>
      <Form onSubmit={handleLoginSub}>
        <Col sm={10} md={12} lg={6} className="mx-auto">
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
        </Col>
        <Col sm={10} md={12} lg={6} className="mx-auto">
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label style={{ textAlign: "start" }}>Password</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Col>
        <Button sx={{ width: 1, m: 1 }} type="submit" variant="success">
          Login
        </Button>{" "}
        <br />
        <NavLink style={{ textDecoration: "none" }} to="/register">
          <Button variant="text">New User? Please Register</Button>
        </NavLink>
      </Form>
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {user?.email && <Alert variant="danger">Register Successfully</Alert>}
      {authError && <Alert variant="danger">{authError}</Alert>}
    </div>
    // </Container>
  );
};

export default Login;
