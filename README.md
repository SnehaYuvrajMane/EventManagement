Event Management System
This is a full-stack event management application built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS. The application allows users to create, view, delete events, send event reminders, and manage attendees.

Table of Contents
Features
Tech Stack
Setup and Installation
Usage
API Endpoints
Screenshots
License


Features
Create, read, and delete events
Send reminders for upcoming events
Manage and view event attendees
In-app notifications for reminders
Email notifications (optional)
Tech Stack
Frontend:
React.js
Axios for making API requests
Tailwind CSS for styling
Backend:
Node.js
Express.js
MongoDB (using MongoDB Atlas as the cloud database)
Mongoose for object modeling
Nodemailer for email reminders (optional)
Other Dependencies:
dotenv for environment variable management
cors for handling Cross-Origin Resource Sharing
body-parser for parsing incoming requests
nodemon for development (optional)
Setup and Installation
Follow the instructions below to set up the project on your local machine.

Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js
MongoDB Atlas Account (or a locally installed MongoDB instance)
Step 1: Clone the Repository
bash
Copy code
git clone https://github.com/your-username/event-management-system.git
cd event-management-system
Step 2: Set up the Backend (Server)
Navigate to the server directory:

bash
Copy code
cd server
Install server dependencies:

bash
Copy code
npm install
Create a .env file in the server directory and add the following environment variables:

makefile
Copy code
MONGO_URI=your_mongo_db_atlas_uri
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
Start the backend server:

bash
Copy code
npm start
The backend server should now be running on http://localhost:5000.

Step 3: Set up the Frontend (Client)
Open a new terminal and navigate to the client directory:

bash
Copy code
cd ../client
Install client dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
The frontend should now be running on http://localhost:3000.

Usage
Once both the backend and frontend servers are running, you can access the Event Management System at http://localhost:3000.

Basic Functionality:
View Events: The home page lists all the events fetched from the backend.
Create Event: You can create new events by making an API request (additional functionality could be added in the UI).
Delete Event: Each event in the list has a "Delete" button, allowing users to remove an event.
Send Reminder: Clicking on the "Send Reminder" button sends a notification for the upcoming event (via API).
API Endpoints
The following API routes are available:

Event Routes
GET /api/events: Fetch all events.
POST /api/events: Create a new event.
DELETE /api/events/:id: Delete an event by ID.
POST /api/events/:id/reminder: Send a reminder for the event
