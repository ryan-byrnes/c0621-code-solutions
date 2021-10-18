const takeAChance = require('./take-a-chance');

const promiseObject = takeAChance('Ryan');

promiseObject.then(value => {
  console.log(value);
});

promiseObject.catch(error => {
  console.log(error.message);
});
