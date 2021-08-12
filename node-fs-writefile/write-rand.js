const fs = require('fs');

fs.writeFile('node-fs-writefile/random.txt', `${Math.random()}`, 'utf8', err => {
  if (err) throw err;
});
