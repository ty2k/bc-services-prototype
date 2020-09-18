const express = require('express');
const path = require('path');
const app = express();
const servicesData = require('./services.json');
const PORT = process.env.PORT || 8080;

// Use React's build directory as static mount point
app.use(express.static(path.join(__dirname, 'react-app', 'build')));

// API route to serve Services data to React client
app.get('/api/services', function(req, res) {
  res.json(servicesData);
});

// All non-API requests get served the React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'react-app', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}.`)
});
