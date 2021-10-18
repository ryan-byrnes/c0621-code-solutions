const fs = require('fs');

const note = process.argv[2];

fs.writeFile('node-fs-writefile/note.txt', `${note}`, 'utf8', err => {
  if (err) throw err;
});
