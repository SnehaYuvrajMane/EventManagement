const express = require("express");
const {
  createEvent,
  getEvents,
  sendReminder,
} = require("../controllers/eventController");
const router = express.Router();

// Event Routes
router.post("/", createEvent);
router.get("/", getEvents);
router.post("/:id/reminder", sendReminder);

router.delete("/:id", async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
