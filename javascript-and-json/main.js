var array = [
  {
    isbn: '1234',
    title: 'Cool Book',
    auther: 'Cool Guy'
  },
  {
    isbn: '45643',
    title: 'Awesome Book',
    author: 'Awesome Guy'
  },
  {
    isbn: '0748',
    title: 'Fantastic Book',
    author: 'Fantastic Guy'
  }
];

console.log('array and type:', array, typeof array);

var string = JSON.stringify(array);

console.log('value of JSON string and type:', string, typeof string);

var object = JSON.parse(string);

var stringJSON = '{"name":"Ryan","studentID":23}';

console.log('studentJSON string:', stringJSON);
console.log('studentJSON type:', typeof stringJSON);

console.log('parse string and type:', object, typeof object);
