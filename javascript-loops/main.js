/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  for (currentNumber = 1; currentNumber < 11; currentNumber++) {
    numbers.push(currentNumber);
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  for (currentNumber = 2; currentNumber < 22; currentNumber += 2) {
    evenNumbers.push(currentNumber);
  }
  return evenNumbers;

}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  for (count = 1; count < times; count++) {
    repeated += word + ', ';
  }
  return repeated;
}

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
