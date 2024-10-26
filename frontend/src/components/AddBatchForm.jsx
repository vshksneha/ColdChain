// src/components/AddBatchForm.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const AddBatchForm = () => {
    const [formData, setFormData] = useState({ brand: '', manufacturer: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/vaccines/addBatch', formData);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Error adding batch');
        }
    };

    return (
        <Container maxWidth="lg">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    padding: 4,
                    backgroundColor: '#e3f2fd',
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
                    Add Vaccine Batch
                </Typography>
                <TextField name="brand" label="Brand" fullWidth variant="outlined" margin="normal" onChange={handleChange} required />
                <TextField name="manufacturer" label="Manufacturer Address" fullWidth variant="outlined" margin="normal" onChange={handleChange} required />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                    Add Batch
                </Button>
            </Box>
        </Container>
    );
};

export default AddBatchForm;
