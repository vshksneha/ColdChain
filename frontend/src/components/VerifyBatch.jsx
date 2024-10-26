// src/components/VerifyBatch.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const VerifyBatch = () => {
    const [formData, setFormData] = useState({ id: '', issuer: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/vaccines/verifyBatch', formData);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Error verifying batch');
        }
    };

    return (
        <Container maxWidth="lg">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    padding: 4,
                    backgroundColor: '#fff3e0',
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
                    Verify Batch
                </Typography>
                <TextField name="id" label="Certificate ID" fullWidth variant="outlined" margin="normal" onChange={handleChange} required />
                <TextField name="issuer" label="Issuer Address" fullWidth variant="outlined" margin="normal" onChange={handleChange} required />
                <TextField name="message" label="Message Hash" fullWidth variant="outlined" margin="normal" onChange={handleChange} required />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                    Verify Batch
                </Button>
            </Box>
        </Container>
    );
};

export default VerifyBatch;
