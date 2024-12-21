// models/Goal.js
const db = require('../config/database');

const Goal = {
  findAchieved: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM Goals WHERE status = "achieved"';
      db.query(query, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  deleteAchieved: (id) => {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM Goals WHERE id = ? AND status = "achieved"';
      db.query(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = Goal;
