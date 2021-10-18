/* exported getLastChar */
/* receive string
store a copy of the character at the last position of the string in a new variable
return that variable */

function getLastChar(string) {
  var lastChar = string[string.length - 1];
  return lastChar;
}
