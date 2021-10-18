/* exported isLowerCased */
/* receive the argument string
look at every character in the string to check if it is lower cased
check to make sure each character is a letter
if a character is a letter and is not lower cased, return false from the function
if all letter characters are lower cased, return true from the function */

function isLowerCased(word) {
  var lowerCase;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      lowerCase = true;
    } else {
      lowerCase = false;
      break;
    }
  }
  return lowerCase;
}
