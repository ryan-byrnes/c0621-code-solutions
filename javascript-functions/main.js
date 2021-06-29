function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var secondsResult = convertMinutesToSeconds(5);
console.log(secondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResult = greet('Ryan');
console.log(greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(17, 42);
console.log(areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var firstNameResult = getFirstName({ firstName: 'Ryan', lastName: 'Byrnes' });
console.log(firstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log(lastElementResult);
