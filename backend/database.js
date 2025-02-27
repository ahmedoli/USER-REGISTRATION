// /backend/database.js
const mysql = require('mysql2');

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Update with your MySQL username
    password: '', // Update with your MySQL password
    database: 'user_registration' // Database name
});

// Connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database!');
});

// Export the database connection
module.exports = db;
