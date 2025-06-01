// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load .env variables
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.BACKEND_PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
