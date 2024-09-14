const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection (updated)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
const eventRoutes = require('./routes/eventRoutes');
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Test MongoDB connection after the database is connected
mongoose.connection.once('open', async () => {
    console.log('Connected to MongoDB');
    
    // Test query to list databases
    try {
      const admin = new mongoose.mongo.Admin(mongoose.connection.db);
      const dbs = await admin.listDatabases();
      console.log('Databases:');
      console.log(dbs.databases);
    } catch (err) {
      console.error('Error listing databases:', err);
    }
  });
  