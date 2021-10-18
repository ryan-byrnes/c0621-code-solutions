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
  if (id < 1 || isNaN(id)) {
    res.status(400).send('Id must be a positive number');
  } else if (data.notes[id]) {
    res.json(data.notes[id]);
  } else {
    res.status(404).send(`Error: Could not find note with id number: ${id}`);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).send('Error: Please enter note content.');
  } else if (req.body.content) {
    req.body.id = data.nextId;
    data.notes[data.nextId] = req.body;
    data.nextId++;
    fs.writeFile('./data.json', JSON.stringify(data), 'utf8', err => {
      if (err) {
        res.status(500).send('Error: An unexpected error occurred.');
      } else res.status(201).send(req.body);

    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 1 || isNaN(id)) {
    res.status(400).send('Please enter a valid Id number');
  } else if (!id) {
    res.status(404).send('Id number does not exist');
  } else if (id) {
    delete data.notes[id];
    fs.writeFile('./data.json', JSON.stringify(data), 'utf8', err => {
      if (err) {
        console.error('Error: An unexpected error occurred.');
        res.status(500).send('Error: An unexpected error occurred.');
      } else res.status(201).send(req.body);

    });

  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const error = 'Error: An unexpected error occurred.';
  if (id < 1 || isNaN(id)) {
    res.status(400).send('Please enter a valid Id number');
  } else if (!id) {
    res.status(404).send('Id number does not exist');
  } else if (id) {
    req.body.id = parseInt(id);
    data.notes[id] = req.body;
    fs.writeFile('./data.json', JSON.stringify(data), 'utf8', err => {
      if (err) {
        res.status(500).send(error);
      } else res.status(201).send(req.body);

    });

  }
});

app.listen(3000, () => {

});
