// routes/goalRoutes.js
const express = require('express');
const Goal = require('../models/Goal');

const router = express.Router();

// Get Achieved Goals
router.get('/achieved', async (req, res) => {
  try {
    const goals = await Goal.findAchieved();
    res.status(200).json(goals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching goals' });
  }
});

// Delete Achieved Goal
router.delete('/achieved/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Goal.deleteAchieved(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Goal not found or not achieved' });
    }
    res.status(200).json({ message: 'Goal deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Database error' });
  }
});

module.exports = router;