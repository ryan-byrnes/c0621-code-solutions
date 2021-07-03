/* exported isUpperCased */
/* receive the argument string
iterate through each character in the string
check to see if each character is upper cased
if any character is not upper cased, return false from the function
if all characters are upper cased, return true from the function */

function isUpperCased(word) {
  var upperCased = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      upperCased = false;
    }

  }
  return upperCased;
}
