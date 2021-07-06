/* exported getWords */
/* receive string
iterate through string looking for a space character that indicates the end of a word
push word into an array
push final characters into array (final word of the array) */

/* function getWords(string) {
  var wordsArray = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ' || string.length > 1) {
      wordsArray = string.split(' ');
    }
  }
  return wordsArray;
} */

function getWords(string) {
  var wordsArray = string.split(' ');
  return wordsArray;
}
