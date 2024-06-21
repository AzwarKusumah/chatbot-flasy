const express = require('express');
const router = express.Router();
const { chatbot } = require('../controller/apiController');

router.post("/api/chatbot", chatbot);

module.exports = router;