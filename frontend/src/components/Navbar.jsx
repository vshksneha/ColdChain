// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#00796b' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Vaccine Supply Chain
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/add-entity">Add Entity</Button>
                <Button color="inherit" component={Link} to="/add-batch">Add Batch</Button>
                <Button color="inherit" component={Link} to="/issue-certificate">Issue Certificate</Button>
                <Button color="inherit" component={Link} to="/verify-batch">Verify Batch</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
