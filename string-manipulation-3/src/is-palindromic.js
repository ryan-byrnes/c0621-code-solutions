/* exported isPalindromic */
/* split input string
reverse split string
check to see if the two new arrays are equal */

function isPalindromic(string) {
  const newArray = string.split('');
  const newString = newArray.join('');

  const reverseArray = newArray.reverse();
  const reverseString = reverseArray.join('');

  if (newString === reverseString) {
    return true;
  }
  return false;

}
