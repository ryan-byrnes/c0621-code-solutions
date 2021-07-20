/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var splitString = string.split('');
  var firstValue = splitString[firstIndex];
  var secondValue = splitString[secondIndex];
  splitString[firstIndex] = secondValue;
  splitString[secondIndex] = firstValue;
  return splitString.join('');
}
