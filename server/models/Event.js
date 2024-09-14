const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  attendees: [{
    name: String,
    email: String,
    rsvp: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' }
  }]
});

module.exports = mongoose.model('Event', eventSchema);
