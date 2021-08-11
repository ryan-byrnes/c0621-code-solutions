const addFile = require('./add');

const subtractFile = require('./subtract');

const multiplyFile = require('./multiply');

const divideFile = require('./divide');

if (process.argv[3] === 'plus') {
  console.log('result:', addFile.add(parseInt(process.argv[2]), parseInt(process.argv[4])));
} else if (process.argv[3] === 'minus') {
  console.log('result:', subtractFile.subtract(parseInt(process.argv[2]), parseInt(process.argv[4])));
} else if (process.argv[3] === 'times') {
  console.log('result:', multiplyFile.multiply(parseInt(process.argv[2]), parseInt(process.argv[4])));
} else if (process.argv[3] === 'over') {
  console.log('result:', divideFile.divide(parseInt(process.argv[2]), parseInt(process.argv[4])));
}
