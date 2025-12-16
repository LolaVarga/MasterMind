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
  // Serve static assets
  app.use(express.static(publicPath, {
    maxAge: '1d',
    etag: false
  }));
}

// SPA fallback - serve index.html for all unmatched routes
app.get('*', (req, res) => {
  const indexPath = path.join(publicPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(500).json({ error: 'Build directory not found. Run npm run build first.' });
  }
});

module.exports = app;

