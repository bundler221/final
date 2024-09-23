// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow CORS for all requests

app.get('/api/news', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=nellore&apiKey=3d37246c11894191b62fe0f5c2f80ad3`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
