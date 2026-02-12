const express = require('express');
const path = require('path');
const app = express();

app.get('/free_google', (req, res) => {
  res.sendFile(path.join(__dirname, 'free_google.html'));
});

app.get('/thankyouads', (req, res) => {
  res.sendFile(path.join(__dirname, 'thankyouads.html'));
});

app.use(express.static(__dirname, {
  extensions: ['html'],
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'no-cache');
  }
}));

app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, '0.0.0.0', () => {
  console.log('Server running on port 5000');
});
