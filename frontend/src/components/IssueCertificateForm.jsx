// src/components/IssueCertificateForm.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, MenuItem } from '@mui/material';
import axios from 'axios';

const IssueCertificateForm = () => {
    const [formData, setFormData] = useState({ issuer: '', prover: '', status: '', signature: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/vaccines/issueCertificate', formData);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Error issuing certificate');
        }
    };

    return (
        <Container maxWidth="lg">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    padding: 4,
                    backgroundColor: '#e0f7fa',
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
                    Issue Certificate
                </Typography>
                <TextField name="issuer" label="Issuer Address" fullWidth variant="outlined" margin="normal" onChange={handleChange} required />
                <TextField name="prover" label="Prover Address" fullWidth variant="outlined" margin="normal" onChange={handleChange} required />
                <TextField name="status" label="Status" select fullWidth variant="outlined" margin="normal" onChange={handleChange} required>
                    <MenuItem value="MANUFACTURED">Manufactured</MenuItem>
                    <MenuItem value="DELIVERING_INTERNATIONAL">Delivering International</MenuItem>
                    <MenuItem value="STORED">Stored</MenuItem>
                    <MenuItem value="DELIVERING_LOCAL">Delivering Local</MenuItem>
                    <MenuItem value="DELIVERED">Delivered</MenuItem>
                </TextField>
                <TextField name="signature" label="Signature" fullWidth variant="outlined" margin="normal" onChange={handleChange} required />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                    Issue Certificate
                </Button>
            </Box>
        </Container>
    );
};

export default IssueCertificateForm;
