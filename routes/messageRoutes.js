const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/messageController');

// Ruta para enviar mensaje
router.post('/messages', sendMessage);

// Ruta para obtener todos los mensajes
router.get('/messages', getMessages);

module.exports = router;
