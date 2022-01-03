import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

// import logimg from '../../../images/login.png'

const Login = () => {
    const [loginData, setloginData] = useState({})
    const { user, loginUser, isLoading, authError } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setloginData(newLoginData)
    }
    const handleLoginSub = e => {
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography
                        sx={{ textAlign: 'center' }} variant="body1"

                        gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSub}>
                        <TextField
                            sx={{ width: 1, m: 1 }}
                            id="standard-basic" label="Your Email"
                            name="email"
                            onChange={handleOnChange} variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: 1, m: 1 }} id="standard-basic" label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button
                            sx={{ width: 1, m: 1 }}
                            type="submit"
                            variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register"><Button variant="text">New User? Please Register</Button></NavLink>
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Register Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                {/* <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={logimg} alt="" />
                </Grid> */}

            </Grid>
        </Container>
    );
};

export default Login;