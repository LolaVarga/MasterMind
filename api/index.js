const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware
app.use(express.json({ verify: (req, res, buf) => { req.rawBody = buf; } }));
app.use(express.urlencoded({ extended: false }));

// Serve static files from dist/public
const publicPath = path.join(__dirname, '../dist/public');
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));

  // SPA fallback - serve index.html for all unmatched routes
  app.use('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.status(500).json({ error: 'Build directory not found. Run npm run build first.' });
  });
}

module.exports = app;

