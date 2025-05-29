// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const aiRoutes = require('./backend/routes/ai');

// Initialize environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Routes
app.use('/api/ai', aiRoutes);

// Health Check Endpoint
app.get('/', (req, res) => {
  res.send('Skailor Backend Server is up and running 🚀');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Skailor server is running at http://localhost:${PORT}`);
});
