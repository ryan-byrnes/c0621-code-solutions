const express = require('express');
const data = require('./data.json');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in data.notes) {
    notesArray.push(data.notes[id]);

  }
  res.send(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 1) {
    res.sendStatus(400).send('Id must be a positive number');
  } else if (data.notes[id]) {
    res.json(data.notes[id]);
  } else {
    res.sendStatus(404).send(`Error: Could not find note with id number: ${id}`);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.sendStatus(400).send('Error: Please enter note content.');
  } else if (req.body.content) {
    req.body.id = data.nextId;
    data.notes[data.nextId] = req.body;
    data.nextId++;
    updateData();
    res.sendStatus(201).send(data.notes[data.nextId]);

  } else {
    res.sendStatus(500).send('Error: An unexpected error occurred.');
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 1 || isNaN(id)) {
    res.sendStatus(400).send('Please enter a valid Id number');
  } else if (!id) {
    res.sendStatus(404).send('Id number does not exist');
  } else if (id) {
    delete data.notes[id];
    updateData();
    res.sendStatus(204);
  } else {
    res.sendStatus(500).send('Error: An unexpected error occurred');
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 1 || isNaN(id)) {
    res.sendStatus(400).send('Please enter a valid Id number');
  } else if (!id) {
    res.sendStatus(404).send('Id number does not exist');
  } else if (id) {
    req.body.id = id;
    data.notes[id] = req.body;
    updateData();
    res.sendStatus(200).send(data.notes[id]);
  } else {
    res.sendStatus(500).send('Error: An unexpected error occurred');
  }
});

app.listen(3000, () => {

});

function updateData() {
  fs.writeFile('./data.json', JSON.stringify(data), 'utf8', err => {
    if (err) throw err;
  });
}
