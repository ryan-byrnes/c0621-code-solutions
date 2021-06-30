/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  var result = number < 5;
  return result;
}

console.log('result Value:', isUnderFive(3));

function isEven(number) {
  var even = number % 2 === 0;
  return even;
}

console.log('even Value:', isEven(9));

function startsWithJ(string) {
  var beginsWithJ = string[0] === 'J';
  return beginsWithJ;
}

console.log('Value beginsWithJ:', startsWithJ('Bobby J'));

function isOldEnoughToDrink(person) {
  var oldEnough = person.age >= 21;
  return oldEnough;
}

var bob = {
  name: 'bob',
  age: 10
};

console.log('oldEnough Value:', isOldEnoughToDrink(bob));

function isOldEnoughToDrive(person) {
  var canDrive = person.age >= 16;
  return canDrive;
}

var bart = {
  name: 'Bart',
  age: 89
};

console.log('canDrive Value:', isOldEnoughToDrive(bart));

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

console.log('isOldEnoughToDrinkAndDrive:', isOldEnoughToDrinkAndDrive(bob));

function categorizeAcidity(pH) {
  if (pH > 0 && pH <= 7) {
    var acidity = 'acid';
  } else if (pH > 7 && pH <= 14) {
    acidity = 'base';
  } else {
    acidity = 'invalid pH';
  }
  return acidity;
}

console.log('acidity:', categorizeAcidity(4));

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    var greeting = 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    greeting = 'I\'m cute~';
  } else {
    greeting = 'Goodnight everybody!';
  }
  return greeting;
}

console.log('greeting Value:', introduceWarnerBro('yakko'));
