const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'interview-app-database',
  database: 'interview_db',
  password: 'password',
  port: 5432,
});

app.get('/', (req, res) => {
  res.send('Interview App Backend is running');
});

app.get('/companies', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM companies ORDER BY market_value DESC LIMIT 10');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching companies' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
