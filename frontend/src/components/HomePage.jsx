// src/components/HomePage.jsx
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const HomePage = () => {
    return (
        <Container maxWidth="xl" sx={{ padding: 4, backgroundColor: '#ffffff', borderRadius: 2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', marginTop: 4 }}>
            <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
                <Typography variant="h3" gutterBottom>
                    Vaccine Supply Chain Management
                </Typography>
                <Typography variant="body1" paragraph>
                    Ensuring the safe and efficient distribution of vaccines is crucial for public health. Our system helps manage the entire supply chain process, from manufacturing to delivery.
                </Typography>
            </Box>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ padding: 3, textAlign: 'center', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
                        <Typography variant="h5" gutterBottom>
                            Track and Trace
                        </Typography>
                        <Typography variant="body1">
                            Monitor the journey of vaccines from production to administration.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ padding: 3, textAlign: 'center', backgroundColor: '#e0f7fa', borderRadius: '8px' }}>
                        <Typography variant="h5" gutterBottom>
                            Cold Chain Management
                        </Typography>
                        <Typography variant="body1">
                            Ensure vaccines are stored and transported at the correct temperatures.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ padding: 3, textAlign: 'center', backgroundColor: '#e8f5e9', borderRadius: '8px' }}>
                        <Typography variant="h5" gutterBottom>
                            Inventory Management
                        </Typography>
                        <Typography variant="body1">
                            Keep track of vaccine stock levels and expiration dates.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ padding: 3, textAlign: 'center', backgroundColor: '#fff9c4', borderRadius: '8px' }}>
                        <Typography variant="h5" gutterBottom>
                            Certification
                        </Typography>
                        <Typography variant="body1">
                            Issue and verify certificates for vaccine batches.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ marginTop: 6, textAlign: 'center' }}>
                <img src="https://media.istockphoto.com/id/1338845747/photo/international-shipping-products-distribution-from-world-warehouse-management-technology-and.jpg?s=612x612&w=0&k=20&c=FU0DNFiYn8-TuPgyUgK0y6Dk2w3ZZt_0byXZ9VbAL_s=" alt="Supply Chain" style={{ width: '100%', marginTop: '20px', borderRadius: '8px' }} />
                <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
                    Our Commitment to Public Health
                </Typography>
                <Typography variant="body1" paragraph>
                    Our mission is to ensure the safe, efficient, and transparent distribution of vaccines globally. By leveraging advanced technology and innovative solutions, we aim to enhance the reliability and accessibility of vaccines, protecting communities and saving lives.
                </Typography>
                <Typography variant="body1" paragraph>
                    Join us in revolutionizing the vaccine supply chain to build a healthier, more resilient world. With your support, we can make a significant impact on public health and well-being.
                </Typography>
            </Box>
        </Container>
    );
};

export default HomePage;
