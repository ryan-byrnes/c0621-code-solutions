const express = require('express');

const app = express();

app.use(function (req, res) {

  res.send('a string');
});

app.listen(3000, () => {

});
