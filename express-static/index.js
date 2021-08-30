const express = require('express');
const path = require('path');

const app = express();

const dir = path.join(__dirname, 'public');

const serveFiles = express.static(dir);

app.use(serveFiles);

app.listen(3000, () => {
  console.log('listening');
});
