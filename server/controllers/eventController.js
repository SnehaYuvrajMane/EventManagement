const Event = require('../models/Event');
const nodemailer = require('nodemailer');

// Create a new event
exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Send email reminders to all attendees
exports.sendReminder = async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    event.attendees.forEach(attendee => {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: attendee.email,
        subject: `Reminder: Event "${event.name}"`,
        text: `Hi ${attendee.name},\n\nReminder for the event "${event.name}" on ${event.date}.`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.error(`Error sending email to ${attendee.email}: ${error}`);
        else console.log(`Reminder sent to ${attendee.email}: ${info.response}`);
      });
    });

    res.status(200).json({ message: 'Reminders sent successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
