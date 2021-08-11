const fs = require('fs');

const read = process.argv[2];

fs.readFile(`node-fs-readfile/${read}`, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
