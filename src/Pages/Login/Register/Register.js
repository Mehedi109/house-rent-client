import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";

const Register = () => {
  const [loginData, setloginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    console.log(field);
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setloginData(newLoginData);
  };
  console.log(loginData);
  const handleLoginSub = (e) => {
    if (loginData.password !== loginData.passwordconfirm) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };
  return (
    // <Container>
    <div className="login-form shadow-lg mt-5">
      <h3>Regiser</h3>
      <Form onSubmit={handleLoginSub}>
        <Col sm={10} md={12} lg={6} className="mx-auto">
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Form.Control
              onChange={handleOnBlur}
              type="email"
              // placeholder="Email"
            />
          </Form.Group>
        </Col>
        <Col sm={10} md={12} lg={6} className="mx-auto">
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Form.Control
              onChange={handleOnBlur}
              type="email"
              // placeholder="Email"
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
              onChange={handleOnBlur}
              type="password"
              // placeholder="Password"
            />
          </Form.Group>
        </Col>
        <Col sm={10} md={12} lg={6} className="mx-auto">
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label style={{ textAlign: "start" }}>
              Confirm Password
            </Form.Label>
            <Form.Control
              onChange={handleOnBlur}
              type="password"
              // placeholder="Confirm Password"
            />
          </Form.Group>
        </Col>
        <Button sx={{ width: 1, m: 1 }} type="submit" variant="success">
          Register
        </Button>{" "}
        <br />
        <NavLink style={{ textDecoration: "none" }} to="/login">
          <Button variant="text">Already registered? please login</Button>
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

export default Register;
