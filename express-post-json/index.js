const express = require('express');

const app = express();

let nextId = 1;

const grades = [];

const expressJSON = express.json();

app.use('/api/grades', expressJSON);

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  req.body.nextId = nextId;
  res.status(201).send('Created');
  grades.push(req.body);
  nextId++;

});

app.listen(3000, () => {
});
