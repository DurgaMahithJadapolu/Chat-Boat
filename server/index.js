const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chatbotRoutes = require('./Routers/ChartBoatRouter');
const db = require('./Db/ConfigDb');

const app = express();
const PORT = 5000;

// CORS configuration to allow requests only from specific origin
const corsOptions = {
    origin: 'http://localhost:3001',  // Remove the trailing slash
    methods: ['GET', 'POST'],         // Allow only GET and POST methods
    allowedHeaders: ['Content-Type'], // Allow specific headers
  };
  

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Routes
app.use('/api', chatbotRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
