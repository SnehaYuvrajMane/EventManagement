const express = require('express');
const { createEvent, getEvents, sendReminder } = require('../controllers/eventController');
const router = express.Router();

// Event Routes
router.post('/', createEvent);
router.get('/', getEvents);
router.post('/:id/reminder', sendReminder);

module.exports = router;
