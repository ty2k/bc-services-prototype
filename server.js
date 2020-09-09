const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'react-app', 'build')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'react-app', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}.`)
});
