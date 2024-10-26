//server.js
const express = require('express');
const bodyParser = require('body-parser');
const vaccineRoutes = require('./routes/vaccineRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use('/api/vaccines', vaccineRoutes);


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
