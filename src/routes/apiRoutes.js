// receiveRoute.js
const express = require('express');
const router = express.Router();
const { sendMessageToGroup } = require('../controller/forward.js')


router.post('/receive', (req, res) => {
  const { apiKey,chatId,message } = req.body;

  if (apiKey && chatId && message) {
    console.log('Received params:', {  apiKey,chatId,message });
    sendMessageToGroup( apiKey, chatId, message, res ) //发送消息
  } else {
    res.status(400).json({ status: 'error', message: 'Missing parameters' });
  }
});

module.exports = router;