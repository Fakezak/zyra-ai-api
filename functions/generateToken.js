const serverless = require('serverless-http');
const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

// Endpoint to generate a new API token
app.get('/generate', (req, res) => {
    // Generate a secure 64-character token
    const token = "ZYRA-" + crypto.randomBytes(32).toString('hex').toUpperCase();
    
    res.json({ apiKey: token });
});

module.exports.handler = serverless(app);
