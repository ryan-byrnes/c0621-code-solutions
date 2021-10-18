/* exported isVowel */
/* receive string argument
check whether or not the string character is a vowel
store boolean result in a variable
return variable */

function isVowel(char) {
  var vowel = false;
  if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
    vowel = true;
  }
  return vowel;
}
