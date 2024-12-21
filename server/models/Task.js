// models/Task.js
const db = require('../config/database');

const Task = {
  create: (userId, title, description, date) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO Tasks (user_id, title, description, date) VALUES (?, ?, ?, ?)';
      db.query(query, [userId, title, description, date], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  findAchieved: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM Tasks WHERE status = "achieved"';
      db.query(query, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  deleteAchieved: (id) => {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM Tasks WHERE id = ? AND status = "achieved"';
      db.query(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = Task;
