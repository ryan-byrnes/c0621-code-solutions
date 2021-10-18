/* exported isPalindromic */
/* split input string
reverse split string
check to see if the two new arrays are equal */

function isPalindromic(string) {

  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newString += string[i];
    }
  }

  const newArray = newString.split('');

  const reverseArray = newArray.reverse();

  const reverseString = reverseArray.join('');

  if (newString !== reverseString) {
    return false;
  }

  return true;
}
