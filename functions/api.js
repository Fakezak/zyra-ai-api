const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.use(express.json());

// Your custom Zyra API token
const ZYRA_TOKEN = "ZYRA-9F2K8M4T7V1X6Q3L5P0R8S2B7N4D1J6H3G9C0E5W8Y2A7U4Z1F6K9L3M5N8Q2";

app.post('/zyra', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== `Bearer ${ZYRA_TOKEN}`) {
        return res.status(401).json({ error: 'Invalid API token' });
    }

    const userMessage = req.body.message || '';
    const response = `Zyra AI says: Received -> "${userMessage}"`;

    res.json({ response });
});

module.exports.handler = serverless(app);
