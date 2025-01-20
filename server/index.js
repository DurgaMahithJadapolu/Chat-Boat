const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chatbotRoutes = require('./Routers/ChartBoatRouter');
const db = require('./Db/ConfigDb');

const app = express();
const PORT = 5000;

// CORS configuration to allow requests only from a specific origin
const corsOptions = {
    origin: 'https://chat-bot-tawny-sigma.vercel.app/', // Correct origin without trailing slash
    methods: ['GET', 'POST', 'OPTIONS'], // Include OPTIONS for preflight requests
    allowedHeaders: ['Content-Type'], // Allow specific headers
    credentials: true, // Allow cookies if needed
};



  

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());


app.get('/ping', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Routes
app.use('/api', chatbotRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
