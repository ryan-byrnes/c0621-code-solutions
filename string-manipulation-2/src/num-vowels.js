/* exported numVowels */
/* iterate through string
if character[i] is a vowel, add 1 to a counter variable
return counter */

function numVowels(string) {
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
      vowelCount += 1;
    }
  }
  return vowelCount;
}
