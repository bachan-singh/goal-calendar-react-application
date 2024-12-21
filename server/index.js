// Required dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database'); // Database connection
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const goalRoutes = require('./routes/goalRoutes');

const cors = require('cors');
const app = express();
// Allow requests from localhost:3000
const corsOptions = {
  origin: 'http://localhost:3000',  // Allow only your frontend to make requests
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

// Middleware
app.use(cors(corsOptions));  // Enable CORS for the specified options
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/goals', goalRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
