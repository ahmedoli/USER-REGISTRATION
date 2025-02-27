// /backend/server.js
const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const db = require('./database'); // Import the database connection
const cors=require('cors');
const app = express();
app.use(cors());
const port = 3000;

// Middleware to parse incoming JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for form submission (registration)
app.post('/submit', async (req, res) => {
    const { name, mobile, email, password } = req.body;

    // Insert user data into the database
    const query = 'INSERT INTO users (name, mobile, email, password) VALUES (?, ?, ?, ?)';
    db.query(query, [name, mobile, email, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error saving user.');
        }
        res.status(200).send('User registered successfully!');
    });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
