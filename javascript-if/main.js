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

function isEven(number) {
  var even = number % 2 === 0;
  return even;
}

function startsWithJ(string) {
  var beginsWithJ = string[0] === 'J';
  return beginsWithJ;
}

function isOldEnoughToDrink(person) {
  var oldEnough = person.age >= 21;
  return oldEnough;
}

function isOldEnoughToDrive(person) {
  var canDrive = person.age >= 16;
  return canDrive;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH > 0 && pH < 7) {
    var acidity = 'acid';
  } else if (pH > 7 && pH <= 14) {
    acidity = 'base';
  } else if (pH === 7) {
    acidity = 'neutral';
  } else {
    acidity = 'invalid pH';
  }
  return acidity;
}

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
