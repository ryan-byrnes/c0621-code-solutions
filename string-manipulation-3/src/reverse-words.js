/* exported reverseWords */
function reverseWords(string) {
  let reverseString = '';
  let reverseWord = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      reverseWord = string[i] + reverseWord;
    } else {
      reverseString += `${reverseWord} `;
      reverseWord = '';
    }
  }
  reverseString += reverseWord;
  return reverseString;
}
