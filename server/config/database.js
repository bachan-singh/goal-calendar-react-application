// Import the mysql package
const mysql = require('mysql');

// Create a connection to the MySQL database
const conn = mysql.createConnection({
  host: 'localhost',       // database host
  user: 'root',            // database username
  password: '',            // database password
  database: 'goalcalendar' // database name
});

// Connect to the database
conn.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Exit the application if the connection fails
  }
  console.log('Connected to the MySQL database.');
});

// Export the database connection for use in other files
module.exports = conn;
