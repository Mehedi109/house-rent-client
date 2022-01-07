import React, { useState } from "react";
import {
  Link,
  Navigate,
  NavLink,
  useLocation,
  useNavigate,
  useNavigationType,
} from "react-router-dom";
// import { Link, useHistory, useLocation } from "react-router-dom";
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
import { Box } from "@mui/system";
import { CircularProgress, Grid, TextField, Typography } from "@mui/material";

const Register = () => {
  // const [userData, setUserData] = useState({});
  // const { register, isLoading } = useAuth();
  // const [error, setError] = useState("");
  // const history = unstable_HistoryRouter();
  // const location = useLocation();
  /* const handleOnBlur = (e) => {
    const field = e.target.name;
    console.log(field);
    const value = e.target.value;
    const newLoginData = { ...userData };
    newLoginData[field] = value;
    setUserData(newLoginData);
  }; */
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");
  const { register, isLoading } = useAuth();
  const history = useNavigate();
  const location = Navigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = { ...userData };
    newUserData[field] = value;
    setUserData(newUserData);
  };

  const handlerUserForm = (e) => {
    e.preventDefault();
    alert("data of form");
    if (userData.password1 !== userData.password2) {
      return setError("password doesn't match");
    }
    register(
      userData.email,
      userData.name,
      userData.password1,
      history,
      location
    );

    setError("");
    document.getElementById("myform").reset();
  };
  /*  const handleLoginSub = (e) => {
    if (userData.password !== userData.passwordconfirm) {
      alert("Your password did not match");
      return;
    }
    register(userData.email, userData.password);
    e.preventDefault();
  }; */
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/9tybF8Y/4957136.jpg"
            alt=""
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          style={{
            background: "white",
            height: "200px",
            width: "2px",
            marginTop: "85px",
          }}
        >
          <Typography variant="h3" component="div" gutterBottom>
            Register
          </Typography>

          {!isLoading && (
            <form onSubmit={handlerUserForm} id="myform">
              {error}

              <TextField
                required
                id="standard-basic"
                label="Your name"
                name="name"
                onBlur={handleOnBlur}
                style={{ width: "80%", margin: "5px" }}
                variant="standard"
              />

              <TextField
                required
                id="standard-basic"
                label="Your Email"
                type="email"
                name="email"
                onBlur={handleOnBlur}
                style={{ width: "80%", margin: "5px" }}
                variant="standard"
              />

              <TextField
                required
                autoComplete="off"
                id="standard-basic"
                label="password"
                type="password"
                name="password1"
                onBlur={handleOnBlur}
                style={{ width: "80%", margin: "5px" }}
                variant="standard"
              />

              <TextField
                required
                autoComplete="off"
                id="standard-basic"
                label="confirm password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                style={{ width: "80%", margin: "5px" }}
                variant="standard"
              />

              <Button type="submit" variant="contained" className="mt-2">
                Submit
              </Button>
            </form>
          )}
          {isLoading && <CircularProgress />}

          <p className="mt-3">
            New User? <Link to="/login"> Click Here</Link>
          </p>
        </Grid>
      </Grid>
    </Box>
    /* <Container>
      {
        <div className="login-form shadow-lg mt-5">
          <h3>Regiser</h3>
          <Form onSubmit={handlerUserForm}>
            <Col sm={10} md={12} lg={6} className="mx-auto">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Form.Control
                  onChange={handleOnBlur}
                  type="text"
                  // placeholder="Email"
                />
              </Form.Group>
            </Col>
            <Col sm={10} md={12} lg={6} className="mx-auto">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
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
                  name="password1"
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
                  name="password2"
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
      }
    </Container> */
  );
};

export default Register;
