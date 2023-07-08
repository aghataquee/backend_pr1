const express = require('express');
const app = express();

let counter = 0;

// API endpoint to get the current counter value
app.get('/', (req, res) => {
  res.json({ counter });
});

// API endpoint to increment the counter
app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// API endpoint to decrement the counter
app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});