// src/components/AddEntityForm.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const AddEntityForm = () => {
    const [formData, setFormData] = useState({ id: '', mode: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/vaccines/addEntity', formData);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Error adding entity');
        }
    };

    return (
        <Container maxWidth="lg">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    padding: 4,
                    backgroundColor: '#e8f5e9',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    margin: '20px auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    boxSizing: 'border-box',
                    height: '80vh'
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Add Entity
                </Typography>
                <TextField name="id" label="Entity ID" fullWidth variant="outlined" margin="normal" onChange={handleChange} required />
                <TextField name="mode" label="Mode (ISSUER, PROVER, VERIFIER)" fullWidth variant="outlined" margin="normal" onChange={handleChange} required />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                    Add Entity
                </Button>
            </Box>
        </Container>
    );
};

export default AddEntityForm;
