// routes/taskRoutes.js
const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Create Task
router.post('/', async (req, res) => {
  const { userId, title, description, date } = req.body;
  try {
    await Task.create(userId, title, description, date);
    res.status(201).json({ message: 'Task created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Database error' });
  }
});

// Get Achieved Tasks
router.get('/achieved', async (req, res) => {
  try {
    const tasks = await Task.findAchieved();
    res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching tasks' });
  }
});

// Delete Achieved Task
router.delete('/achieved/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Task.deleteAchieved(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found or not achieved' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Database error' });
  }
});

module.exports = router;