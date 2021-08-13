const dataObject = require('./data.json');

const fs = require('fs');

const argv = process.argv[2];

if (argv === 'read') {
  for (const key in dataObject.notes) {
    console.log(`${key}: ${dataObject.notes[key]}`);
  }
} else if (argv === 'create') {
  dataObject.notes[dataObject.nextId] = process.argv[3];
  dataObject.nextId++;
} else if (argv === 'delete') {
  delete dataObject.notes[process.argv[3]];
} else if (argv === 'update') {
  dataObject.notes[process.argv[3]] = process.argv[4];
}

const newData = JSON.stringify(dataObject, null, 2);

fs.writeFile('node-notes-cli/data.json', newData, 'utf8', err => {
  if (err) throw err;
});
