const express = require('express');
const router = express.Router();
const chatbotController = require('../Controller/ChartBoatController');

// Route for chatbot messages
router.post('/send-message', chatbotController.handleMessage);

module.exports = router;
