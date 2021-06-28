var student = {
  firstName: 'Ryan',
  lastName: 'Byrnes',
  age: 31
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Coach';

console.log('value of livesInIrvine:', student.livesInIrvine);

console.log('value of previousOccupation:', student.previousOccupation);

console.log('student object:', student);

var vehicle = {
  make: 'Chevy',
  model: 'Silverado',
  year: '2021'
};

vehicle['isConvertible'] = false;
vehicle['color'] = 'black';

console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('vehicle object:', vehicle);

var pet = {
  name: 'Ghost',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('pet object:', pet);
