/* exported isVowel */
/* receive string argument
check whether or not the string character is a vowel
store boolean result in a variable
return variable */

function isVowel(char) {
  return /[aeiou]/.test(char.toLowerCase());
}
