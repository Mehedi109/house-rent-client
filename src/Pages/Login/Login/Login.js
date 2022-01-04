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
    <Container>
      <Form onSubmit={handleLoginSub}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              onChange={handleOnChange}
              type="email"
              placeholder="Email"
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              onChange={handleOnChange}
              type="password"
              placeholder="Password"
            />
          </Col>
        </Form.Group>

        <Button sx={{ width: 1, m: 1 }} type="submit" variant="contained">
          Register
        </Button>
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
    </Container>
  );
};

export default Login;
