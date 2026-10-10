const express = require('express');
const pool = require('../db');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO users (first_name, last_name, email)
       VALUES ($1, $2, $3)
       RETURNING id, first_name, last_name, email`,
      [firstName, lastName, email]
    );
    res.status(201).json({ message: 'User registered!', user: result.rows[0] });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ error: 'Email already registered.' });
    }
    console.error(err);
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;