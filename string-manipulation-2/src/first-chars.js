/* exported firstChars */
/* string.slice(length) */

function firstChars(length, string) {
  var newString = [];
  var spliceString = string.split('');
  for (var i = 0; i < length; i++) {
    newString.push(spliceString[i]);
  }
  return newString.join('');
}
