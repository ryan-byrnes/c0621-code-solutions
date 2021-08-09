/* exported firstChars */
/* split the string into an array of characters
add length number of characters to a new array
join and return new array */

function firstChars(length, string) {
  var newString = [];
  var spliceString = string.split('');
  for (var i = 0; i < length; i++) {
    newString.push(spliceString[i]);
  }
  return newString.join('');
}
