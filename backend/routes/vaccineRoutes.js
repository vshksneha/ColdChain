const express = require('express');
const router = express.Router();
const { addBatch, getBatchDetails, addEntity, issueCertificate } = require('../controllers/vaccineController');

// Route to add a vaccine batch
router.post('/addBatch', addBatch);

// Route to get vaccine batch details
router.get('/batch/:id', getBatchDetails);

// Route to add an entity (e.g., manufacturer, prover)
router.post('/addEntity', addEntity);

// Route to issue a certificate
router.post('/issueCertificate', issueCertificate);

module.exports = router;
