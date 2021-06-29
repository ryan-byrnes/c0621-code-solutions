function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  console.log(seconds);
}

convertMinutesToSeconds(5);

function greet(name) {
  var greeting = 'Hey, ' + name;
  console.log(greeting);
}

greet('Ryan');

function getArea(width, height) {
  var area = width * height;
  console.log(area);
}

getArea(17, 42);

function getFirstName(person) {
  var firstName = person.firstName;
  console.log(firstName);
}

getFirstName({ firstName: 'Ryan', lastName: 'Byrnes' });

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  console.log(lastElement);
}

getLastElement(['propane', 'and', 'propane', 'accessories']);
